---
title: "Python List Comprehension - Simplify Your Code"
description: "Unlock Python's potential with list comprehensions. Learn efficient coding techniques, including conditional statements and nested lists"
date: 2024-04-23
tags: [python]
---

## What is a Python List Comprehension?

In Python, there is a technique known as list comprehension. It offers a concise way to create a new list based on the values of an existing list.

The basic syntax of a list comprehension:

```python
[expression for item in iterable if condition]
```

Here's a breakdown of each part:

- **expression**: This is the operation you want to perform on each item in the iterable to create the elements of the new list.
- **item**: This represents each individual item in the iterable.
- **iterable**: This is the collection of items you want to iterate over, such as a _list_, _tuple_, or _range_.
- **if condition (optional)**: This part allows you to filter the items based on a condition. Only items for which the condition evaluates to True will be included in the new list

## For Loop vs List Comprehension

We'll compare the traditional for loop with the shorter list comprehension method. Using examples, we'll show how each one makes a list of numbers from 0 to 4.

### For loop example:

```python
numbers = []

for num in range(5):
	numbers.append(num)

print(numbers)
# Output: [0, 1, 2, 3, 4]
```

### List comprehension example:

```python
numbers = [num for num in range(5)]

print(numbers)
# Output: [0, 1, 2, 3, 4]
```

## Conditonals in List Comprehension

List comprehension can utilize conditional statement like `if...else` to filter existing lists.

### If Conditional

In this example, list comprehension is used to filter even numbers from the range 1 to 9. The condition `if num % 2 == 0` ensures that only even numbers are included in the new list.

```python
even_numbers = [num for num in range(1, 10) if num % 2 == 0 ]

print(even_numbers)
# Output: [2, 4, 6, 8]
```

### If-Else Conditional

```python
even_odd_labels = ["even" if num % 2 == 0 else "odd" for num in range(1, 6)]

print(even_odd_labels)
# Output: ["odd", "even", "odd", "even", "odd"]
```

To summarize:

- When using only an **if condition**, it comes **after** the for loop expression because it serves as a filter to determine which items from the iterable should be included in the new list.
- When using **if-else**, it comes **before** the for loop expression because it involves transforming each item based on a condition.

## Nested List

We will create a 3x3 nested list. We can achieve this using both nested for loop and list comprehension. The loop approach iterates over rows and columns to calculate each element. List comprehension provides a more concise alternative.

### For loop

```python
nested_list = []

# Iterate over rows
for i in range(3):
    row = []
    # Iterate over columns
    for j in range(3):
        # Calculate element and append to row
        row.append(i * 3 + j + 1)
    # Append row to nested list
    nested_list.append(row)

print(nested_list)
# Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

### List Comprehension

```python
nested_list = [
  # creating sublist
  [num for num in range(start, start + 3)]
  # Outer loop
  for start in range(1, 10, 3)
]

print(nested_list)
# Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

In this code:

- The outer loop iterates over the starting numbers of each sublist (1, 4, and 7).
- Inside the list comprehension, another loop generates each sublist by iterating over the next 3 numbers starting from the current start value.

## Flatten List

```python
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

# Flatten the nested list using list comprehension
flattened_list = [num for sublist in nested_list for num in sublist]

print(flattened_list)
```

In this example, the list comprehension iterates over each sublist in the nested list (`for sublist in nested_list`) and then iterates over each element in the sublist (`for num in sublist`). This results in a flattened list containing all elements from the nested list.

## Resources

[10 Python Comprehensions You SHOULD Be Using by Tech with Tim](https://www.youtube.com/watch?v=twxE0dEp3qQ)

[How to use list comprehension in Python by 2MinutesPy](https://www.youtube.com/watch?v=a3eE5kslhek)

## Thank you!

Thank you for your time and for reading this!
