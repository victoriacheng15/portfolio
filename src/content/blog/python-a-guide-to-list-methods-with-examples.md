---
title: "Python - A Guide to List Methods With Examples"
description: "Discover Python lists: powerful, flexible collections. Explore methods, creation, and manipulation for efficient programming."
date: 2024-03-19
tags: [python]
---

## What is a List in Python?

Python lists offer a flexible way to store and manipulate collections of items. In this guide, we'll delve into Python lists, exploring their methods, and providing examples of how they can be used with arrays. At its core, a Python list is an ordered collection of items. These items can be any of data types - integers, strings, floats, even other lists. Lists are mutable, meaning you can modify them after creation, which make them versatile for various programming tasks.

### Creating Lists:

```python
my_list = [1, 2, 3, 4, 5]

# or use list() constructor
my_list2 = list([1, 2, 3, 4, 5])
```

### Accessing Elements:

```python
print(my_list[0])  # Output: 1
print(my_list[-1]) # Output: 5

print(my_list2[0])  # Output: 1
print(my_list2[-1]) # Output: 5
```

## Python List Methods:

- append(): Adds an item to the end of the list

```python
fruits = ["apple", "banana", "orange"]
fruits.append("grape")
print(fruits)
# Output: ["apple", "banana", "orange", "grape"]
```

- clear(): Clear all elements from the list

```python
fruits = ["orange", "banana", "apple"]
fruits.clear()
print(fruits)
# Output: []
```

- copy(): Returns a copy of the list

```python
fruits = ["apple", "banana", "orange"]
copied_fruits = fruits.copy()
fruits.append("grape")

print(fruits)
# Output: ["apple", "banana", "orange", "grape"]
print(copied_fruits)
# Output: ["apple", "banana", "orange"]
```

- count(): Returns the number of elements with the specified value

```python
fruits = ["apple", "banana", "orange", "apple"]

apple_count = fruits.count("apple")
print(f"There are {apple_count} apples")
# Output: There are 2 apples

orange_count = fruits.count("orange")
print(f"There are {orange_count} orange")
# Output: There are  1 orange
```

- extend(): Extends the list by appending elements from the iterable

```python
fruits = ["apple", "banana", "orange"]
new_fruits = ["grape", "kiwi", "melon"]
fruits.extend(new_fruits)
print(fruits)
# Output: ["apple", "banana", "orange", "grape", "kiwi", "melon"]
```

- index(): Return the index of the first element with the specified value

```python
fruits = ["apple", "banana", "orange", "apple"]

apple_index = fruits.index("apple")
print(f"The first apple is at {apple_index}")
# Output: The first apple is at 0

orange_index = fruits.index("orange")
print(f"The first orange is at {orange_index}")
# Output: The first orange is at 2
```

- insert(): Inserts an element at a specified index

```python
fruits = ["apple", "banana", "orange"]
fruits.insert(1, "grape")
print(fruits)
# Output: ["apple", "grape", "banana", "orange"]
```

- pop(): Removes and return the element at specified index

```python
fruits = ["apple", "banana", "orange"]
popped_fruit = fruits.pop(1)
print("Popped fruit:", popped_fruit)
# Popped fruit: banana
print("Remaining fruits:", fruits)
# Remaining fruits: ["apple", "orange"]
```

- remove(): Removes the first occurrence of a value from the list

```python
fruits = ["apple", "banana", "orange", "banana"]
fruits.remove("banana")
print(fruits)
# Output: ["apple", "orange", "banana"]
```

- reverse(): Reverses the order of the elements in the list

```python
fruits = ["apple", "banana", "orange"]
fruits.reverse()
print(fruits)
# Output: ["orange", "banana", "apple"]
```

- sort(): Sorts the elements of the list in ascending order by default

```python
fruits = ["orange", "banana", "apple"]
fruits.sort()
print(fruits)
# Output: ["apple", "banana", "orange"]
```

## Extras

- Differences between `append()` and `extend()` when adding a list as an item:

```python
# append():
existing_array_append = [1, 2]
new_array_append = [6, 7, 8]
existing_array_append.append(new_array_append)

# extend():
existing_array_extend = [1, 2]
new_array_extend = [6, 7, 8]
existing_array_extend.extend(new_array_extend)

print("Using append():", existing_array_append)
# Using append(): [1, 2, [6, 7, 8]]
print("Using extend():", existing_array_extend)
# Using extend(): [1, 2, 6, 7, 8]
```

- Can use one-liner to create a list

```python
nums = [num**2 for num in range(1, 6)]
print(nums)
# Output: [1, 4, 9, 16, 25]

# This is equal to the above
nums = []
for num in range(1, 6):
    nums.append(num ** 2)

print(nums)
# Output: [1, 4, 9, 16, 25]
```

## Resources

[5.1. More on Lists - Python docs](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

## Thank you!

Thank you for your time and for reading this!
