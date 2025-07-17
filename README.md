# Playwright Test Boilerplate

A comprehensive TypeScript-based Playwright testing framework with a modular architecture, perfect for end-to-end testing.

## 🚀 Project Setup

### Prerequisites
- Node.js (v24 or higher)
- pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd boilerplate-playwright
   ```

2. **Install dependencies and Playwright browsers**
   ```bash
   pnpm run install-deps
   ```
   This command will:
   - Install all npm dependencies
   - Download Playwright browsers with system dependencies

## 🔧 VS Code Setup for Playwright
[Getting started - VS Code](https://playwright.dev/docs/getting-started-vscode)

## 📁 Project Structure

```
boilerplate-playwright/
├── config/                    # Configuration files
│   ├── config.ts              # Main configuration loader
│   └── env/                   # Environment variables
│       └── .env.example       # Environment template
├── src/                       # Source code
│   ├── apiManagers/           # API client utilities
│   │   └── apiClient.ts       # HTTP client setup
│   ├── constants/             # Project constants
│   │   └── timeouts.ts        # Timeout configurations
│   ├── fixtures/              # Test fixtures
│   │   └── samplePage.ts      # Page object fixtures
│   ├── pageObjects/           # Page Object Models
│   │   └── samplePage.ts      # Sample page implementation
│   └── types/                 # TypeScript type definitions
│       ├── api/               # API-related types
│       ├── fixtures/          # Fixture types
│       └── pageObjects/       # Page object types
├── tests/                     # Test files
│   └── samplePage.test.ts     # Sample test implementation
├── playwright-report/         # HTML test reports
├── test-results/              # Test execution artifacts
├── playwright.config.ts      # Playwright configuration
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

### Key Components

#### 🔧 Configuration (`config/`)
- **`config.ts`**: Centralized configuration management
- **`env/`**: Environment-specific variables
- **Configure environment variables**
   ```bash
   cp config/env/.env.example config/env/.env
   ```
   Edit the `.env` file with your specific configuration:
   ```bash
   URL=https://your-app-url.com/
   TIMEOUT=30000
   HEADLESS=false
   ```
#### 🧪 Source Code (`src/`)
- **`apiManagers/`**: HTTP client and API utilities
- **`constants/`**: Shared constants and timeouts
- **`fixtures/`**: Test fixtures for dependency injection
- **`pageObjects/`**: Page Object Model implementations
- **`types/`**: TypeScript type definitions

#### 🧪 Tests (`tests/`)
- Contains all test files following the `*.test.ts` pattern
- Uses fixtures for clean test setup

### Architecture Patterns

1. **Page Object Model**: Encapsulates page interactions
2. **Fixture Pattern**: Provides clean test setup and teardown
3. **Configuration Management**: Environment-based configuration
4. **Type Safety**: Full TypeScript support with custom types

### Test Reports
- HTML reports are generated in `playwright-report/`
- Open `playwright-report/index.html` to view detailed results
- Test artifacts (screenshots, videos) are stored in `test-results/`

## 🔍 Development Tips

1. **Use Page Objects**: Keep page interactions in dedicated page object classes
2. **Leverage Fixtures**: Use fixtures for clean test setup, avoid using beforeEach, beforeAll, afterEach and afterAll hooks 
3. **Type Safety**: Utilize TypeScript types for better IDE support
4. **Environment Configuration**: Use `.env` files for different environments
5. **Test Isolation**: Each test should be independent and self-contained

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [VS Code Playwright Extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
