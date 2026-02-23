---
title: Quick Start
description: Get up and running with Minions Decisions in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-decisions/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_decisions import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
decisions info
```
