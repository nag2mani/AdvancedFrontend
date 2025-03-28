The key difference between a **library** and a **framework** lies in **control** — who is in charge of the flow of execution.

---

## **Library** 📚
- A **library** is a collection of reusable code (functions, classes, modules) that developers can call **when they need it**.
- You have control over the flow of the program — you decide **when and where** to use the library.
- The code you write is in control; it calls the library’s functions.

### **Example: React.js (Library)**
React provides functions and components to build UI, but you decide how to structure your app:
```jsx
import React from 'react';

function App() {
  return <h1>Hello, World!</h1>;
}
```
➡️ You **call** React's functions (`React.Component`, `useState`) — React doesn't control your code.

---

## **Framework** 🏗️
- A **framework** is more like a full-fledged structure — it defines the flow and lifecycle of your application.
- The framework is in control; it calls your code at specific points.
- You **follow the rules** and structure defined by the framework.

### **Example: Angular (Framework)**
Angular provides a specific structure and lifecycle methods that you must follow:
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello, World!</h1>'
})
export class AppComponent {}
```
➡️ Angular **controls** when and how components are created, rendered, and destroyed.

---

## **Main Differences**
| Aspect | Library | Framework |
|--------|---------|-----------|
| **Control** | You control the flow of the program | Framework controls the flow of the program |
| **Flexibility** | More flexible — you can use parts of it as needed | Less flexible — you follow the framework's structure |
| **Inversion of Control** | You call the library functions | The framework calls your code |
| **Example** | React, Lodash, jQuery | Angular, Django, Ruby on Rails |

---

### 🔥 **Simple Analogy**
- **Library** → Like going to a buffet — you pick what you want.
- **Framework** → Like a set meal at a restaurant — the chef decides the courses, but you can modify some details.
