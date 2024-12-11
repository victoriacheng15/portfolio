---
title: "Learning SQL: ORDER BY"
description: "Learn how to use the SQL ORDER BY clause to sort query results by one or multiple columns in ascending or descending order with clear examples."
date: 2024-10-08
tags: [sql]
---

## What is the ORDER BY Clause?

The `ORDER BY` clause is a fundamental SQL feature that helps you sort the data in your query results. When you retrieve data from a database, you often want to present it in a specific order, whether that’s alphabetically, numerically, or based on dates. The `ORDER BY` clause allows you to organize your result set in either ascending or descending order, making your data more readable and easier to analyze.

### **Basics of the ORDER BY Clause**

The `ORDER BY` clause is used with the `SELECT` statement to specify how the results should be sorted. By default, the data is sorted in ascending order, so you don’t need to explicitly write `ASC`. Here's the basic syntax:

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 [ASC|DESC];
```

For example, if you want to retrieve and sort all the customers from a `customers` table by their last names in alphabetical order, your query would look like this:

```sql
SELECT first_name, last_name
FROM customers
ORDER BY last_name;
```

This query will return customers sorted by their last name in ascending order (A-Z) by default.

### **Sorting in Descending Order**

To sort the results in descending order, simply use the `DESC` keyword. For instance, if you want to retrieve and sort all customers by their age, showing the oldest first, your query would look like this:

```sql
SELECT first_name, last_name, age
FROM customers
ORDER BY age DESC;
```

This query will return the customers sorted by age in descending order, showing the oldest at the top.

### **Sorting by Multiple Columns**

You can also sort by multiple columns. If two or more rows have the same value in the first column, the second column will sort those rows. For example, if you want to sort customers first by their city and then by their last name, the query would be:

```sql
SELECT first_name, last_name, city
FROM customers
ORDER BY city, last_name;
```

This query will first sort customers by city in ascending order, and in each town, customers will be sorted by last name.

### **Sorting by Multiple Columns with DESC**

You can also use `DESC` for one or more columns when sorting by multiple columns. For instance, if you want to sort customers by their `age` in descending order (oldest first), and then by their `last_name` in ascending order for customers with the same age, your query would look like this:

```sql
SELECT first_name, last_name, age
FROM customers
ORDER BY age DESC, last_name;
```

This query will:

- First, sort customers by their `age` in descending order (from oldest to youngest).
- Then, for customers with the same age, it will sort them by their `last_name` in ascending order (A-Z).

## Recap

The `ORDER BY` clause is an essential SQL feature for sorting query results. It allows you to present your data in a meaningful order, whether ascending or descending. You can also combine multiple columns to create more specific sorting criteria. Whether you're working with names, numbers, or dates, mastering the `ORDER BY` clause will help you organize your data effectively.

## Resources

[PostgreSQL ORDER BY](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-order-by/)

## Thank you!

Thank you for your time and for reading this!