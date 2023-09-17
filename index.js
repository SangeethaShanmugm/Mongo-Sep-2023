db.students.aggregate([
    {
        $group: {
            _id: "$sec",
            total_st: { $sum: 1 },
            maxage: { $max: "$age" }

        }
    }
])