---
title: "Python Error Handling: try, except, else, and finally"
description: "Learn how to handle errors in Python using try, except, else, and finally blocks. This guide covers common exceptions and best practices for robust code."
date: 2024-08-13
tags: [python]
---

## Intro to try, except, else, and finally in Python

Error handling is essential for writing reliable Python programs. Python offers several ways to manage runtime errors. One of the most powerful methods is using `try`, `except`, `else`, and `finally` blocks. In this post, we'll explore how each of these works with practical examples to help you understand their usage.

## The `try` Block

The `try` block contains the code that might cause an error. If everything runs smoothly, the `except` block is skipped. If an error happens, Python goes straight to the `except` block.

```python
try:
    result = 10 / 0
    print("This will not print because an exception occurs above.")
except ZeroDivisionError:
    print("You can't divide by zero!")

# You can't divide by zero!
```

In this example, attempting to divide by zero raises a `ZeroDivisionError`, which is caught by the `except` block.

## The `except` Block

The `except` block handles errors from the `try` block. You can catch specific exceptions or use a general `except` clause to catch all errors.

```python
try:
    number = int(input("Enter a number: "))
except ValueError:
    print("That's not a valid number!")

# Enter a number: abc
# That's not a valid number!
```

Here, if the user inputs a non-numeric value, a `ValueError` is raised, which is then caught by the `except` block.

### Common Python Exceptions

- **`ValueError`**: Raised when a function gets an argument of the right type but an inappropriate value.
- **`TypeError`**: Raised when an operation is applied to an object of an inappropriate type.
- **`IndexError`**: Raised when trying to access a list element with an index that's out of range.
- **`KeyError`**: Raised when a dictionary key is not found.
- **`FileNotFoundError`**: Raised when attempting to open a file that doesn't exist.
- **`AttributeError`**: Raised when an attribute reference or assignment fails.
- **`ImportError`**: Raised when an import statement fails to find the module or specific name.
- **`NameError`**: Raised when a variable or function name is not found.
- **`SyntaxError`**: Raised when the code contains a syntax mistake.

For a full list of exceptions, refer to the Built-in Exceptions section in the Python documentation. I've included a link in the Resources section.

## The `else` Block

The `else` block is optional and runs only if the `try` block succeeds without errors. It’s useful for code that should execute when no errors occur.

```python
try:
    number = int(input("Enter a number: "))
except ValueError:
    print("That's not a valid number!")
else:
    print(f"You entered the number {number}.")

# Enter a number: 10
# You entered the number 10.
```

In this case, because the user entered a valid number, the `else` block is executed.

## The `finally` Block

The `finally` block is also optional and always runs, whether there was an error or not. It's perfect for cleaning up resources, like closing files or releasing locks.

```python
try:
    file = open("example.txt", "r")
    data = file.read()
except FileNotFoundError:
    print("File not found!")
finally:
    file.close()
    print("File closed.")

# File not found!
# File closed.
```

In this scenario, even though the file was not found, the `finally` block ensures that any resources (if opened) are properly closed.

## Combining `try`, `except`, `else`, and `finally`

These blocks can be combined to create error-handling structures. Here's an example that uses all four components:

```python
try:
    num1 = int(input("Enter the first number: "))
    num2 = int(input("Enter the second number: "))
    result = num1 / num2
except ValueError:
    print("Please enter valid numbers.")
except ZeroDivisionError:
    print("Division by zero is not allowed.")
else:
    print(f"The result is {result}.")
finally:
    print("Execution completed.")

# Enter the first number: 10
# Enter the second number: 0
# Division by zero is not allowed.
# Execution completed.
```

In this example:

- The `try` block contains code that might raise multiple types of exceptions.
- The `except` blocks handle specific errors.
- The `else` block runs only if no exceptions occur.
- The `finally` block runs regardless of what happens.

## Recap

Using `try`, `except`, `else`, and `finally` blocks can make your Python code much more robust. By handling exceptions well, you can ensure your programs recover smoothly from errors, making them more reliable and user-friendly.

## Resources

[Error Handling in Python – try, except, else, & finally Explained with Code Examples by fCC](https://www.freecodecamp.org/news/error-handling-in-python-introduction/)

[Built-in Exceptions by Python Docs](https://docs.python.org/3/library/exceptions.html)

## Thank you!

Thank you for your time and for reading this!
