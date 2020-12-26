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
        "outDir": "dist"
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
