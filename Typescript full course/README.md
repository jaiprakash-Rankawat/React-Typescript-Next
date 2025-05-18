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

```tsx
import React from "react";

const page = () => {
  const add = (a: number, b: number) => {
    return a + b;
  };
  return <div>{add(10, 20)}</div>;
};

export default page;
```

## Default parameter

```tsx
const greetPerson = (name: string = "Radha") => {
  return `Hello, ${name}`;
};
```

## Return type annotation

```tsx
const add = (a: number, b: number): number => {
  return a + b;
};
```

```tsx
import React from "react";

const page = () => {
  const multipy = (a: number, b: number): string => {
    return "multiplication of " + a + " and " + b + " is " + a * b;
  };
  return <div>{multipy(10, 20)}</div>;
};

export default page;
```

## void in Typescript

```tsx
import React from "react";

const page = () => {
  const greetPerson = (name: string = "Radha"): void => {
    console.log(`Hello, ${name}`);
  };
  greetPerson();
  greetPerson("jai");
  return <div>page</div>;
};

export default page;
```

## never in Typescript

```tsx
import React from "react";

const page = () => {
  const greetPerson = (name: string = "Radha"): never => {
    throw new Error("Not implemented");
  };
  greetPerson();
  greetPerson("jai");
  return <div>page</div>;
};

export default page;
```

## Arrays Types

```tsx
import React from "react";

const page = () => {
  const numbers: number[] = [1, 2, 3, 4, 5];
  numbers.push(6);
  console.log(typeof numbers);
  return (
    <div>
      {numbers.map((number, index) => {
        return <div key={index}>{number}</div>;
      })}
    </div>
  );
};

export default page;
```

## optional property

```tsx
import React from "react";

const page = () => {
  type person = {
    name: string;
    age: number;
    city?: string;
  };

  const person: person = {
    name: "jai parakash",
    age: 22,
    city: "Lucknow",
  };

  const person2: person = {
    name: "jai parakash",
    age: 22,
  };
  return (
    <div>
      <div>Person's Details</div>
      <div>{person.name}</div>
      <div>{person.age}</div>
      <div>{person.city}</div>
      <div>Person2's Details</div>
      <div>{person2.name}</div>
      <div>{person2.age}</div>
      <div>This will not rendered {person2.city}</div>
    </div>
  );
};

export default page;
```
