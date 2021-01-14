WITH film_spent AS (
  SELECT "f"."filmId", "f"."title", sum("f"."replacementCost") as "spent"
  FROM "inventory" as "i"
  JOIN "films" as "f" using("filmId")
  GROUP BY "f"."filmId", "f"."title"
),
film_earned AS (
  SELECT "f"."filmId","f"."title", sum("p"."amount") AS "earned"
  FROM "payments" as "p"
  JOIN "rentals" as "r" using("rentalId")
  JOIN "inventory" as "i" using("inventoryId")
  JOIN "films" as "f" using("filmId")
  GROUP BY "f"."filmId", "f"."title"
)
SELECT "f"."filmId", "f"."title", "fe"."earned"-"fs"."spent" as "netGain"
FROM "films" as "f"
JOIN "film_earned" as "fe" using("filmId")
JOIN "film_spent" as "fs" using("filmId")
ORDER BY "netGain" desc
LIMIT 5;
