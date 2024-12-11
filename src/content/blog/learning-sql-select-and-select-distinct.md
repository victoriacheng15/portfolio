---
title: "Learning SQL: SELECT and SELECT DISTINCT"
description: "Learn how to use SQL's SELECT statement to retrieve data and filter out duplicates with DISTINCT with examples."
date: 2024-09-10
tags: [sql]
---

## What is the SELECT Command?

The `SELECT` statement is one of the key tools in SQL for getting data from a database. Whether you're working with big datasets or just doing simple queries, knowing how to use `SELECT` properly makes interacting with databases much easier.

### Basic of the SELECT command

The `SELECT` statement lets you retrieve data from a database. You can control exactly what information is returned by choosing which columns you want. Here's the basic syntax:

```sql
SELECT column1, column2, ...
FROM table_name;
```

For example, if you have a `customers` table and you want to retrieve their first name, last name, and email, the query would be:

```sql
SELECT first_name, last_name, email
FROM customers;
```

This query fetches the `first_name`, `last_name`, and `email` columns from the `customers` table for every record.

Additionally, If you need all the columns from a table, you can use `SELECT *`:

```sql
SELECT *
FROM customers;
```

This query retrieves every column from the `customers` table. However, it's a best practice to avoid using `SELECT *` unless necessary, as it can slow down your queries and return more data than required.

### Filtering Result with SELECT DISTINCT

Sometimes, you'll encounter duplicate data you want to remove. This is where the `DISTINCT` keyword comes into play. When you use `SELECT DISTINCT`, SQL ensures that unique values are returned in the result set.

```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

Let’s say you're querying an `orders` table where each customer can place multiple orders. If you want a list of customers who have placed orders, but you don’t want duplicate entries for the same customer, you can run the following query:

```sql
SELECT DISTINCT customer_id
FROM orders;
```

This query will return only the unique customer IDs from the `orders` table, even if some customers have placed multiple orders.

You can also apply `DISTINCT` to multiple columns. In this case, SQL will return unique combinations of the specified columns.

For example, if you want to see all unique customer-product pairs from the `orders` table:

```sql
SELECT DISTINCT customer_id, product_id
FROM orders;
```

## Recap

The `SELECT` statement is fundamental to querying databases, while the `DISTINCT` keyword helps filter the results by removing duplicate values. Whether you're pulling large datasets or working with unique customer information, understanding when and how to use `SELECT` and `SELECT DISTINCT` will make your queries more efficient and your data cleaner.

## Resources

[PostgreSQL SELECT](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select/)

[PostgreSQL SELECT DISTINCT](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-select-distinct/)

## Thank you!

Thank you for your time and for reading this!