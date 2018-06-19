insert into admincreds (username, password)
values ($1, $2)
returning *;