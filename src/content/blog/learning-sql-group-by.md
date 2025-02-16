---
title: "Learning SQL: GROUP BY"
description: "Learn how to use the SQL GROUP BY clause to group and summarize data. Perfect for aggregating and analyzing datasets with clear examples and explanations."
date: 2025-02-18
tags: [sql]
draft: true
---

## What is GROUP BY Clause?

The `GROUP BY` clause groups rows that have the same values in specified columns into summary rows. It’s often used with aggregate functions like `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX` to perform calculations on each group. For example, you can use `GROUP BY` to calculate the total sales for each product category or count the number of employees in each department.

## How Does GROUP BY Work?

`GROUP BY` works by combining rows with matching values in the specified columns. Once the rows are grouped, aggregate functions are applied to each group to produce a single result per group.

Basic Syntax:

```sql
SELECT 
    column1, 
    column2, 
    aggregate_function(column3)  
FROM table_name  
GROUP BY column1, column2;
```

Example:

Imagine you have a table called `orders` with the following columns: `order_id`, `customer_id`, `order_date`, and `order_amount`. You want to calculate the total order amount for each customer. Here’s how you can do it:

```sql
SELECT 
    customer_id, 
    SUM(order_amount) AS total_amount  
FROM orders  
GROUP BY customer_id;
```

### What Happens Here?

- The `GROUP BY` clause groups the rows by `customer_id`.
- The `SUM` function calculates the total `order_amount` for each customer.
- The result will show one row per customer, with their total order amount.

## Key Points to Remember

1. **Aggregate Functions**:
    - Use functions like `SUM`, `COUNT`, `AVG`, etc., to perform calculations on grouped data.
2. **Columns in SELECT**:
    - Columns in the `SELECT` statement must either be in the `GROUP BY` clause or used with an aggregate function.
3. **Order of Execution**:
    - `GROUP BY` is executed after the `WHERE` clause (if present) and before the `HAVING` clause.

## Recap

- **GROUP BY** groups rows with the same values in specified columns.
- Use aggregate functions to perform calculations on grouped data.
- Be mindful of performance when working with large datasets.

By mastering `GROUP BY`, you can efficiently summarize and analyze data in SQL. Keep this guide handy for quick reference!

## Resources

[PostgreSQL GROUP BY](https://neon.tech/postgresql/postgresql-tutorial/postgresql-group-by)

## Thank you!

Thank you for your time and for reading this!