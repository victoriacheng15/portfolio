---
title: "TypeScript Utility Types - Exclude"
description: "Enhance TypeScript code with Exclude utility type: tailor types for precision and flexibility."
date: 2023-09-20
tags: [typescript]
---

## What is Exclude?

The `Exclude` utility type in TypeScript is designed to work with union types, making it a powerful tool for crafting custom types by removing specific values from existing types. This feature empowers you to create precise and customized type definitions, effectively filtering out undesired types according to your specific criteria. This becomes particularly valuable when you require almost all types from a given set, except for a select few that need to be excluded.

```ts
type Exclude<T, U> = T extends U ? never : T;
```

## How Does Exclude Work?

- Example 1:

You have a set of types that includes string, number, boolean, and symbol, but you only require boolean and symbol. In such a scenario, you can employ the `Exclude` utility to remove string and number from the set called `AllTypes`.

```ts
type AllTypes = string | number | boolean | symbol;
type ExcludePrimitives = Exclude<AllTypes, string | number>;
```

- Example 2:

You have two sets of possible values: `FirstUnion`, which contains "A" and "B," and `SecondUnion`, which contains "B" and "C." Now, you want to create a new set called `ExcludeFromMerged` that includes values from both `FirstUnion` and `SecondUnion` but excludes "B."

To achieve this, you can use the `Exclude` utility type. By applying `Exclude<FirstUnion | SecondUnion, "B">`, you effectively remove "B" from the combined set, resulting in `ExcludeFromMerged` containing only "A" and "C."

```ts
type FirstUnion = "A" | "B";
type SecondUnion = "B" | "C";
type ExcludeFromMerged = Exclude<FirstUnion | SecondUnion, "B">;
```

- Example 3:

You have a list of fruits, each described by its type, color, and taste. You want to create a new list that includes all the fruits except for apples.

To do this, you can use the `Exclude` utility type. Applying `Exclude<Fruit, { type: "apple" }>`, you effectively remove all apple entries from the list, resulting in a new list containing only non-apple fruits.

```ts
type Fruit =
	| { type: "apple"; color: "red" | "green"; taste: "sweet" }
	| { type: "banana"; color: "yellow"; taste: "sweet" }
	| { type: "orange"; color: "orange"; taste: "sweet" | "sour" };

type FruitsWithoutApple = Exclude<Fruit, { type: "apple" }>;
```

## Recap

The `Exclude` utility type empowers you to precisely customize your TypeScript types according to your specific requirements, thereby boosting both the safety and adaptability of your code. By excluding specific values or types from a union, you can craft type definitions that align perfectly with your intended use cases. This fine-tuning of types enhances the robustness of your TypeScript code while allowing for increased flexibility in handling different scenarios.

## Resources

[TS Handbook - Exclude](https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers)

## Thank you!

Thank you for your time and for reading this!
