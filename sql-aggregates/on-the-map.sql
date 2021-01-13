SELECT "co"."name", COUNT(*) as "totalCities"
FROM "cities"
JOIN "countries" as "co" using ("countryId")
GROUP BY "co"."name";
