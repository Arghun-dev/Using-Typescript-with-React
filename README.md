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


**Tip**

```js
import React from 'react'

interface Props {
  name: string;
  color: string;
}

type OtherProps = {
  name: string;
  color: string;
}

// Notice here we're using the function declaration with the interface Props
function Heading({ name, color }: Props): React.ReactNode {
  return <h1>My Website Heading</h1>
}

// Notice here we're using the function expression with the type OtherProps
const OtherHeading: React.FC<OtherProps> = ({ name, color }) =>
  <h1>My Website Heading</h1>
```


When it comes to types or interfaces, we suggest following the guidelines presented by the `react-typescript-cheatsheet` community:

“always use interface for public API’s definition when authoring a library or 3rd-party ambient type definitions.”
“consider using type for your React Component Props and State, because it is more constrained.”

```js
import React from 'react'

type Props = {
  /** color to use for the background */
  color?: string;
  /** standard children prop: accepts any valid React Node */
  children: React.ReactNode;
  /** callback function passed to the onClick handler*/
  onClick: ()  => void;
}

const Button: React.FC<Props> = ({ children, color = 'tomato', onClick }) => {
   return <button style={{ backgroundColor: color }} onClick={onClick}>{children}</button>
}
```

In this <Button /> component, we use a type for our props. Each prop has a short description listed above it to provide more context to other developers. The `?` after the prop named color indicates that it’s `optional`. The `children` prop takes a `React.ReactNode` because it accepts everything that’s a valid return value of a component (read more here). To account for our optional color prop, we use a default value when destructuring it. This example should cover the basics and show you have to write types for your props and use both optional and default values.

In general, keep these things in mind when writing your props in a React and TypeScript project:

```js
type User = {
  email: string;
  id: string;
}

// the generic is the < >
// the union is the User | null
// together, TypeScript knows, "Ah, user can be User or null".
const [user, setUser] = useState<User | null>(null);
```

### useReducer

The other place where TypeScript shines with Hooks is with userReducer, where you can take advantage of discriminated unions. Here’s a useful example:

```js
type AppState = {};
type Action =
  | { type: "SET_ONE"; payload: string }
  | { type: "SET_TWO"; payload: number };

export function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_ONE":
      return {
        ...state,
        one: action.payload // `payload` is string
      };
    case "SET_TWO":
      return {
        ...state,
        two: action.payload // `payload` is number
      };
    default:
      return state;
  }
}
```

The beauty here lies in the usefulness of discriminated unions. Notice how Action has a union of two similar-looking objects. The property type is a string literal. The difference between this and a type string is that the value must match the literal string defined in the type. This means your program is extra safe because a developer can only call an action that has a type key set to "SET_ONE" or "SET_TWO".

As you can see, Hooks don’t add much complexity to the nature of a React and TypeScript project. If anything, they lend themselves well to the duo.


### Handling Form Events

**onChange**

```js
import React from 'react'

const MyInput = () => {
  const [value, setValue] = React.useState('')

  // The event type is a "ChangeEvent"
  // We pass in "HTMLInputElement" to the input
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return <input value={value} onChange={onChange} id="input-example"/>
}
```

### Extending Component Props

Sometimes you want to take component props declared for one component and extend them to use them on another component. But you might want to modify one or two. Well, remember how we looked at the two ways to type component props, types or interfaces? Depending on which you used determines how you extend the component props. Let’s first look at the way using type:

```js
import React from 'react';

type ButtonProps = {
    /** the background color of the button */
    color: string;
    /** the text to show inside the button */
    text: string;
}

type ContainerProps = ButtonProps & {
    /** the height of the container (value used with 'px') */
    height: number;
}

const Container: React.FC<ContainerProps> = ({ color, height, width, text }) => {
  return <div style={{ backgroundColor: color, height: `${height}px` }}>{text}</div>
}
```

If you declared your props using an interface, then we can use the keyword extends to essentially “extend” that interface but make a modification or two:

```js
import React from 'react';

interface ButtonProps {
    /** the background color of the button */
    color: string;
    /** the text to show inside the button */
    text: string;
}

interface ContainerProps extends ButtonProps {
    /** the height of the container (value used with 'px') */
    height: number;
}

const Container: React.FC<ContainerProps> = ({ color, height, width, text }) => {
  return <div style={{ backgroundColor: color, height: `${height}px` }}>{text}</div>
}
```

### Third-party Libraries

Whether it’s for a GraphQL client like Apollo or for testing with something like React Testing Library, we often find ourselves using third-party libraries in React and TypeScript projects. When this happens, the first thing you want to do is see if there’s a @types package with the TypeScript type definitions. You can do so by running:

```js
#yarn
yarn add @types/<package-name>

#npm
npm install @types/<package-name>
```

For instance, if you’re using Jest, you can do this by running:

```js
#yarn
yarn add @types/jest

#npm
npm install @types/jest
```

This would then give you added type-safety whenever you’re using Jest in your project.

**What happens if they don’t have a @types package?**

If you don’t find a `@types` package on npm, then you essentially have two options:

1. Add a basic declaration file
2. Add a thorough declaration file

The first option means you create a file based on the package name and put it at the root. If, for instance, we needed types for our package banana-js, then we could create a basic declaration file called `banana-js.d.ts` at the root:

```js
declare module 'banana-js';
```

This won’t provide you type safety but it will unblock you.

 more thorough declaration file would be where you add types for the library/package:
 
 ```js
 declare namespace bananaJs {
    function getBanana(): string;
    function addBanana(n: number) void;
    function removeBanana(n: number) void;
}
 ```


# React with Typescript

### Function Components

```js
interface Task {
  title: string;
}

interface TasksListProps {
  tasks: Task[];
}

const TasksList:React.FC<TasksListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map(item => <li>{task.title}</li>)}
    </ul>
  )
}
```

### Class Components

```js
interface TasksListProps {
  tasks: Task[]
}

interface TasksListState {
  tasks: Task[]
}

class TasksList extends React.Component<TasksListProps, TasksListState> {
  render() {
    const { tasks } = this.state;
    return (
      <ul>
        {tasks.map(task => <li>{task.title}</li>)}
      </ul>
    )
  }
}
```

### Setting up fake server

first install json-server

`$. npm i -D json-server`

`json-server` reads the data from a json file.

so create a filer called `json-server` in the next to the `src` folder. and inside it create a file called `db.json`, basically it's an object which each key, represents an endpoint. let's create and endpoint called `events`

db.json

```js
{
  "events": [
    {
      "id": 1,
      "title": "Jogging",
      "dataStart": "2020-01-29T17:41:28.652z",
      "dataEnd": "2020-01-29T18:41:28.652z"
    }
  ]
}
```

so we've got one end point called `event` in our data base, now let's run fake server, to serve this data:

`$. npx json-server --watch json-server/db.json --port 3001`

ok the server has started. now we can query the `events` endpoint to read and change the related data.

I will use the `curl` tool to query the server. let;s send a get request to our endpoint

`$. curl http://localhost:3001/events`

then we get the data.
