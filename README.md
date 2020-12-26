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
