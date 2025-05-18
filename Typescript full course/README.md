# Typescript Full Course

## What is Typescript

```tsx
javascript with superpower make typescript.
```

# How to create object in typescript

### 1. Old way

```tsx
import React from "react";

const page = () => {
  const person = {
    name: "John",
    age: 30,
    city: "New York",
  };
  return (
    <div>
      <div>person's details</div>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div>{person.city}</div>
    </div>
  );
};

export default page;
```

### 2. best way

```tsx
import React from "react";

const page = () => {
  const person: { name: string; age: number; city: string } = {
    name: "John",
    age: 30,
    city: "New York",
  };
  return (
    <div>
      <div>person's details</div>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div>{person.city}</div>
    </div>
  );
};

export default page;
```

### 3. Advance way

```tsx
import React from "react";

const page = () => {
  type person = {
    name: string;
    age: number;
    city: string;
  };

  const person: person = {
    name: "John",
    age: 30,
    city: "New York",
  };
  return (
    <div>
      <div>person's details</div>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div>{person.city}</div>
    </div>
  );
};

export default page;
```

## Type Inference

```tsx
Type inference is a way to let the compiler infer the type of a variable, function, class, or object.
```

## What is Annotation

```tsx
Annotation is a way to add metadata to a variable, function, class, or object.
```

### String Annotation

```tsx
let name: string = "John";
```

### Number Annotation

```tsx
let age: number = 30;
```

### Boolean Annotation

```tsx
let isStudent: boolean = true;
```

### Any Annotation

```tsx
import React from "react";

const page = () => {
  let name: any = "jai parakash";
  name = 12;
  return <div>{name}</div>;
};

export default page;
```

## function parameter annotation

### project 1
