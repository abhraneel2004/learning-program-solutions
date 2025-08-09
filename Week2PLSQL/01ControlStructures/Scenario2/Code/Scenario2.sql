declare
  cursor vip is
    select * from customers_vip;
begin
  for cust in vip loop
    if cust.balance > 10000 then
      update customers_vip set is_vip = 'true' where customer_id = cust.customer_id;
      dbms_output.put_line(cust.name || ' is promoted to ' || 'VIP');
    end if;
  end loop;
  commit; 
end;