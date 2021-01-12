SELECT "a"."line1", "c"."name", "a"."district", "co"."name"
FROM "addresses" as "a"
JOIN "cities" as "c" using("cityId")
JOIN "countries" as "co" using("countryId");
