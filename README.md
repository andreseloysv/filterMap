# filterMap

Transforms an array of elements into a new array of elements based on specified filter and mapping functions.

## Installation

```bash
npm install @andreseloysv/filtermap
```

## Usage

Javascript
```javascript
const filterMap = require('@andreseloysv/filtermap')

// Example usage:
const numbers = [1, 2, undefined, 3];
const result = filterAndMap(numbers, x => x < 3, x => `Number: ${x}`);
// result will be ['Number: 1', 'Number: 2']
```

Typescript
```typescript
import { filterMap } from '@andreseloysv/filtermap';

const numbers = [1, 2, undefined, 3];
const result = filterAndMap(numbers, x => x < 3, x => `Number: ${x}`);
// result will be ['Number: 1', 'Number: 2']
```
