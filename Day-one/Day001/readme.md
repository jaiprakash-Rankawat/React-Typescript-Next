# React 
```jsx
React is a JavaScript library for building user interfaces.
```

# React Setup
```jsx
step 1 : npm create vite@latest
step 2 : Ok to proceed? (y) y
step 3 : project name : Your Project Name
step 4 : Choose 👉 react Than Javascript
step 5 : Change directory to your project
step 6 : npm install
step 7 : npm run dev
```

# Component
```jsx
componet is just like a javascript function. Which can be used multiple times.
```

# Tailwind Css Setup

```jsx
// setp 1 : Terminal
npm install tailwindcss @tailwindcss/vite
```
```jsx
// Setp 2 : vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```
```jsx
// Setp 3 : index.css
@import "tailwindcss";
// Setp 4 : Write some Tailwind css to App.jsx 
// Setp 5 : npm run dev
```

# JSX
```jsx
JSX is a syntax extension for JavaScript. It allows you to write HTML-like code in your JavaScript files.
```
# Jsx Rules
```jsx
1. JSX must return a single element.
2. All Tags must be closed.
3. Class is changed to className and For is changed to htmlFor.
```

# This Expression 👉 {}
```jsx
This expression is used to write JavaScript code inside JSX.
```

# Date
```jsx
const date = new Date()
{date.toLocaleDateString()}
```

# Object
```jsx
const person = {
    name: "Radha Rani",
    age: 30,
    city: "Ajmer"
}
```

# List
```jsx
const list = [1, 2, 3, 4, 5]
```

# Map Function
```jsx
const list = [1, 2, 3, 4, 5]
{list.map((number) => <p>{number}</p>)}
```
