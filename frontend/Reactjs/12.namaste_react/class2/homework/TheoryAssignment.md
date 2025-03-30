### **1. What is `NPM`?**  
**NPM (Node Package Manager)** is the default package manager for JavaScript, primarily used to manage dependencies for Node.js projects. It allows developers to install, share, and manage libraries and tools efficiently.  

#### **Example:**  
```sh
npm install express
```
This installs the `express` package in the project.

---

### **2. What is a bundler? Why do we need it? (Focus on Parcel)**  
A **bundler** is a tool that processes and optimizes code by merging multiple JavaScript files and assets (CSS, images, etc.) into a single file (or a few optimized files).  

**Parcel** is a zero-config bundler that simplifies development by handling complex optimizations like minification and caching.  

#### **Example:**  
```sh
npx parcel index.html
```
This starts the development server with Parcel handling all asset bundling.

##### **Why do we need a bundler?**  
- **Minifies & Optimizes Code**  
- **Handles Dependencies**  
- **Improves Performance**  
- **Supports Module Systems (ESM, CommonJS, etc.)**  

---

### **3. What is `.parcel-cache`?**  
The `.parcel-cache` directory is used by **Parcel** to store cached files that help speed up rebuilds by avoiding redundant processing.

##### **Example:**  
If you modify a small part of your project, Parcel will reuse the cache instead of recompiling everything from scratch.

---

### **4. What is `npx`?**  
**`npx` (Node Package Executor)** allows you to run packages without installing them globally. It executes the package directly from the npm registry.

#### **Example:**  
```sh
npx create-react-app my-app
```
This runs `create-react-app` without globally installing it.

---

### **5. What is the difference between `dependencies` and `devDependencies`?**  
| Feature | `dependencies` | `devDependencies` |
|---------|---------------|-------------------|
| Purpose | Required for the app to run | Needed only for development |
| Example Packages | `react`, `express` | `eslint`, `webpack` |
| Usage | Installed in production | Ignored in production |

#### **Example:**  
```sh
npm install react  # Adds to dependencies
npm install webpack --save-dev  # Adds to devDependencies
```

---

### **6. What is Tree Shaking?**  
**Tree Shaking** is a feature in modern bundlers that removes unused code from the final build, reducing the file size.

#### **Example:**  
```js
// utils.js
export function usedFunction() {
  console.log("I am used");
}

export function unusedFunction() {
  console.log("I am not used");
}

// main.js
import { usedFunction } from './utils.js';
usedFunction();
```
Here, `unusedFunction` will be removed by tree shaking.

---

### **7. What is Hot Module Replacement (HMR)?**  
**HMR** is a feature that updates modules in a running application without a full page reload, improving development speed.

#### **Example:**  
In **Parcel/Webpack**, when you modify CSS or JS, HMR updates only the changed parts without reloading the entire page.

```sh
parcel index.html
```
It will automatically reload changes in the browser.

---

### **8. What is the difference between `package.json` and `package-lock.json`?**  
| Feature | `package.json` | `package-lock.json` |
|---------|---------------|-------------------|
| Purpose | Lists dependencies & project metadata | Locks exact dependency versions |
| Editable? | Yes | No (should not be manually edited) |
| Version Control | Allows flexible versions | Ensures same dependencies for all developers |

#### **Example:**  
```json
// package.json
"dependencies": {
  "express": "^4.17.0"
}
```
```json
// package-lock.json
"express": {
  "version": "4.17.1"
}
```

---

### **9. Why should I not modify `package-lock.json`?**  
`package-lock.json` ensures consistency across environments by locking dependency versions. Manually changing it can cause version mismatches and break dependencies.

---

### **10. What is `node_modules`? Is it a good idea to push that on Git?**  
**`node_modules`** is the directory where npm stores installed dependencies.  
It is **not** recommended to push it to Git because:  
- It's **huge** and can be regenerated using `package.json`.  
- Different environments may require different versions.

✅ **Best Practice:** Add `node_modules` to `.gitignore`.  

#### **Example:**  
```sh
echo "node_modules/" >> .gitignore
```

---

### **11. What is the `dist` folder?**  
The `dist` (distribution) folder contains the final optimized and bundled output of a project, ready for deployment.

#### **Example:**  
After running Parcel/Webpack:  
```sh
parcel build index.html
```
It generates a `dist/` folder with minified JS, CSS, and assets.

---

### **12. What is `browserslist`?**  
`browserslist` defines which browsers your project should support. Bundlers use it to optimize JavaScript and CSS accordingly.

#### **Example (`package.json`)**  
```json
"browserslist": [
  "last 2 versions",
  "> 1%",
  "not dead"
]
```
This targets the last 2 versions of major browsers.

---

### **13. Difference between `^` (caret) and `~` (tilde) in versioning?**  
| Symbol | Behavior | Example (`package.json`) | Possible Versions |
|--------|----------|------------------------|-------------------|
| `^` | Updates **minor** and **patch** versions | `"express": "^4.17.0"` | `4.17.x`, but not `4.18.0` |
| `~` | Updates **only patch** versions | `"express": "~4.17.0"` | `4.17.1`, `4.17.2`, but not `4.18.0` |

#### **Example:**  
```sh
npm install express@^4.17.0  # Can install 4.17.5 but not 4.18.0
npm install express@~4.17.0  # Can install 4.17.3 but not 4.18.0
```