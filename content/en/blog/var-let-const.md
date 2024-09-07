## Comparison of `var`, `let`, and `const`

In JavaScript, variable declarations can be made using three keywords: `var`, `let`, and `const`. Each of these keywords has distinct characteristics regarding scope, redeclaration, reassignment, and hoisting. Understanding these differences is crucial for writing clean and error-free code.

### 1. Scope

- **`var`**: 
  - **Scope**: `var` is function-scoped or globally scoped. This means that if a variable is declared with `var` inside a function, it is not accessible outside that function. However, if declared outside any function, it can be accessed anywhere in the code.
  
  ```javascript
  var globalVar = "I'm global";

  function testVar() {
      var localVar = "I'm local";
      console.log(globalVar); // Accessible
      console.log(localVar);   // Accessible
  }

  testVar();
  console.log(globalVar); // Accessible
  console.log(localVar);   // ReferenceError: localVar is not defined
  ```

- **`let`** and **`const`**: 
  - **Scope**: Both `let` and `const` are block-scoped. This means they are only accessible within the nearest enclosing block (denoted by `{}`), such as within loops or conditionals.
  
  ```javascript
  if (true) {
      let blockScopedLet = "I'm block scoped";
      const blockScopedConst = "I'm also block scoped";
      console.log(blockScopedLet);   // Accessible
      console.log(blockScopedConst);  // Accessible
  }

  console.log(blockScopedLet);   // ReferenceError: blockScopedLet is not defined
  console.log(blockScopedConst);  // ReferenceError: blockScopedConst is not defined
  ```

### 2. Redeclaration and Reassignment

- **`var`**:
  - **Redeclaration**: Variables declared with `var` can be redeclared within the same scope without any errors.
  - **Reassignment**: Variables can be reassigned new values.
  
  ```javascript
  var x = 10;
  var x = 20; // No error
  x = 30; // Reassigned
  console.log(x); // 30
  ```

- **`let`**:
  - **Redeclaration**: Variables declared with `let` cannot be redeclared in the same scope. Attempting to do so will throw an error.
  - **Reassignment**: Variables can be reassigned new values.
  
  ```javascript
  let y = 10;
  // let y = 20; // SyntaxError: Identifier 'y' has already been declared
  y = 30; // Reassigned
  console.log(y); // 30
  ```

- **`const`**:
  - **Redeclaration**: Variables declared with `const` cannot be redeclared in the same scope.
  - **Reassignment**: Variables cannot be reassigned after their initial assignment. This makes `const` suitable for constants.
  
  ```javascript
  const z = 10;
  // const z = 20; // SyntaxError: Identifier 'z' has already been declared
  // z = 30; // TypeError: Assignment to constant variable.
  console.log(z); // 10
  ```

### 3. Hoisting

- **`var`**: 
  - Variables declared with `var` are hoisted to the top of their scope and initialized with `undefined`. This means you can reference them before the declaration in the code.
  
  ```javascript
  console.log(a); // undefined
  var a = 5;
  console.log(a); // 5
  ```

- **`let`** and **`const`**: 
  - Both `let` and `const` are also hoisted but are not initialized. Accessing them before their declaration results in a `ReferenceError`.
  
  ```javascript
  // console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 10;
  console.log(b); // 10

  // console.log(c); // ReferenceError: Cannot access 'c' before initialization
  const c = 20;
  console.log(c); // 20
  ```

### Summary Table

| Keyword | Scope                  | Redeclaration         | Reassignment          | Hoisting                               |
|---------|------------------------|-----------------------|-----------------------|----------------------------------------|
| `var`   | Function/Global        | Yes                   | Yes                   | Hoisted and initialized with `undefined` |
| `let`   | Block                  | No                    | Yes                   | Hoisted but not initialized            |
| `const` | Block                  | No                    | No                    | Hoisted but not initialized            |

### Best Practices

- **Use `const`** by default for variables that should not change. This helps in maintaining immutability and makes the code easier to understand.
  
- **Use `let`** when you know the variable's value will change, such as in loops or conditionals.

- **Avoid `var`** in modern JavaScript, as it can lead to confusion due to its function-scoping and hoisting behavior.

