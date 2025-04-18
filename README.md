## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Tests:

### Unit tests:
Run `npm run test`

### End to End tests using PlayWright
#### Prerequesties:
Run `npm init playwright@latest` to install dependencies, but don't override playwright.config.ts, it's already there and tests run on chrome, so you might not need proceed with chromium installation too 

Run `npm run build` and `npm run start`, then run `npm run test:e2e` in another terminal window to run the Playwright tests.