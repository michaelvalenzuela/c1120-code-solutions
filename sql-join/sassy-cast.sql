SELECT "a"."firstName", "a"."lastName"
FROM "castMembers"
JOIN "actors" as "a" using("actorId")
JOIN  "films" as "f" using("filmId")
WHERE "f"."title" = 'Jersey Sassy';
