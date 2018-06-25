insert into blogs(background, content, title, date)
values ($1,$2,$3, $4)
returning *;