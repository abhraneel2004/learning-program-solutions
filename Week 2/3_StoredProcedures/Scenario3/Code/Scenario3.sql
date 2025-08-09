create or replace procedure TransferFunds (
    src_account in number,
    dest_account   in number,
    amount       in number
) is
    rem_balance number(10,2);
begin
    -- Get balance of source account
    select balance into rem_balance from bank_accounts where account_id = src_account for update;

    -- Check for sufficient balance
    if rem_balance < amount then
        raise_application_error(-20001, 'Insufficient funds in the source account.');
    end if;

    -- Deduct from source
    update bank_accounts set balance = balance - amount where account_id = src_account;

    -- Add to target
    update bank_accounts set balance = balance + amount where account_id = dest_account;

    commit;

    dbms_output.put_line('Transferred $' || amount || ' from account ' || src_account || ' to account ' || dest_account);
end;