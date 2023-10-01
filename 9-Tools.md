

mongoexport --db movies --collection movieList --type=json --out  A:\MongoDB\data\movieList.json 
  
mongoexport --db movies --collection movieList --type=csv --fields _id,name,poster  --out  A:\MongoDB\data\movieList.csv 
  
mongoimport --db movietestdb --collection movieList --file A:\MongoDB\data\movieList.json 
 



mongoexport --db movies --collection movieList --type=json --out  A:\MongoDB\data1\movieList.json 

mongoimport --db movieData --collection movieList --file A:\MongoDB\data1\movieList.json 


mongodump -o A:\MongoDB\data

mongodump -o A:\MongoDB\data1 --db movieData -c movieList


mongorestore --db movieData A:\MongoDB\data1

db.statsData.insertMany([
    {
       
        "name" : "Iron man 2",
        "poster" : "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
        "rating" : 7,
        "summary" : "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
},
{
       
        "name" : "RRR",
        "poster" : "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
        "rating" : 8.8,
        "summary" : "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
},
{
        
        "name" : "Jai Bhim",
        "poster" : "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
        "summary" : "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
        "rating" : 8.8
}
])