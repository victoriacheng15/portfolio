---
title: "Learning SQL: HAVING"
description: "Master the SQL HAVING clause to filter grouped data. Understand how to apply conditions to aggregated results with practical examples and use cases."
date: 2025-03-04
tags: [sql]
draft: true
---

## What is the HAVING Clause?

The `HAVING` clause is used to filter groups of rows based on a condition. It is often used with aggregate functions like `SUM`, `COUNT`, `AVG`, etc., to apply conditions to grouped data. For example, you can use `HAVING` to find customers whose total order amount exceeds a specific threshold.

## How Does HAVING Work?

`HAVING` is applied after the `GROUP BY` clause and filters the grouped results. It allows you to specify conditions that involve aggregate functions, which cannot be done with the `WHERE` clause.

Basic Syntax:

```sql
SELECT 
    column1, 
    column2, 
    aggregate_function(column3)  
FROM table_name  
GROUP BY column1, column2  
HAVING condition;
```

Example:

Using the same `orders` table from the previous example, suppose you want to find customers whose total order amount exceeds $1,000. Here’s how you can do it:

```sql
SELECT 
    customer_id, 
    SUM(order_amount) AS total_amount  
FROM orders  
GROUP BY customer_id  
HAVING SUM(order_amount) > 1000;
```

### What Happens Here?

- The `GROUP BY` clause groups the rows by `customer_id`.
- The `SUM` function calculates the total `order_amount` for each customer.
- The `HAVING` clause filters the groups to include only those where the total order amount is greater than $1,000.

## Key Differences: WHERE vs HAVING

- **WHERE**: Filters individual rows **before** grouping. Cannot be used with aggregate functions.
- **HAVING**: Filters groups of rows **after** grouping. Can be used with aggregate functions.

Example:

```sql
SELECT 
    customer_id, 
    SUM(order_amount) AS total_amount  
FROM orders  
WHERE order_date > '2023-01-01'  
GROUP BY customer_id  
HAVING SUM(order_amount) > 500;
```

- The `WHERE` clause filters orders placed after January 1, 2023.
- The `GROUP BY` clause groups the filtered rows by `customer_id`.
- The `HAVING` clause filters the groups to include only those with a total order amount greater than $500.

## Practical Use Cases

- **Filtering Aggregated Data**: Find groups that meet specific criteria, such as total sales exceeding a threshold.
- **Data Analysis**: Analyze trends or patterns in grouped data.
- **Customer Segmentation**: Identify high-value customers based on their total purchases.

## Recap

- **HAVING** filters groups of rows based on conditions involving aggregate functions.
- Use it after `GROUP BY` to apply conditions to grouped data.
- Be cautious with performance when working with large datasets.

By mastering `HAVING`, you can efficiently filter and analyze grouped data in SQL. Save this guide for quick reference whenever you need it!

## Resources

[PostgreSQL HAVING](https://neon.tech/postgresql/postgresql-tutorial/postgresql-having)

## Thank you!

Thank you for your time and for reading this!