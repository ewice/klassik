# Klassik

A tiny and fast utility for conditionally joining class names.

## Installation

```bash
npm install klassik
# or
yarn add klassik
# or
pnpm add klassik
```

## Usage

Import `kl` and pass any number of string arguments. Falsy values (like `false`, `null`, `undefined`) are automatically ignored. Use standard JavaScript expressions for conditional logic.

```typescript
import kl from 'klassik';
// or: import { kl } from "klassik";

// Basic joining
kl('class1', 'class2');
// => "class1 class2"

// Joins arguments with existing spaces
kl('class1 class2', 'class3', 'class4 class5');
// => "class1 class2 class3 class4 class5"

// Conditional classes using &&
kl('class1', true && 'class2');
// => "class1 class2"

// Falsy conditions are ignored
kl(false && 'class1', 'class2');
// => "class2"

// Conditional classes using ternary operator
kl(true ? 'class1' : 'class2');
// => "class1"

// Combine static and conditional
kl('class1', false ? 'class2' : 'class3');
// => "class1 class3"

// Complex example combining multiple conditions
const isPrimary = true;
const isLarge = false;
kl('flex', isPrimary ? 'bg-primary-100' : 'bg-secondary-100', isLarge ? 'm-4 p-4' : 'm-2 p-2');
// => "flex bg-primary-100 m-2 p-2"
```

## Highlights

- **Tiny:** Extremely lightweight with a minimal footprint.
- **Fast:** Simple logic leads to great performance.
- **ESM & CJS:** Supports both ES Modules and CommonJS.
- **Zero Dependencies:** No external dependencies needed.
- **Typed:** Fully typed with TypeScript.

## Migrating to Klassik

If you are migrating from libraries like `classnames` or `clsx`:

1.  **Change your import statement:**

    ```diff
    - import classnames from 'classnames';
    + import kl from 'klassik';

    // or
    - import clsx from 'clsx';
    + import kl from 'klassik';
    ```

2.  **Convert object arguments:** `klassik` only accepts string arguments (it filters out non-strings/falsy values). Convert any object syntax to use standard JavaScript conditional expressions (`&&` or ternary `? :`).

    ```diff
    - classnames({ 'class-1': cond1, 'class-2': cond2 });
    + kl(cond1 && 'class-1', cond2 && 'class-2')

    // Example with ternary
    - clsx({ 'class-active': isActive, 'class-inactive': !isActive });
    + kl(isActive ? 'class-active' : 'class-inactive')
    ```
