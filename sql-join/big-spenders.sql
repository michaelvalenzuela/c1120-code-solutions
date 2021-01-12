SELECT "c"."firstName", "c"."lastName", "p"."amount"
FROM "payments" as "p"
JOIN "customers" as "c" using ("customerId")
ORDER BY "amount" desc
limit 10;
