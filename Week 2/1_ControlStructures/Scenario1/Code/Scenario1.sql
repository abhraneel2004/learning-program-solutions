declare
  cursor cs is
    select * from customer_loans where age > 60;

begin
  for cust in cs loop
    update customer_loans set interest_rate = interest_rate - 1 where loan_id = cust.loan_id;
    dbms_output.put_line('Applied 1% discount for Customer '|| cust.name);
  end loop;
  commit;
end;