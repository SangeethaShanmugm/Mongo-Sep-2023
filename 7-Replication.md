Scaling
-----------

>> Horizontal Scaling -> adding more machines
>> Vertical Scaling -> adding more memory of RAm

replication  => repeating same data in machines


1 primary - 2 secondary 

//Mac/linux

mongod --dbpath  /System/Volumes/Data/data.db

mkdir data/rs1
mkdir data/rs2
mkdir data/rs3

mongod --port 2001 --dbpath c:\data\rs1 --replSet --sangeetha --oplogSize 128

mongod --port 2002 --dbpath c:\data\rs2 --replSet --sangeetha --oplogSize 128

mongod --port 2003 --dbpath c:\data\rs3 --replSet --sangeetha --oplogSize 128

mongo --port 2001

mongo --port 2002

mongo --port 2003

/this we should run in primary 

rs.help()
rs.status()
rs.initiate()
rs.add("127.0.0.1:2002)


//windows

mkdir data/rs1
mkdir data/rs2
mkdir data/rs3


mongod --port 2001 --dbpath c:\data\rs1 --replSet --sangeetha --oplogSize 128

mongod --port 2002 --dbpath c:\data\rs2 --replSet --sangeetha --oplogSize 128

mongod --port 2003 --dbpath c:\data\rs3 --replSet --sangeetha --oplogSize 128


mongo --port 2001

mongo --port 2002

mongo --port 2003

mongod --port 2001 --dbpath /data/rs1 --replSet --sangeetha --bind_ip 10.0


rs.status() => check status of rs
rs.initiate() => create a primary 
rs.add("127.0.0.1:2002")
rs.add("127.0.0.1:2003")


rs.add({ _id:4, host:"localhost:27017", priority: 1}) => add priority
rs.add({ _id:4, host:"localhost:27017", priority: 1, hidden: true})

rs.addArb("SANGEETHA:3001") => add arbiter
rs.remove() => remove any machine


/Run over secondary to allow replication 

db.getMongo().setSlaveOk() | db.getMongo().setSecondaryOk()


mongod --port 2001 --dbpath C:\mongoReplica\rs1 --replSet --sangeetha --oplogSize 128

mongod --port 2002 --dbpath C:\mongoReplica\rs2 --replSet --sangeetha --oplogSize 128

mongod --port 2003 --dbpath C:\mongoReplica\rs3 --replSet --sangeetha --oplogSize 128
