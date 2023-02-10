--MS SQL SERVER

Select top 3
dep.name as Department 
,emp.name as Employee 
,emp.salary
from employee emp join department dep on emp.departmentId = dep.id

order by emp.salary desc
