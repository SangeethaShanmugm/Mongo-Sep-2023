db.createUser({ user:"testuser" , pwd:passwordPrompt(),
customData: { movieId: 78767} ,
roles: [{ role: "clusterAdmin", db:"admin"},
{ role: "readAnyDatabase", db:"admin"},
"readWrite" ] },
{ w: "majority" , wtimeout: 5000 }
)

-u testuser
-p 12345

db.createUser( { user: "accountAdmin01",
pwd: passwordPrompt(),
customData: { employeeId: 12345 },
roles: [ { role: "clusterAdmin", db: "admin" },
{ role: "readAnyDatabase", db: "admin" },
"readWrite"] },
{ w: "majority" , wtimeout: 5000 } )

db.getUsers()

db.dropUser("accountAdmin01", {w: "majority", wtimeout: 5000})
