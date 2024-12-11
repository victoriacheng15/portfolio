---
title: "Python - sorted() vs sort() Usage"
description: "Learn the differences between Python's sorted() and sort() functions, with examples for lists, tuples, and dictionaries. Understand their parameters and usage"
date: 2024-07-04
tags: [python]
---

## What Are sorted() and sort() Functions?

Python provides two primary methods for sorting: `sored()` and `sort()`. While both are used to arrange elements in a particular order, they function in distinct ways and have different applications./. Understanding these differences and knowing when to use each can significantly enhance your efficiency in writing Python code.

### Differences Between sorted() and sort()

`sorted()` is a built-in Python function that **returns a new list** containing all items from the iterable in ascending order. The original iterable remains unchanged. This function **can be used with any iterable, including lists, tuples, and dictionaries**.

`sort()`, on the other hand, is a method specific to lists. It sorts the _list_ in place, meaning the **original list is modified**, and no new list is created. This method c**annot be used with other iterable types**.

## Examples

Before we dive into the code, both `sorted()` and `sort()` in Python take similar parameters to control how the sorting is performed. Here’s a detailed look at the parameters for each:

- Parameters for `sorted()` :
  - **iterable**: The sequence or collection to be sorted (e.g., list, tuple, dictionary, etc.).
  - **key** (optional): A function that serves as a key for the sort comparison. The function is applied to each element before comparison.
  - **reverse** (optional): A boolean value. If `True`, the sorted list is in descending order. The default is `False` (ascending order).
- Parameters for `sort()` :
  - **key** (optional): A function that serves as a key for the sort comparison. The function is applied to each element before comparison.
  - **reverse** (optional): A boolean value. If `True`, the list is sorted in descending order. The default is `False` (ascending order).

### Examples using sorted()

- Basic usage with only the iterable:

```python
words = ["banana", "orange", "date", "apple"]
print("Original list:", words)

sorted_words = sorted(words)
print("Sorted list:", sorted_words)

# Original list: ['banana', 'orange', 'date', 'apple']
# Sorted list: ['apple', 'banana', 'date', 'orange']
```

- Using the `key` argument:

```python
words = ["banana", "orange", "date", "apple"]
print("Original list:", words)

sorted_words = sorted(words, key=len)
print("Sorted by length:", sorted_words)

# Original list: ['banana', 'orange', 'date', 'apple']
# Sorted by length: ['date', 'apple', 'banana', 'orange']
```

- Using the `reverse` argument:

```python
words = ["banana", "orange", "date", "apple"]
print("Original list:", words)

sorted_words_desc = sorted(words, reverse=True)
print("Sorted list (descending):", sorted_words_desc)

# Original list: ['banana', 'orange', 'date', 'apple']
# Sorted list (descending): ['orange', 'date', 'banana', 'apple']
```

- Sorting a tuple:

```python
words = ("banana", "orange", "date", "apple")
print("Original tuple:", words)

sorted_tuple = sorted(words)
print("Sorted list:", sorted_tuple)

# Original tuple: ('banana', 'orange', 'date', 'apple')
# Sorted list: ['apple', 'banana', 'date', 'orange']
```

- Sorting a dictionary:

```python
dictionary = {"apple": 3, "banana": 2, "cherry": 5, "date": 1}
print("Original dictionary: ", dictionary)

sorted_by_keys = sorted(dictionary.items())
print("Sorted dictionary by keys:", sorted_by_keys)

# Original dictionary:  {'apple': 3, 'banana': 2, 'cherry': 5, 'date': 1}
# Sorted dictionary by keys: [('apple', 3), ('banana', 2), ('cherry', 5), ('date', 1)]
```

### Examples Using sort()

**Note:** The original list will be modified. You can try printing the list before the `sort()` call to see its state before sorting.

- Basic usage with only the list:

```python
words = ["banana", "orange", "date", "apple"]
print("Before sort(): ", words)

words.sort()
print("After sort(): ", words)

# Before sort():  ['banana', 'orange', 'date', 'apple']
# After sort():  ['apple', 'banana', 'date', 'orange']
```

- Using the `key` argument:

```python
words = ["banana", "orange", "date", "apple"]
print("Before sort(): ", words)

words.sort(key=len)
print("After sorted by length:", words)

# Before sort():  ['banana', 'orange', 'date', 'apple']
# After sorted by length: ['date', 'apple', 'banana', 'orange']
```

- Using the `reverse` argument:

```python
words = ["banana", "orange", "date", "apple"]
print("Before sort(): ", words)

words.sort(reverse=True)
print("After sorted list (descending):", words)

# Before sort():  ['banana', 'orange', 'date', 'apple']
# After sorted list (descending): ['orange', 'date', 'banana', 'apple']
```

- Sorting a tuple:

**Tuples** are immutable, meaning they cannot be changed once created. Since `sort()` modifies the list in place, it is not possible to use `sort()` with tuples.

```python
words = ("banana", "orange", "date", "apple")

words.sort()
print(words)

# ---------------------------------------------------------------------------
# AttributeError                            Traceback (most recent call last)
# <ipython-input-4-d655670a766a> in <cell line: 3>()
#       1 words = ("banana", "orange", "date", "apple")
#       2
# ----> 3 words.sort()
#       4
#       5 print(words)

# AttributeError: 'tuple' object has no attribute 'sort'
```

- Sorting a dictionary:

**Dictionaries** do not have a `sort()` method. Sorting must be done on their items, converted to a list first if needed.

```python
dictionary = {"apple": 3, "banana": 2, "cherry": 5, "date": 1}

dictionary.sort()
print(dictionary)

# ---------------------------------------------------------------------------
# AttributeError                            Traceback (most recent call last)
# <ipython-input-13-988de0b42198> in <cell line: 3>()
#       1 dictionary = {"apple": 3, "banana": 2, "cherry": 5, "date": 1}
#       2
# ----> 3 dictionary.sort()
#       4 print(dictionary)

# AttributeError: 'dict' object has no attribute 'sort'
```

## Resources

[How to Use sorted() and .sort() in Python by Real Python](https://realpython.com/python-sort/#ordering-values-with-sort)

## Thank you!

Thank you for your time and for reading this!
