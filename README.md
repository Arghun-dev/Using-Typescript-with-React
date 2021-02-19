# Using-Typescript-with-React

```js
function makeTea(temp: 'hot' | 'cold'): string {
  return `Here is tea with temperature of ${temp}`
}
```

### Insalling Typescript globally and locally on your machine

`$. npm install -g typescript`


### tsconfig.json

```js
{
    "compilerOptions": {
        "target": "ES6",
        "outDir": "dist",
        "strictNullChecks": true
    },
    "include": ["**/*.ts"]
}
```

**We don't always need to install typescript globally, we can install and use typescript locally as well.**

`$. npm i typescript`


### Setting up a simple typescript project

go to a folder and then write


`$. npm init`

press enter all the question to set default answers

then we shuld install typescript as a dev dependency, because in production we won't use it, in production we'll use compiled Javascript

`$. npm i -D typescript`


**Creating tsconfig.json file**

`$. npx tsc --init`


### Modules

```js
import ... from ...
export ...
```


### Types

```js
// Boolean
let b: boolean = true;

// Number
let num: number = 2;

// String
const hello: string = 'Hello';
const world: string = 'world';
const helloWorld = `${hello} ${world}`;

// Null and Undefined
let n: null = null;
let u: undefined = undefined;

let someNumber: number = null;
```

now because we have assigned our `tsconfig.json` to `strictNullChecks = true`

and we've written

```js
let someNumber: number = null;
```

we will get an error, because we're trying to assign a null to something else of null, like a number in this case,

if we still want to assing null to this function we could use `union type`

```js
function uppercaseFirstLetter(str: string | null) {
  if(str) {
    return str[0].toUppercase() + str.substr(1)
  }
}
```

**Continue to types...**

```js
// Object
const primitiveTypes = boolean | number | string | symbol | null | undefined;
const myObj: object = [] or {} or new Map();

// Void (void describes the absence of a value)
function log(message: string): void {
  console.log(message);
}

// now if we want to return some value from log function we will get an error, we cannot return some value from it


// Array (array represents the list of elements of some type)
const array1 = string[] = ['x', 'y'];
const array2 = Array<string> = array1; // this is called Generic Array type


// Tuple (it represents an array of fixed number of elements, which type of each element is known)
let tuple: [string, number] = ['arghun', 25]


// Enum (enum is a way of giving more friendly names to a set of values)
enum Color {
  Red,
  Green,
  Blue
}

let myFavoriteColor: Color = Color.Blue;
// enum assigns a number to each member in sequence starting from 0

console.log(Color.Red, Color.Green, Color.Blue); 0 1 2
// we can  also set values manually, like this

enum Color {
  Red = 2,
  Blue = 51,
  Green = 69
}

// Any
let ANY: any;
ANY = 'a string';
ANY = 1;
ANY = true;

// Type Assertions
```

### How to implementing tslint (Migrating to tslint)

in here I'm going to remove `eslint` totally from app and then re-implement it with `tslint`

this will take out all of the eslint stuff
`$. npm uninstall eslint babel-eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks`

this wiil add tslint stuff
`$. npm install -D tslint tslint-react tslint-config-prettier` 


### Props and State interfaces

this is just because to tell our component which type of `props` and `state` our compoent expecting.

```js
interface IProps {
  media: Photo[];
}

interface IState {
  active: number;
  photos: string[];
}

const MyCom:React.FC<IProps, IState> = () => {
}
```

### Function Components

in here I'm going to give you an example which implement two components called `Task` and `Tasks` and their types and interfaces in a separate component called `types.ts`

type.ts

```js
export interface ITask {
  title: string;
  completed: boolean;
}

export interface ITasks {
  tasks: ITask[];
}
```

App.tsx

```js
import React from 'react'
import Tasks from './components/Tasks'

const tasks = [
  {
    title: 'task1',
    completed: false;
  },
  {
    title: 'task2',
    completed: false;
  },
  {
    title: 'task3',
    completed: false;
  }
]

const App:React.FC = () => {
  return <Tasks tasks={tasks} />
} 
```

Tasks.tsx

```js
import React from 'react';
import { ITasks } from '../types'
import Task from './Task'

const Tasks:React.FC<ITasks> = ({ tasks }) => {
   return (
      {tasks.map((task) => <Task title={task.title} completed={task.completed} />)}
   )
}

export default Task;
```

Task.tsx

```js
import React from 'react'
import { ITask } from '../types'

const Task<ITask> = ({ title, completed }) => {
  return (
    <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>{title}</div>
  )
}
```

**Note:** notice that I decalared the interfaces in a separate file called `types.ts` and then I used it in their own components, which I imported and used each component interface in it's own component. 


### Higher Order Components (React & Redux)

first we need to install `redux` and `react-redux` and because these packages don't provide `type` we need to install `types` for this packages.

`$. npm i -S redux react-redux`

`$. npm i -D @types/redux @types/react-redux`


**Tip:**

```js
import React from 'react'

// Written as a function declaration
function Heading(): React.ReactNode {
  return <h1>My Website Heading</h1>
}

// Written as a function expression
const OtherHeading: React.FC = () => <h1>My Website Heading</h1>
```
