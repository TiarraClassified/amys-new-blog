update blogs
set ("background", "content", "title") = ($1,$2, $3)
where "id" = $4 
returning *;