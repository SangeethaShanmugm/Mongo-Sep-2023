db.restaurant.find().pretty()

db.restaurant.find({condition}, {projection})


db.restaurant.find({cost: { $gt:500}}).pretty()

# projection

>> inclusion => 1

db.restaurant.find({cost: { $gt:500}}, {restaurant_name: 1, average_rating: 1, cost:1 }).pretty()

//ignore _id

db.restaurant.find({cost: { $gt:500}}, {_id: 0, restaurant_name: 1, average_rating: 1, cost:1 }).pretty()


>> exclusion => 0

db.restaurant.find({cost: { $gt:500}}, {restaurant_name: 0, average_rating: 0, cost: 0 }).pretty()

# count
db.restaurant.count()

db.restaurant.find({"state_id": 2}, {restaurant_name: 1,state_id: 1, cost:1 }).pretty()


db.restaurant.find({"state_id": 2}).count()

//gt & lt
db.restaurant.find({cost: {$lt:500}}, {restaurant_name: 1,cost:1}).pretty()

db.restaurant.find({cost: {$gt: 500,$lt:800}}, {restaurant_name: 1,cost:1}).pretty()

// or || and

db.restaurant.find(
    { $or: [{cost: {$gt: 500,$lt:800}}, {cost: {$gt: 700,$lt:1000}}]}, 
    {restaurant_name: 1,cost:1}
    ).pretty()


// in & nin

db.restaurant.find(
    {"mealTypes.mealtype_name": {$in: ["Breakfast", "Lunch", "Dinner"]} }, 
    {restaurant_name: 1, mealTypes:1, cost:1}
    ).pretty()


db.restaurant.find(
    {"mealTypes.mealtype_name": {$nin: ["Breakfast", "Lunch", "Dinner"]} }, 
    {restaurant_name: 1, mealTypes:1, cost:1}
    ).pretty()


//and

db.restaurant.find(
    { $and: [{"mealTypes.mealtype_id": 4}, {"mealTypes.mealtype_id": 5}]}, 
    {restaurant_name: 1,mealTypes:1}
    ).pretty()


//sort 
//asc = 1
db.restaurant.find({}, {restaurant_name: 1,cost:1}).sort({cost: 1}).pretty()


//desc = -1

db.restaurant.find({}, {restaurant_name: 1,cost:1}).sort({cost: -1}).pretty()


db.restaurant.find({}, {restaurant_name: 1,cost:1}).sort({restaurant_name: -1}).pretty()

//limit

db.restaurant.find({}, {restaurant_name: 1,cost:1}).sort({restaurant_name: -1}).limit(5).pretty()

//skip

db.restaurant.find({}, {restaurant_name: 1,cost:1}).sort({restaurant_name: -1}).limit(5).skip(5).pretty()


//update => put /patch
//upsert => update + insert

db.hotels.find().pretty()

db.collection.update(
    <condition>
    <what you want to update>
)

db.hotels.update(
    {_id:"2"}, 
    {
        $set: {
            cost: "5000"
        }
    }
)

db.hotels.find({_id:"2"}).pretty()


db.hotels.update(
    {_id:"2"}, 
    {
        $set: {
            "type.1.name": "Premium Rooms"
        }
    }
)

db.hotels.find({"type.name":"Premiere Rooms"}).count()

db.hotels.update(
    {"type.name":"Premiere Rooms"}, 
    {
        $set: {
            "type.$.name": "Premium Rooms"
        }
    },
    {
        multi: true
    }
)
