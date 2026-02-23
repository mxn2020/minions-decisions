# minions-decisions

**Logged decisions with rationale, alternatives, and outcome**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-decisions/sdk minions-sdk

# Python
pip install minions-decisions

# CLI (global)
npm install -g @minions-decisions/cli
```

---

## CLI

```bash
# Show help
decisions --help
```

---

## Python SDK

```python
from minions_decisions import create_client

client = create_client()
```

---

## Project Structure

```
minions-decisions/
  packages/
    core/           # TypeScript core library (@minions-decisions/sdk on npm)
    python/         # Python SDK (minions-decisions on PyPI)
    cli/            # CLI tool (@minions-decisions/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [decisions.minions.help](https://decisions.minions.help)
- Blog: [decisions.minions.blog](https://decisions.minions.blog)
- App: [decisions.minions.wtf](https://decisions.minions.wtf)

---

## License

[MIT](LICENSE)
