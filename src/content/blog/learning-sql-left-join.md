---
title: "Learning SQL: LEFT JOIN"
description: "Learn about SQL LEFT JOIN: combine data from two tables, return all rows from the left table, and fill unmatched rows with NULL values. Clear examples included!"
date: 2025-01-14
tags: [sql]
---

## What is the LEFT JOIN Clause?

The `LEFT JOIN` statement in SQL is used to combine rows from two or more tables. It returns all rows from the left table (table1) and the matching rows from the right table (table2). If no match is found, NULL values are returned for columns from the right table. LEFT JOIN is essential when you want to retain all data from the left table, regardless of whether there's a corresponding match in the right table.

## Basics of the LEFT JOIN Syntax

The `LEFT JOIN` command helps you create relationships between tables while retaining unmatched rows from the left table. You can specify the matching condition using the ON clause to determine how rows are paired.

### LEFT JOIN with ON

`LEFT JOIN` returns all rows from the left table and the matching rows from the right table based on the condition in the ON clause. If no match exists, the result includes NULL values for the right table’s columns.

```sql
SELECT 
	column1, 
	column2, 
	...  
FROM table1  
LEFT JOIN table2  
ON table1.common_column = table2.common_column;  
```

Example: 

```sql
SELECT 
	employees.employee_id, 
	employees.name, 
	departments.department_name  
FROM employees  
LEFT JOIN departments  
ON employees.department_id = departments.department_id;  
```

In this example, all employees are returned, even those without a matching department_id in the departments table. The department_name column will contain NULL for such employees.

### LEFT JOIN with Table Alias

Using table aliases simplifies queries and makes them more readable.

Example:

```sql
SELECT 
	e.employee_id, 
	e.name, 
	d.department_name  
FROM employees e  
LEFT JOIN departments d  
ON e.department_id = d.department_id;  
```

This query achieves the same result as the previous example but uses shorter, more concise table aliases.

## Common Considerations When Using LEFT JOIN

### NULL Values in Results

Since LEFT JOIN includes all rows from the left table, NULL values will appear for columns in the right table where there is no match. Handle NULL values carefully, especially in calculations or filters.

Example:

```sql
SELECT 
	employee_id, name, 
	COALESCE(department_name, 'No Department') AS department_name  
FROM employees  
LEFT JOIN departments  
ON employees.department_id = departments.department_id;  
```

### Be Specific with Columns

Always specify the columns you want to retrieve to avoid unnecessary data and potential ambiguity.

Example:

```sql
SELECT e.employee_id, d.department_name  
FROM employees e  
LEFT JOIN departments d  
ON e.department_id = d.department_id;  
```

## Recap

The `LEFT JOIN` command is a valuable tool in SQL for preserving all data from the left table while adding related data from the right table. Understanding its syntax, handling NULL values, and testing your queries can ensure accurate and efficient results.

## Resources

[PostgreSQL LEFT JOIN](https://neon.tech/postgresql/postgresql-tutorial/postgresql-left-join)

## Thank you!

Thank you for your time and for reading this!