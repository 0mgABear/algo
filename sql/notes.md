# Ranking

ROW_NUMBER() — unique rank per row
RANK() — same rank for ties, skips numbers
DENSE_RANK() — same rank for ties, no skips

# Offset

LAG(col, n) — value from n rows behind
LEAD(col, n) — value from n rows ahead
FIRST_VALUE() — first value in window
LAST_VALUE() — last value in window

# Aggregates over a window

SUM() OVER (...) — running total
AVG() OVER (...) — rolling average
COUNT() OVER (...)

# Frame clauses

ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW — start of partition → current row
ROWS BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING — current row → end of partition
ROWS BETWEEN 6 PRECEDING AND CURRENT ROW — rolling 7-row window

# Dates

## General

| Task                 | PostgreSQL                                       | MSSQL                           |
| -------------------- | ------------------------------------------------ | ------------------------------- |
| Current date         | `CURRENT_DATE`                                   | `CAST(GETDATE() AS DATE)`       |
| Current datetime     | `NOW()`                                          | `GETDATE()`                     |
| Cast to date         | `'2025-01-01'::date`                             | `CAST('2025-01-01' AS DATE)`    |
| Format as string     | `TO_CHAR(dt, 'YYYY-MM-DD')`                      | `FORMAT(dt, 'yyyy-MM-dd')`      |
| Add days             | `dt + INTERVAL '7 days'`                         | `DATEADD(day, 7, dt)`           |
| Diff in days         | `DATE_PART('day', dt2 - dt1)`                    | `DATEDIFF(day, dt1, dt2)`       |
| Truncate to month    | `DATE_TRUNC('month', dt)`                        | `DATETRUNC(month, dt)`          |
| Generate date series | `generate_series(start, end, '1 day'::interval)` | recursive CTE or `DATEADD` loop |

## Extracting Parts

| Task  | PostgreSQL                                           | MySQL       | MSSQL       |
| ----- | ---------------------------------------------------- | ----------- | ----------- |
| Year  | `EXTRACT(YEAR FROM dt)` or `DATE_PART('year', dt)`   | `YEAR(dt)`  | `YEAR(dt)`  |
| Month | `EXTRACT(MONTH FROM dt)` or `DATE_PART('month', dt)` | `MONTH(dt)` | `MONTH(dt)` |
| Day   | `EXTRACT(DAY FROM dt)` or `DATE_PART('day', dt)`     | `DAY(dt)`   | `DAY(dt)`   |

> `EXTRACT()` is ANSI standard SQL. `YEAR()` / `MONTH()` / `DAY()` are shorthand — same result.
> PostgreSQL supports both. MySQL and MSSQL only support the shorthand.

## Formatting as String

| PostgreSQL                  | MySQL                         | MSSQL                      |
| --------------------------- | ----------------------------- | -------------------------- |
| `TO_CHAR(dt, 'YYYY-MM-DD')` | `DATE_FORMAT(dt, '%Y-%m-%d')` | `FORMAT(dt, 'yyyy-MM-dd')` |

## Truncating Dates (useful for grouping by month/year)

| PostgreSQL                | MySQL                         | MSSQL                  |
| ------------------------- | ----------------------------- | ---------------------- |
| `DATE_TRUNC('month', dt)` | `DATE_FORMAT(dt, '%Y-%m-01')` | `DATETRUNC(month, dt)` |

## Current Date / Time

| PostgreSQL               | MySQL                 | MSSQL                                   |
| ------------------------ | --------------------- | --------------------------------------- |
| `CURRENT_DATE` / `NOW()` | `CURDATE()` / `NOW()` | `CAST(GETDATE() AS DATE)` / `GETDATE()` |

## Adding / Subtracting Dates

| PostgreSQL               | MySQL                          | MSSQL                 |
| ------------------------ | ------------------------------ | --------------------- |
| `dt + INTERVAL '7 days'` | `DATE_ADD(dt, INTERVAL 7 DAY)` | `DATEADD(day, 7, dt)` |

## Difference Between Dates

| PostgreSQL                    | MySQL                | MSSQL                     |
| ----------------------------- | -------------------- | ------------------------- |
| `DATE_PART('day', dt2 - dt1)` | `DATEDIFF(dt2, dt1)` | `DATEDIFF(day, dt1, dt2)` |

> MySQL's `DATEDIFF` argument order is opposite to MSSQL's — easy to mix up.

## Comparing Dates — Do I Need to Format First?

If stored as a proper date type (`DATE`, `DATETIME`, `TIMESTAMP`) — use functions directly, no formatting needed.

If stored as a string (`VARCHAR`) — cast first:

```sql
-- PostgreSQL
EXTRACT(YEAR FROM '2025-06-15'::date)

-- MySQL
YEAR(STR_TO_DATE('2025-06-15', '%Y-%m-%d'))

-- MSSQL
YEAR(CAST('2025-06-15' AS DATE))
```

Check column type before assuming:

- MySQL: `DESCRIBE table_name`
- PostgreSQL: `\d table_name`
