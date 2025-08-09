create or replace procedure UpdateEmployeeBonus (
    p_dept_id       in number,
    p_bonus_percent in number
)is
begin
  update EMPLOYEES
  set salary = salary + (salary * p_bonus_percent / 100)
  where department_id = p_dept_id;

  dbms_output.put_line('Bonus of ' || p_bonus_percent || '% applied to department ' || p_dept_id);

  commit;
end;