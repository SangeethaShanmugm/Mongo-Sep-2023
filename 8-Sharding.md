Sharding => horizontal scaling

## hash sharding

if shard have an empty collection => creates a two empty chunks/shard
hashed index
sharding => \_id

## ranged sharding

minkey ..... maxkey

document => \_id => counter increment => shard key

balancer => background processor
=> monitor no of chunks /shard

## administrating sharding cluster

4 steps => view shard, add shard, migrate, add|remove replicate sets

1 -> 3 shards ( 3 directories to store datafiles)
2 -> 3 config server ( 3 directories to store datafiles)
3 -> 1 query router(MONGOS)

## windows

//Shards

mkdir/shard1
mkdir/shard2
mkdir/shard3

mongod --shardsvr --port 2001 --replSet rs0 --dbpath \mongoReplica\shard1

mongod --shardsvr --port 2002 --replSet rs0 --dbpath \mongoReplica\shard2

mongod --shardsvr --port 2003 --replSet rs0 --dbpath \mongoReplica\shard3

mongod --shardsvr --port 2004 --replSet rs0 --dbpath \mongoReplica\shard4

## config server

mkdir/config1
mkdir/config2
mkdir/config3

mongod --configsvr --port 2011 --replSet rs0 --dbpath /mongoReplica/config1

mongod --configsvr --port 2012 --replSet rs0 --dbpath /mongoReplica/config2

mongod --configsvr --port 2013 --replSet rs0 --dbpath /mongoReplica/config3

//run shard

mongo --port 2001

//run our config server

rs.initiate({
_id: "rs0",
members:[
{ _id:0, host:"localhost:2011"},
{ _id:1, host:"localhost:2012"},
{ _id:2, host:"localhost:2013"},
]
})

//working commands

//Shards
mongod --shardsvr --port 2001 --replSet rs1 --dbpath \data\shard1

mongod --shardsvr --port 2002 --replSet rs1 --dbpath \data\shard2

mongod --shardsvr --port 2003 --replSet rs1 --dbpath \data\shard3

mongod --shardsvr --port 2004 --replSet rs1 --dbpath \data\shard4

//Config server

mongod --configsvr --dbpath /data/config1 --port 2011 --replSet rs0

mongod --configsvr --dbpath /data/config2 --port 2012 --replSet rs0

mongod --configsvr --dbpath /data/config3 --port 2013 --replSet rs0

rs.initiate(

{

    _id: "rs0",

      members: [

      { _id : 0, host : "localhost:2011" },

      { _id : 1, host : "localhost:2012" },

      { _id : 2, host : "localhost:2013" }

    ]

}
)

//New Cmd => query router
mongos --configdb "rs0/localhost:2011,localhost:2012,localhost:2013" --logpath log.mongos0 --port 27200

mongos --configdb "rs0/localhost:2011,localhost:2012,localhost:2013" --port 27200

//Connection to mongos
mongo --port 27200

//Add shards
sh.addShard( "rs1/localhost:2001")
sh.addShard( "rs1/localhost:2002")
sh.addShard( "rs1/localhost:2003")

sh.addShard( "rs1/localhost:2001,rs1/localhost:2002, rs1/localhost:2003")
s
show dbs
use config
show collections
db.shards.find()

use mongoMart1

sh.enableSharding("mongoMart1")

sh.shardCollection("mongoMart1.shop",{"_id":"hashed"} )

for(var i =1;i<=20;i++) db.shop.insert({x: i})

db.shop.find().pretty()








////Adding replica in shard

sudo mongod --port 2001 --dbpath /data/rs1 --replSet --shardA --oplogSize 128
sudo mongod --port 2002 --dbpath /data/rs2 --replSet --shardA --oplogSize 128
sudo mongod --port 2003 --dbpath /data/rs3 --replSet --shardA --oplogSize 128

sudo mongod --port 2004 --dbpath Desktop/Replica/rs1 --replSet --shardB --oplogSize 128
sudo mongod --port 2005 --dbpath Desktop/Replica/rs2 --replSet --shardB --oplogSize 128
sudo mongod --port 2006 --dbpath Desktop/Replica/rs3 --replSet --shardB --oplogSize 128

sudo mongod --port 2007 --dbpath Desktop/Replica/rs1 --replSet --shardC --oplogSize 128
sudo mongod --port 2008 --dbpath Desktop/Replica/rs2 --replSet --shardC --oplogSize 128
sudo mongod --port 2009 --dbpath Desktop/Replica/rs3 --replSet --shardC --oplogSize 128

sudo mongod --shardsvr --dbpath Desktop/shard/shard1 --replSet shardA --port 3001

sudo mongod --shardsvr --dbpath Desktop/shard/shard2 --replSet shardB --port 3002

sudo mongod --shardsvr --dbpath Desktop/shard/shard3 --replSet shardC -port 3003
