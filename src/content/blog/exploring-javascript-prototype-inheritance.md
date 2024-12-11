---
title: Exploring JavaScript Prototype Inheritance
description: "Object.create() creates objects inheriting through the prototype chain, while 'new' with a constructor directly inherits properties"
date: 2023-05-18
tags: [javascript]
---

## What is prototype inheritance?

Prototype inheritance is a mechanism for object-oriented programming that allows objects to inherit properties and methods from other objects. In prototypal inheritance, each object has an internal link to another object called its prototype. When a property or method is accessed on an object, and it is not found on the object itself, the JavaScript engine automatically looks up the chain of prototypes until it finds the property or method or reaches the end of the chain.

## Object Prototype Example

```js
const animalObj = {
	sound: "unknown",
	makeSound() {
		return this.sound;
	},
};
```

There are a couple of ways to create an existing object.

**First**: using `Object.create()` and then add new properties with the _dot_ or _bracket_ notation like the `dog` object below.

```js
const dog = Object.create(animalObj);
dog.name = "Burger";
dog.sound = "Woof!";
console.log(dog);
// { name: 'Burger', sound: 'Woof!' }
console.log(`${dog.name}: ${dog.makeSound()}`); // Burger: Woof!
```

**Second**: using `Object.create()` again, but pass properties object in the 2nd argument like below.

- value: The assigned value of the property.
- writable: Determines if the property value can be changed.
- enumerable: Controls visibility during object property iteration.
- configurable: Specifies if property attributes can be modified or deleted

```js
const cat = Object.create(animalObj, {
	name: {
		value: "Leo",
		writable: true,
		enumerable: true,
		configurable: true,
	},
	sound: {
		value: "Meow!",
		writable: true,
		enumerable: true,
		configurable: true,
	},
});

// change writeable to false, then you cannot change sound value
// cat.sound = "something"

// change enumerable to false for the sound, then the key wont be in console
// for (const key in cat) {
// 	console.log({ key })
// }

console.log(cat);
// { name: 'Leo', sound: 'Meow!' }
console.log(`${cat.name}: ${cat.makeSound()}`); // Leo: Meow!
```

If you want to prevent anyone from changing the cat's name, you can set the `writable` property of the `name` property descriptor to `false`. This ensures that the cat's name cannot be modified after it has been set.

Feel free to copy the code snippet above and play around with properties under either `name` or `sound` property descriptors to see what the console will show!

## Function Prototype Example

There are 2 ways to create instances of animals with names and sounds.

```js
// Animal constructor
function Animal(name, sound) {
	this.name = name;
	this.sound = sound;
	this.makeSound = function () {
		return this.sound;
	};
}

// can either write the makeSound method in the Animal function
// or add the method to the animal prototype.
// Animal.prototype.makeSound = function() {
//   return this.sound;
// };
```

**First**: create instances of animals: cat and dog. Each instance is created using the `new` keyword followed by the `Animal` constructor and then we pass in the respective name and sound values.

```js
const cat = new Animal("Cat", "Meow");
const dog = new Animal("Dog", "Woof");

console.log(cat);
// Animal {
//   name: 'Cat',
//   sound: 'Meow',
//   makeSound: [Function (anonymous)]
// }

console.log(cat.makeSound()); // Meow
console.log(dog.makeSound()); // Woof
```

**Second**: create an instance of a cat with `Object.create()`.

```js
const cat1 = Object.create(Animal);

console.log(cat1);
// Function {}

cat1.sound = "meow1";
cat1.makeSound = function () {
	return this.sound;
};

console.log(cat1);
// Function { sound: 'meow1', makeSound: [Function (anonymous)] }
```

In the code snippet above, it is important to note that the `console.log(cat1)` before adding the `sound` property and `makeSound` method does not display any properties or methods. This is because `Object.create(Animal)` creates a new object that directly inherits from the Animal function's prototype, but it does not inherit the properties and methods defined in the `Animal` function itself.

To customize the `cat1` object with its own `sound` property and `makeSound` method, we explicitly add them to the object using dot notation or bracket notation. After adding these properties and methods, the second `console.log(cat1)` displays the added properties.

## Recap

**Object:**

- `Object.create(animalObj)`:

  - This form of `Object.create()` creates a new object that directly inherits from the animalObj prototype.
  - The newly created object inherits properties and methods from animalObj through the prototype chain.
  - Additional properties can be added to the new object explicitly after it is created.

- `Object.create(animalObj, { ... })`:
  - This form of `Object.create()` creates a new object that inherits from animalObj and also specifies additional properties using an object literal.
  - The descriptors in the second argument control attribute such as the value, writable, enumerable, and configurable of the properties.
  - The newly created object inherits properties and methods from animalObj through the prototype chain and includes the specified additional properties with their defined attributes.

**Function:**

- `new` keyword:
  - Creates instances with their own properties and methods defined within the constructor function.
- `Object.create()`:
  - Creates instances that directly inherit properties and methods from the prototype object, requiring explicit addition of custom properties and methods to the created object.

## Resources

- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" target="_blank" rel="noopener noreferrer">MDN - Inheritance and the prototype chain</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create" target="_blank" rel="noopener noreferrer">MDN - Object.create()</a>

## Thank you!

Thank you for your time and for reading this!
