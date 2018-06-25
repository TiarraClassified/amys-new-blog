update blogs
set ("background", "content") = ($1,$2)
where "id" = $3 
returning *;