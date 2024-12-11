---
title: "Python - What is range() Function? 🤔"
description: "Explore Python's range() function for efficient iteration and sequence generation. Perfect for looping numbers, accessing lists, and creating patterns."
date: 2024-06-20
tags: [python]
---

## What is the range() Function in Python?

It is one of the built-in functions and a crucial tool for generating numerical sequences; looping constructs especially benefit from its use. `range()` offers a simple and effective way to achieve this, whether you're iterating over a list, creating indexes, or requiring a sequence of numbers.

The function takes three arguments:

- Single argument: `range(stop)`
  - This generates a sequence of numbers starting from 0 and ending before the **stop** value.
  - Example: `range(5)` gives you 0, 1, 2, 3, 4. (Doesn’t include 5)
- Two argument: `range(start, stop)`
  - This gives you more control. It starts the sequence from the **start** value and goes up to, but not including the **stop** value.
  - Example: `range(3, 8)` gives you 3, 4, 5, 6, 7. (Starts from 3, excludes 8)
- Three argument: `range(start, stop, step)`
  - This can specify the **starting** value, the **ending** value, and the **step size** between each number in the sequence.
  - Example: `range(2, 10, 2)` gives you 2, 4, 6, 8. (Starts from 2, goes up to 10 with steps of 2)

Basic syntax:

```python
# Single argument:
range(stop)
# Two arguments:
range(start, stop)
# Three arguments:
range(start, stop, step)
```

## Examples

### Using range(stop)

```python
for num in range(5):
	print(num)

"""
0
1
2
3
4
"""
```

### Using range(start, stop)

```python
for num in range(3, 8):
	print(num)

"""
3
4
5
6
7
"""
```

### Using range(start, stop, step)

```python
for num in range(50, 101, 10):
	print(num)

"""
50
60
70
80
90
100
"""
```

### Using range() in Reverse

```python
for num in range(20, 10, -2):
	print(num)

"""
20
18
16
14
12
"""
```

### Using range() to Iterate Over a List with len()

```python
fruits = ['apple', 'banana', 'cherry', 'date']

for index in range(len(fruits)):
    print(f"Index {index}: {fruits[index]}")

"""
Index 0: apple
Index 1: banana
Index 2: cherry
Index 3: date
"""
```

## Recap

The `range()` method in Python is a useful and important tool that makes it easy to iterate over a list of items or values. It is a fundamental component in loop and iteration control because it offers an adaptable method of generating sequences. Whether you need to loop through numbers, access list elements, or create specific numeric patterns, `range()` is your go-to function.

## Resources

[class range(stop) by Python Docs](https://docs.python.org/3/library/functions.html#func-range)

[Python range() Function Example by freeCodeCamp](https://www.freecodecamp.org/news/python-range-function-example/)

## Thank you!

Thank you for your time and for reading this!
