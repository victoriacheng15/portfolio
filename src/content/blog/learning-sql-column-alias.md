---
title: "Learning SQL: Column Alias"
description: "Learn how to use column aliases in SQL to simplify your query results, make calculations more readable, and improve clarity with easy-to-understand examples."
date: 2024-09-17
tags: [sql]
---

## What is a Column Alias in SQL?

A **column alias** is like giving a nickname to a column in your SQL query. It’s a temporary name that makes your results easier to read and understand, especially when you’re dealing with calculations or columns with long or confusing names.

### How to Use it?

The basic way to create a column alias:

```sql
SELECT column_name AS alias_name
FROM table_name;
```

You can leave out the `AS` keyword, like this:

```sql
SELECT column_name alias_name
FROM table_name;
```

While `AS` is optional, leaving it out can make the query harder to read. I prefer to use `AS` for better clarity.

## Why Use Aliases?

- Cleaner Results:
  - If the column names are long or unclear, aliases make your output easier to read
- Naming calculations:
  - When doing math or combining columns, aliases give a name to the result
- Avoid Confusion:
  - If you are working with more than one table, and they have columns with same names, aliases help you tell them apart

## Examples

- Let’s say you have a table `customers` with columns `first_name` and `last_name`. You want to show both names together as one. You can use an alias for this:

```sql
SELECT first_name || ' ' || last_name AS full_name
FROM employees;
```

- When you're counting things or using functions, aliases are super helpful for giving the result a clear name. For example, if you want to count the total number of employees:

```sql
SELECT COUNT(*) AS employee_count
FROM employees;
```

- Imagine you want to display a **product's** price and a **discounted** price. You can create an alias for the discount like this:

```sql
SELECT product_name, price, price * 0.9 AS discounted_price
FROM products;
```

- If you want to include spaces in your alias, make sure to enclose it in double quotes, like this:

```sql
SELECT first_name AS "First Name"
FROM employees;
```

## Recap

Column aliases are a simple yet powerful feature in SQL that can improve the clarity of your query results. Whether you're renaming columns for readability, performing calculations, or resolving naming conflicts, aliases help ensure your data is presented more easily and meaningfully.

## Resources

[PostgreSQL Column Alias](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-column-alias/)

[SQL Alias: Everything You Need to Know About AS in SQL](https://www.dbvis.com/thetable/sql-alias-everything-you-need-to-know-about-as-in-sql/)

## Thank you!

Thank you for your time and for reading this!
