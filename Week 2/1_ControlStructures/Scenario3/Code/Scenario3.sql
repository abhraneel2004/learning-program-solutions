declare
  cursor cs is
    select * from customer_loan_due where due_date between sysdate and sysdate+30;
begin
  for cust in cs loop
    dbms_output.put_line(cust.name || ', You have less than 30 days to repay your loan. Due date :- ' || cust.due_date);
  end loop;
end;