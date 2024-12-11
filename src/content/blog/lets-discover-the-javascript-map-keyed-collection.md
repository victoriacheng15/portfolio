---
title: Let's Discover the JavaScript Map Keyed Collection
description: "Learn about JavaScript Map: its keyed collection, differences from objects & how to perform CRUD operations using Map methods."
date: 2023-02-08
tags: [javascript]
---

## What is Map?

It is an object that holds key-value pairs and remembers the original insertion order of the keys. It is similar to `Object` with the main difference being that `Map` allows keys of any type.

### Map vs Object - key type

The Map can have any key types including functions, objects or any primitive while an Object must be a string or symbol

```js
const map = new Map();
map.set("a", "this is string");
map.set(1, "this is number");
map.set(true, "this is boolean");

const object = {};
object.a = "this is string";
object[1] = "this is number";
object.true = "this is boolean";

console.log({ map });
console.log({ object });
```

```js
// output
{
  map: Map(3) {
    'a' => 'this is string',
    1 => 'this is number',
    true => 'this is boolean'
  }
}
{
  object: {
    '1': 'this is number',
    a: 'this is string',
    true: 'this is boolean'
  }
}
```

let's use `typeof` to check the key type.

```js
map.forEach((_, key) => {
	console.log(`key value: ${key} | type: ${typeof key}`);
});

Object.keys(object).map((key) => {
	console.log(`key value: ${key} | type: ${typeof key}`);
});
```

```js
// output
Map_______________________
key value: a | type: string
key value: 1 | type: number
key value: true | type: boolean
Object_____________________
key value: 1 | type: string
key value: a | type: string
key value: true | type: string
```

### Map vs Object - Performance and Support

According to the MDN docs, Map offers better performance while the object is not optimized.

<img src="https://user-images.githubusercontent.com/35031228/217649940-3963e5bd-8c96-458f-926e-a39e35056ad9.png" alt="Map offers better performance if need to frequent additions and removals of key-value pairs while object is not optimized">

At this moment, Map is supported in all major browsers based on [caniuse.com](https://caniuse.com/mdn-javascript_builtins_map).

<img src="https://user-images.githubusercontent.com/35031228/217653562-bd683908-a4dc-4119-9f62-4a5f3ae5f797.png" alt="which browser can use the Map">

## Methods

Let's say you have character data that you need to add to `Map` object.

```js
const characters = [
	{ id: 1, name: "The Doctor", age: 900 },
	{ id: 2, name: "Rose Tyler", age: 26 },
	{ id: 3, name: "Martha Jones", age: 27 },
	{ id: 4, name: "Donna Noble", age: 31 },
	{ id: 5, name: "Amy Pond", age: 26 },
];

const map = new Map();
```

### set(key, value)

This method is to add or update an element with a key and a value.

```js
for (const character of characters) {
	map.set(character.id, character);
}
// or
characters.forEach((character) => {
	map.set(character.id, character);
});
```

```js
// output
{
  map: Map(5) {
    1 => { id: 1, name: 'The Doctor', age: 900 },
    2 => { id: 2, name: 'Rose Tyler', age: 26 },
    3 => { id: 3, name: 'Martha Jones', age: 27 },
    4 => { id: 4, name: 'Donna Noble', age: 31 },
    5 => { id: 5, name: 'Amy Pond', age: 26 }
  }
}
```

### has(key)

This method will find out if the key exists in the Map object by returning a boolean value.

```js
const checkForRose = map.has(2);
console.log("Is Rose existed in the map? ", checkForRose);
// Is Rose existed in the map?  true

const checkForSomething = map.has(7);
console.log("Is something existed in the map? ", checkForSomething);
// Is something existed in the map?  false
```

### get(key)

This method will return the character based on the key. If the key doesn't exist in the Map object, it will return `undefined`

```js
const getMartha = map.get(3);
console.log("Martha Information: ", getMartha);
// Martha Information:  { id: 3, name: 'Martha Jones', age: 27 }

const getSomething = map.get(7);
console.log("There is no key value of 7: ", getSomething);
// There is no key value of 7:  undefined
```

### delete(key)

This method removes the specified element from a Map with the key value. If the key doesn't exist, it will return `false`

```js
const sorryMartha = map.delete(3);
console.log("Deleting Martha Information: ", sorryMartha);
// Deleting Martha Information:  true

const deleteSomething = map.delete(7);
console.log("Deleting something that doesn't exist: ", deleteSomething);
// Deleting something that doesn't exist:  false
```

### clear()

This method removes all elements from a Map object.

```js
console.log(map);

// map: Map(5) {
//   1 => { id: 1, name: 'The Doctor', age: 900 },
//   2 => { id: 2, name: 'Rose Tyler', age: 26 },
//   3 => { id: 3, name: 'Martha Jones', age: 27 },
//   4 => { id: 4, name: 'Donna Noble', age: 31 },
//   5 => { id: 5, name: 'Amy Pond', age: 26 }
// }

map.clear();

console.log(map);
// map: Map(0) {}
```

### size

This is similar to `array.length` and will return the total number of elements in a Map object.

```js
const checkMapSize = map.size;
console.log("The size of characters data: ", checkMapSize);
// The size of characters data:  5
```

## Iteration over Map

There are 3 ways to iteration over Map: `keys()`, `values()`, and `entries()`

### keys()

This method returns keys for each element in the Map object in the insertion order.

```js
const keys = map.keys();
console.log(keys);
// [Map Iterator] { 1, 2, 3, 4, 5 }
```

### values()

This method will return each element value.

```js
const values = map.values();
console.log(values);
// [Map Iterator] {
//   { id: 1, name: 'The Doctor', age: 900 },
//   { id: 2, name: 'Rose Tyler', age: 26 },
//   { id: 3, name: 'Martha Jones', age: 27 },
//   { id: 4, name: 'Donna Noble', age: 31 },
//   { id: 5, name: 'Amy Pond', age: 26 }
// }
```

### entries()

This method will return the `[key, value]` pairs of each element.

```js
const entries = map.entries();
console.log("entries", entries);
// entries [Map Entries] {
//   [ 1, { id: 1, name: 'The Doctor', age: 900 } ],
//   [ 2, { id: 2, name: 'Rose Tyler', age: 26 } ],
//   [ 3, { id: 3, name: 'Martha Jones', age: 27 } ],
//   [ 4, { id: 4, name: 'Donna Noble', age: 31 } ],
//   [ 5, { id: 5, name: 'Amy Pond', age: 26 } ]
// }
```

## Recap

Map and object are very similar data structures since both of them store key-value pairs. However, one main difference is that the key value in Map can be any type while the key value in the object must be a string or symbol. The Map offers methods like `get()`, `has()` and more to perform create, read, update, and delete operations. Also, three methods such as `key()` to iterate over the Map object.

If you are curious about the performance between Map and object, Zhenghao explains about this in their blog (3rd link in the resources). In short, **Map** is faster than the object, unless small integer and is more memory-efficient. Additionally, MDN docs also mentioned that Map is optimized for the frequent adding and removing of elements while the object is not optimized.

## Resources

- [Map -MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Map -The Modern JavaScript Tutorial](https://javascript.info/map-set#map)
- [Map vs Object - Zhenghao](https://www.zhenghao.io/posts/object-vs-map)

## Thank you!

Thank you for your time and for reading this!
