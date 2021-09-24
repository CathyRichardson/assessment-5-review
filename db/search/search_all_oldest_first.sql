SELECT helo_posts.id AS post_id, title, content, img, profile_pic, date_created, username as author_username from helo_posts
JOIN helo_users ON post_id = helo_users.id
WHERE title ILIKE $1
ORDER BY date_created ASC;