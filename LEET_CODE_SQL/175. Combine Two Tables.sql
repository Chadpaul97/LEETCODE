# Write your MySQL query statement below

Select 
    p.firstName,
    p.lastName ,
    IFNULL(a.city, NULL) as CITY,
    IFNULL(a.state, NULL) as STATE
    from person as p left join Address as A  on p.personID =  a.personID



/* Write your T-SQL query statement below */

Select 
    p.firstName,
    p.lastName ,
    ISNULL(a.city, NULL)as CITY,
    ISNULL(a.state, NULL)as STATE
    from person as p left join Address as A  on p.personID =  a.personID





