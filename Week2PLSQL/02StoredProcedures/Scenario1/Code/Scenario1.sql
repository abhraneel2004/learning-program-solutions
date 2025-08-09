create or replace procedure ProcessMonthlyInterest is
begin
  update savings_accounts
  set balance = balance + (balance * 0.01);

  dbms_output.put_line('Monthly interest of 1% applied to all savings accounts.');
  commit;
end;