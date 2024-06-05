-- department table
CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100) NOT NULL
);

-- employee table
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    department_id INT,
    salary DECIMAL(10, 2),
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

-- INSERTION
INSERT INTO departments (department_id, department_name) VALUES 
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Marketing');

INSERT INTO employees (employee_id, first_name, last_name, department_id, salary) VALUES 
(1, 'Suyan', 'Shrestha', 1, 60000),
(2, 'Shristi', 'Koju', 2, 80000),
(3, 'Alex', 'Yang', 1, 75000),
(4, 'Bob', 'Brown', 3, 50000),
(5, 'Charlie', 'Davis', 2, 90000);


-- simple select and from
SELECT first_name, last_name, salary 
FROM employees;

-- where
SELECT first_name, last_name, salary 
FROM employees 
WHERE salary > 70000;

-- join
SELECT employees.first_name, employees.last_name, departments.department_name 
FROM employees 
JOIN departments 
ON employees.department_id = departments.department_id;

-- group by
SELECT department_id, COUNT(*) AS employee_count 
FROM employees 
GROUP BY department_id;

-- having
SELECT department_id, COUNT(*) AS employee_count 
FROM employees 
GROUP BY department_id 
HAVING COUNT(*) > 1;

-- order by
SELECT first_name, last_name, salary 
FROM employees 
ORDER BY salary DESC;

-- limit
SELECT first_name, last_name, salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 3;

-- combined example for them
SELECT e.first_name, e.last_name, d.department_name, e.salary 
FROM employees e 
JOIN departments d 
ON e.department_id = d.department_id 
WHERE e.salary > 70000 
GROUP BY d.department_name 
HAVING COUNT(e.employee_id) > 1 
ORDER BY e.salary DESC 
LIMIT 3;
