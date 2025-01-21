---
title: "Learning SQL: RIGHT JOIN"
description: "Learn how to use the RIGHT JOIN clause in SQL to combine tables, retain all data from the right table, and handle NULL values effectively with examples."
date: 2025-01-21
tags: [sql]
---

## What is the RIGHT JOIN Clause?

The `RIGHT JOIN` statement in SQL is used to combine rows from two or more tables. It returns all rows from the right table (table2) and the matching rows from the left table (table1). If no match is found, NULL values are returned for columns from the left table. `RIGHT JOIN` is essential when you want to retain all data from the right table, regardless of whether there’s a corresponding match in the left table.

## Basics of the RIGHT JOIN Syntax

The `RIGHT JOIN` command helps you create relationships between tables while retaining unmatched rows from the right table. You can specify the matching condition using the ON clause to determine how rows are paired.

### RIGHT JOIN With ON

`RIGHT JOIN` returns all rows from the right table and the matching rows from the left table based on the condition in the ON clause. If no match exists, the result includes NULL values for the left table’s columns.

```sql
SELECT 
    column1, 
    column2, 
    ...  
FROM table1  
RIGHT JOIN table2  
ON table1.common_column = table2.common_column;
```

Example:

```sql
SELECT 
    employees.employee_id, 
    employees.name, 
    departments.department_name  
FROM employees  
RIGHT JOIN departments  
ON employees.department_id = departments.department_id;
```

In this example, all departments are returned, even those without a matching `department_id` in the employees table. The `employee_id` and `name` columns will contain NULL for departments without any employees.

### RIGHT JOIN With Table Alias

Using table aliases simplifies queries and makes them more readable.

```sql
SELECT 
    e.employee_id, 
    e.name, 
    d.department_name  
FROM employees e  
RIGHT JOIN departments d  
ON e.department_id = d.department_id;
```

## Common Considerations When Using RIGHT JOIN

### NULL Values in Results

Since RIGHT JOIN includes all rows from the right table, NULL values will appear for columns in the left table where there is no match. Handle NULL values carefully, especially in calculations or filters.

Exmaple: 

```sql
SELECT 
    d.department_id, 
    d.department_name, 
    COALESCE(e.name, 'No Employee') AS employee_name  
FROM employees e  
RIGHT JOIN departments d  
ON e.department_id = d.department_id;
```

Here, the `COALESCE` function replaces NULL values in the `name` column with 'No Employee'.

## Recap

The `RIGHT JOIN` command is a powerful tool in SQL for preserving all data from the right table while adding related data from the left table. Understanding its syntax, handling NULL values, and testing your queries can ensure accurate and efficient results.

## Resources

[PostgreSQL RIGHT JOIN](https://neon.tech/postgresql/postgresql-tutorial/postgresql-right-join)

## Thank you!

Thank you for your time and for reading this!