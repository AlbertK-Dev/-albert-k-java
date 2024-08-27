# @albert-k/java

**Description :** Ceci est un paquet npm qui implémente les interfaces java en javascript (typescript).

## Installation

- via npm 
```bash
npm install @albert-k/java
```
- via yarn 
```bash
yarn add @albert-k/java
```
- via pnpm 
```bash
pnpm install @albert-k/java
```
## version 
- 0.1.0 : début de l'implementation de l'interface collection
- 0.1.1 : exportation des interfaces Collection, et Iterator pour typescript

## Utilisation

- Typescript
```typescript
import {Collection, ArrayList, Iterator } from "@albert-k/java"

const myCollection : Collection<string> = new ArrayList();
myCollection.add("one");
myCollection.add("two");
myCollection.add("tree");
console.log(myCollection.size()) // 3

const it: Iterator<string> = myCollection.iterator();
while(it.hasNext()){
    console.log(it.next()) //one two tree
} 
```
- javascript 
```javascript 
const {ArrayList} = require("@albert-k/java")

const myCollection = new ArrayList();

myCollection.add("one");
myCollection.add("two");
myCollection.add("tree");

for(i of test){
    console.log(i) // one, two, tree
}

const it = myCollection.iterator()  //get iterator
while(it.hasNext()){
    if(it.next() === "two"){  //remove "two"
        it.remove() 
    }
}

for(i of test){
    console.log(i)  // one, tree
}

```


