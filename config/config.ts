import { config as dotenvConfig } from "dotenv"
import path from "path"

interface Config {
  url: string
  timeout: number
  headless: boolean
}

const dotenvPath = path.resolve(__dirname, "env", ".env")
dotenvConfig({ path: dotenvPath })

function loadEnvVariable(name: string): string {
  const variable = process.env[name]
  if (!variable) {
    throw Error(`Env variable ${name} not found!`)
  }
  return variable
}

function getConfig(): Config {
  return {
    url: loadEnvVariable("URL"),
    timeout: Number(loadEnvVariable("TIMEOUT")),
    headless: loadEnvVariable("HEADLESS") === "true",
  }
}

const config = getConfig()

export default config