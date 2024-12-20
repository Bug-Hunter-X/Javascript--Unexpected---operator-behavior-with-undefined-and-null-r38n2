# Javascript: Unexpected + operator behavior with undefined and null

This repository demonstrates an unexpected behavior of the + operator in JavaScript when dealing with `undefined` and `null` values.  The `+` operator performs type coercion in JavaScript, and this can lead to unexpected results when one or both of the operands are `undefined` or `null`.

## Problem

When using the `+` operator with `undefined` or `null`, JavaScript's type coercion rules result in `NaN` or unexpected numeric values. This can be difficult to debug if not anticipated.  The code in `bug.js` demonstrates the unexpected behavior.

## Solution

The solution involves using strict equality checks (`===` or `!==`) to explicitly check for `undefined` or `null` and handle them accordingly, as shown in `bugSolution.js`.  Alternatively, you might use the nullish coalescing operator (`??`) to provide a default value if a variable is null or undefined. 