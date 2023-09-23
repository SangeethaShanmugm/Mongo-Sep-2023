Index => used when your having more amount of data
_id => default index
Quick Search
index make your app query faster

Types
-----

default index => _id
hashed index => hashed set for sharding 
text index => search based on text
geospatial index => location, position
single Field index => single index, sort operations
compound index => mutiple fields
multi-key index => array data 
sparse index => make sure that the key over the index is unique

properties of index
--------------------

TTL index => Total time to live  => used to delete documents in mongodb automatically after a specified amount of time
unique index => ensure duplicate values of index field
sparse index  => ensures that search for document having indexed field 

create index
------------

db.collection.createIndex()

db.emp.insert(
    {
        emp_id:1001,
        firstname: "Ankur",
        lastname:"Das",
        email:"ankur@gmail.com",
        phone:865486797,
        Job_id: "E3",
        sal:"80000",
        manager_id:"102"
    }
)

db.emp.insert(
    {
        emp_id:1002,
        firstname: "Gopal",
        lastname:"Patil",
        email:"gopal@gmail.com",
        phone:894486797,
        Job_id: "E4",
        sal:"90000",
        manager_id:"103"
    }
)


db.emp.insert(
    {
        emp_id:1003,
        firstname: "Janilal",
        lastname:"Oad",
        email:"janilal@gmail.com",
        phone:865486797,
        Job_id: "E5",
        sal:"70000",
        manager_id:"104"
    }
)

db.emp.insert(
    {
        emp_id:1004,
        firstname: "Mohd",
        lastname:"Sahir",
        email:"Mohd@gmail.com",
        phone:865486797,
        Job_id: "E5",
        sal:"80000",
        manager_id:"105"
    }
)

db.emp.createIndex({"Job_id": 1})

db.emp.dropIndex({"Job_id": 1})

db.emp.dropIndexes()

hashed index
-------------

hashed index support hashed sharding  => shard key 

db.emp.createIndex({"Job_id":"hashed"})


text index
---------------

db.article.insert(
    [
        { "text":"indians with cricket", "tags":["indians", "cricket"]  },
         { "text":"economy of india", "tags":["economy", "india"]  },
          { "text":"nature and beauty of himalays", "tags":["himalays", "nature"]  },
           { "text":"beauty of india", "tags":["beauty", "india"]  },
          
    ]
)

db.article.createIndex({text:"text" })


db.article.getIndexes()


db.article.find({$text:{$search:"india"} }) => exact match



db.article.find({tags:{$regex:"ind"} }).pretty() => based on the letter char we have given,if it exist in the record , start, middle and end  

db.article.find({tags:{$regex:"h"} }).pretty()

db.emp.reIndex({"Job_id":1})


db.blog.insertMany( [
   {
     _id: 1,
     content: "This morning I had a cup of coffee.",
     about: "beverage",
     keywords: [ "coffee" ]
   },
   {
     _id: 2,
     content: "Who likes chocolate ice cream for dessert?",
     about: "food",
     keywords: [ "poll" ]
   },
   {
     _id: 3,
     content: "My favorite flavors are strawberry and coffee",
     about: "ice cream",
     keywords: [ "food", "dessert" ]
   }
] )

db.blog.createIndex({keywords:"text"})

db.blog.find( {$text:{$search:"coffee"}})

db.blog.createIndex({content:"text", about:"text"})


db.blog.dropIndex("keywords_text")

db.blog.getIndexes()

db.blog.find({ $text:{$search:"food"}})



db.quotes.insertMany( [
   {
      _id: 1,
      quote : "La suerte protege a los audaces."
   },
   {
      _id: 2,
      quote: "Nada hay más surrealista que la realidad."
   },
   {
      _id: 3,
      quote: "Es este un puñal que veo delante de mí?"
   },
   {
      _id: 4,
      quote: "Nunca dejes que la realidad te estropee una buena historia."
   }
] )

db.quotes.getIndexes()

db.quotes.createIndex(
   { quote: "text" },
   { default_language: "spanish" }
)


db.quotes.find({ $text:{$search:"suerte"}})

db.quotes.find({ $text:{$search:"spanish"}})


TTL
-----

db.emp.createIndex({manager_id:1}, {expireAfterSeconds: 3600})


db.quotes.createIndex({ _id_1:1},{expireAfterSeconds:60})


db.quotes.createIndex({ _id_1:1},{background: true})


Geospatial indexes
--------------------

db.places.insert({name: "mobile", "type":"elec", location:[40.232, -74.344]})

db.places.insert({name: "tv", "type":"elec", location:[50.232, -84.345]})

db.places.insert({name: "cloths", "type":"cloths", location:[60.232, -94.343]})

//html  => navigator.geolocation.getCurrentPosition()

db.places.createIndex({location:"2d", type:1})

db.places.getIndexes()


db.places.find({location: { $near: [40, -34]}})
db.places.find({location: { $near: [70, -64], $maxDistance:0.10}})

db.places.find({location:{ $geoWithin:{$center:[ [-74, 40.74], 10]}}})

db.shops.createIndex({location:"2dsphere"})

//90 km
db.shops.find({
    location:{$near: {$geometry:{type:"Point",coordinates:[100, 56] }, $maxDistance: 9000000}} 
}).pretty()

db.shops.find({name:"Boardwalk Social"})