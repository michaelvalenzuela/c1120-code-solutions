SELECT "c"."firstName", "c"."lastName", sum("amount") as "totalPaid"
FROM "payments"
JOIN "customers" as "c" using("customerId")
GROUP BY ("customerId")
ORDER BY "totalPaid" desc;
