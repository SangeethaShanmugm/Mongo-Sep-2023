
$match 
> It is used for filtering documents(condition)
$project
> It will select some specific fields from a collection
$group
> It is used to group documents on basis of some values 
$sort
> Its used to sort data 
$skip
> skip number of documents
$limit
> To retrieve number of documents
$unwind
> Deconstructs an array, like flat the array
$out
> It is to write the document output

Accumulator
------------
sum
count
avg
min
max
first
last

db.students.find().pretty()

db.students.aggregate([
    {
        $match:{"sec" : "A"}
    },
    {
        $count: "Total Number of students in Sec A"
    }
])

//group

db.students.aggregate([
    {
        $group:{
            _id:"$sec",
            total_st:{$sum:1},
            max_age:{$max:"$age"}
           
            }
    }    
])

_id: A, total_st: 4, max-age: 37
_id: B, total_st: 3, max-age: 40


{ "_id" : "B", "total_st" : 3, "max_age" : 40 }
{ "_id" : "A", "total_st" : 4, "max_age" : 37 }


db.students.aggregate([
    {
        $match:{age: {$gt:30}}
    }
])

db.students.aggregate([
    {
        $sort:{age: 1}
    }
])


/////////
db.students.aggregate([
    {
        $match:{sec: "B"}
    },
    {
        $sort:{age: -1}
    },
    {
        $limit:2
    }
])


db.students.aggregate([
    {
        $match:{sec: "B"}
    },
    {
        $sort:{age: -1}
    }   
])


db.students.aggregate([
    {
        $unwind:"$subject"
    }     
])




///////

db.employees.find().pretty()

db.employees.aggregate([
    {
        $match:{"gender" : "female"}
    }     
])


db.employees.aggregate([
    {
        $group:{
            _id:"$department.name",
            totalEmp:{$sum:1}
        }
    }     
])



db.employees.aggregate([
     {
        $match:{"gender" : "male"}
    },  
    {
        $group:{
            _id:"$department.name",
            totalEmp:{$sum:1},
        }
    }     
])


//avg salary 

db.employees.aggregate([
     {
        $match:{"gender" : "male"}
    },  
    {
        $group:{
            _id:"$department.name",
            totalEmp:{$sum:1},
            totalSalary:{$avg: "$salary"}
        }
    }     
])


//sort based on department

db.employees.aggregate([
     {
        $match:{"gender" : "male"}
    },  
    {
        $group:{
            _id:"$department.name",
            totalEmp:{$sum:1},
            totalSalary:{$avg: "$salary"}
        }
    } ,
    {
        $sort: {"_id":1}
      }
])


db.products.insertMany([
  { _id: 0, productName: "Steel Beam", status: "new", quantity: 10 },
  { _id: 1, productName: "Steel Beam", status: "urgent", quantity: 20 },
  { _id: 2, productName: "Steel Beam", status: "urgent", quantity: 30 },
  { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
  { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
  { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 },
]);

db.products.find().pretty()

//Select sum(quantity) from products where status= "urgent"
//group by productName

//Stage 1
db.products.aggregate([
    {
        $match:{status: "urgent"}
    }
])

//Stage - 2
// $group. $sum

db.products.aggregate([
    {
        $match:{status: "urgent"}
    },
    {
        $group:{
            _id:"$productName",
            totalUrgentQuantity: { $sum: "$quantity"}
        }
    }
])
