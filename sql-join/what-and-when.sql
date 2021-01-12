SELECT "f"."releaseYear", "c"."name"
FROM "filmCategory"
JOIN "films" as "f" using("filmId")
JOIN "categories" as "c" using("categoryId")
WHERE "f"."title" = 'Boogie Amelie';
