---
title: "Learning SQL: FULL OUTER JOIN"
description: "Master SQL FULL OUTER JOIN: Combine data from two tables, retain all rows, handle NULL values, and optimize queries for better insights."
date: 2025-02-04
tags: [sql]
draft: true
---

## What is the FULL OUTER JOIN Clause?

The `FULL OUTER JOIN` statement in SQL is useful for combining rows from two or more tables. It differs from other types of joins because it returns all rows from the left table (table1) and the right table (table2). If there is no match between the tables, the result will show NULL values for columns from the table that do not have a matching row. `FULL OUTER JOIN` is especially helpful when you want to keep all data from both tables, even if some rows do not match.

### How Does FULL OUTER JOIN Work?

Let’s break it down step by step. The `FULL OUTER JOIN` command combines rows from two tables based on a condition you specify (using the ON clause). It keeps all rows from both tables, even if there’s no match. If a row in one table doesn’t have a match in the other table, the missing data will show up as NULL.

```sql
SELECT 
    column1, 
    column2, 
    ...  
FROM table1  
FULL OUTER JOIN table2  
ON table1.common_column = table2.common_column;
```

Example:

Imagine you have two tables:

- **employees**: Contains employee details like `employee_id`, `name`, and `department_id`.
- **departments**: Contains department details like `department_id` and `department_name`.

You want to see all employees and all departments, even if some employees don’t belong to a department or some departments have no employees. Here’s how you can do it:

```sql
SELECT 
    employees.employee_id, 
    employees.name, 
    departments.department_name  
FROM employees  
FULL OUTER JOIN departments  
ON employees.department_id = departments.department_id;

-- With Table Alias
SELECT 
    e.employee_id, 
    e.name, 
    d.department_name  
FROM employees e  
FULL OUTER JOIN departments d  
ON e.department_id = d.department_id;
```

In this query:

- If an employee doesn’t belong to a department, the `department_name` column will show NULL.
- If a department has no employees, the `employee_id` and `name` columns will show NULL.

## Things to Keep in Mind

### Null Values in Results

Since `FULL OUTER JOIN` keeps all rows from both tables, you’ll often see NULL values in the result. For example, if an employee doesn’t belong to a department, the department_name will be NULL. Similarly, if a department has no employees, the employee_id and name will be NULL. You need to handle these NULL values carefully, especially if you’re doing calculations or filtering data.

Example:

```sql
SELECT 
    COALESCE(e.employee_id, 'No Employee') AS employee_id, 
    COALESCE(e.name, 'No Name') AS employee_name, 
    COALESCE(d.department_name, 'No Department') AS department_name  
FROM employees e  
FULL OUTER JOIN departments d  
ON e.department_id = d.department_id;
```

In this example, the COALESCE function is used to replace NULL values in the `employee_id`, `name`, and `department_name` columns with more meaningful text like `'No Employee'`, `'No Name'`, or `'No Department'`.

### Performance Considerations

`FULL OUTER JOIN` can be slow if you’re working with very large tables. To make it faster, make sure the columns you’re joining on (like department_id in the example) are indexed.

### Testing and Validation

Always test your `FULL OUTER JOIN` queries to make sure they’re working as expected. Use small sample data to check the results and confirm that NULL values are handled correctly.

## Why is FULL OUTER JOIN Useful?

`FULL OUTER JOIN` is helpful when you want to see all the data from two tables, even if some rows don’t match. For example:

- You might want to see all employees and all departments, even if some employees aren’t assigned to a department or some departments have no employees.
- You might want to compare two lists of data and see which items are missing from one list or the other.

## Recap

Here’s what you need to remember about `FULL OUTER JOIN`:

1. It keeps all rows from both tables, even if there’s no match.
2. If there’s no match, the missing data will show up as NULL.
3. You can use table aliases to make your queries shorter and easier to read.
4. Be careful with NULL values and test your queries to make sure they work correctly.

By understanding `FULL OUTER JOIN`, you’ll be able to work with more complex data and get better insights from your SQL queries. Keep practicing, and soon you’ll be a SQL pro!

## Resources

[PostgreSQL FULL OUTER JOIN](https://neon.tech/postgresql/postgresql-tutorial/postgresql-full-outer-join)

## Thank you!

Thank you for your time and for reading this!