SELECT "c"."firstName", "c"."lastName"
FROM "rentals"
JOIN "inventory" as "i" using("inventoryId")
JOIN "customers" as "c" using("customerId")
JOIN "films" as "f" using("filmId")
WHERE "f"."title" = 'Magic Mallrats';
