---
title: "Unlocking the Power of Python Dictionary"
description: "Explore Python dictionaries: versatile data structures for efficient data organization and retrieval, essential in Python programming."
date: 2024-04-09
tags: [python]
---

## What is a Python Dictionary?

In Python, dictionaries stand as versatile and indispensable data structures. They offer a flexible means of storing and organizing data, allowing developers to efficiently retrieve and manipulate information.

Dictionaries are comprised of key-value pairs, where each key is associated with a corresponding value. This association facilitates rapid lookup, making dictionaries ideal for tasks ranging from simple data storage to complex data modeling.

## Examples:

### Basic Dictionary

```python
example = {
    "key": "value"
}

# Adding an item with square brackets
example["key2"] = "value2"
# Output: {'key': 'value', 'key2': 'value2'}

# Deleting an item
del example["key"]
# Output: {'key2': 'value2'}
```

### Dictionary with Nested Structure

```python
# With nested dictionary
example2 = {
    "address": {
        "street": "123 Main Street",
        "city": "Vancouver",
        "province": "British Columbia"
    }
}
```

## Methods

Let’s use this example for methods:

```python
import json

students = {
    "John": {
        "age": 20,
        "grades": {
            "Math": 85,
            "Science": 90,
            "History": 78
        }
    },
    "Emily": {
        "age": 19,
        "grades": {
            "Math": 92,
            "Science": 88,
            "History": 95
        }
    }
}
```

### clear()

Remove all the elements from the dictionary

```python
students.clear()

print("After clearing the dictionary:", students)
# After clearing the dictionary: {}
```

### copy()

Returns a copy of the dictionary

```python
students_copy = students.copy()
print("Copy of the dictionary:", students_copy, indent=2)
# This will be empty since we cleared it with the method above
# Copy of the dictionary: {}
```

### fromkeys()

Return a dictionary with the specific keys and value

```python
keys = ["Viktor", "Emma"]
values = {"age": 20, "grades": {"Math": 85, "Science": 90, "History": 78}}

new_students = dict.fromkeys(keys, values)

print("New students dictionary:")
print(json.dumps(new_students, indent=2))

"""
New students dictionary:
{
  "Viktor": {
    "age": 20,
    "grades": {
      "Math": 85,
      "Science": 90,
      "History": 78
    }
  },
  "Emma": {
    "age": 20,
    "grades": {
      "Math": 85,
      "Science": 90,
      "History": 78
    }
  }
}
"""
```

### get()

Returns the value of the specified key

```python
viktor_info = new_students.get("Viktor", {})
print("Viktor's info using get():", viktor_info)

"""
Viktor's info using get(): {'age': 20, 'grades': {'Math': 85, 'Science': 90, 'History': 78}}
"""

# get Viktor's age using a chain of get() functions
viktor_age = new_students.get("Viktor").get("age")
print("Viktor's age using get():", viktor_age)
# Viktor's age using get(): 20
```

### items()

Returns a list containing a tuple for each key value pair

```python
print("Items in students dictionary:")
print(new_students.items())

"""
Items in students dictionary:
dict_items(
  [
    ('Viktor',
      {'age': 20, 'grades': {'Math': 85, 'Science': 90, 'History': 78}}
    ),
    ('Emma',
      {'age': 20, 'grades': {'Math': 85, 'Science': 90, 'History': 78}}
    )
  ]
)
"""
```

### keys()

Returns a list containing the dictionary’s keys

```python
print("Keys in students dictionary:")
print(new_students.keys())

"""
Keys in students dictionary:
dict_keys(
  ['Viktor', 'Emma']
)
"""
```

### pop()

Removes the element with the specified key

```python
viktor_info = new_students.pop("Viktor")
print("Removed Viktor's info:")
print(json.dumps(viktor_info, indent=2))

"""
Removed Viktor's info:
{
  "age": 20,
  "grades": {
    "Math": 85,
    "Science": 90,
    "History": 78
  }
}
"""

print("Students dictionary after popping Viktor's info:")
print(json.dumps(new_students, indent=2))

"""
Students dictionary after popping Viktor's info:
{
  "Emma": {
    "age": 20,
    "grades": {
      "Math": 85,
      "Science": 90,
      "History": 78
    }
  }
}
"""
```

### popitem()

Removes the last inserted key-value pair

```python
last_inserted = new_students.popitem()
print("Last inserted key-value pair removed:")
print(last_inserted)

"""
Last inserted key-value pair removed:
('Emma', {'age': 20, 'grades': {'Math': 85, 'Science': 90, 'History': 78}})
"""

print("Students dictionary after popping last inserted key-value pair:")
print(json.dumps(new_students, indent=2))

"""
Students dictionary after popping last inserted key-value pair: {}
"""
```

### setdefault()

Returns the value of the specified key. If the key does not exist: insert the key, with the specified value

```python
value = new_students.setdefault("Viktor", {"age": 25, "grades": {"Math": 100, "Science": 90, "History": 65}})
print("Value of Viktor using setdefault:")
print(json.dumps(value, indent=2))

"""
Value of Viktor using setdefault:
{
  "age": 25,
  "grades": {
    "Math": 100,
    "Science": 90,
    "History": 65
  }
}
"""

print("Updated students dictionary:")
print(json.dumps(new_students, indent=2))

"""
Updated students dictionary:
{
  "Viktor": {
    "age": 25,
    "grades": {
      "Math": 100,
      "Science": 90,
      "History": 65
    }
  }
}
"""
```

### update()

Updates the dictionary with the specified key-value pairs

```python
new_grades = {"Math": 94, "Science": 85}
new_students["Viktor"]["grades"].update(new_grades)
print("Updated Viktor's grades:")
print(json.dumps(new_students["Viktor"]["grades"], indent=2))

"""
Updated Viktor's grades:
{
  "Math": 94,
  "Science": 85,
  "History": 65
}
"""
```

### values()

Returns a list of all the values in the dictionary

```python
print("Values in students dictionary:")
print(new_students.values())

"""
Values in students dictionary:
dict_values(
  [
    {'age': 25, 'grades': {'Math': 94, 'Science': 85, 'History': 65}}
  ]
)
"""
```

## Resources

[Python Docs - 5.5 Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)

## Thank you!

Thank you for your time and for reading this!
