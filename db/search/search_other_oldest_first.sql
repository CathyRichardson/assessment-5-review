SELECT p.id AS post_id, title, content, img, profile_pic, date_created, username as author_username from helo_posts p
JOIN helo_users u ON post_id = u.id
WHERE title ILIKE $1 AND u.id != $2
ORDER BY date_created ASC;