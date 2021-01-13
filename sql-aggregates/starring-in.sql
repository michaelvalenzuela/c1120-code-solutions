SELECT "c"."name", COUNT(*) as "totalFilms"
FROM "castMembers"
JOIN "actors" as "a" using("actorId")
JOIN "films" as "f" using("filmId")
JOIN "filmCategory" as "fc" using("filmId")
JOIN "categories" as "c" using("categoryId")
WHERE "a"."firstName" = 'Lisa' and "a"."lastName" = 'Monroe'
GROUP BY "c"."name";
