// const express = require('express')
// const { MongoClient } = require('mongodb');
import express from "express"
import { MongoClient } from "mongodb"
import * as dotenv from 'dotenv'
const PORT = 5000
const app = express()
dotenv.config()

// const students = [
//     {
//         "name": "Tony",
//         "age": 17,
//         "id": 1,
//         "sec": "A",
//         "subject": [
//             "Physics",
//             "Math"
//         ]
//     },
//     {
//         "name": "Steave",
//         "age": 37,
//         "id": 2,
//         "sec": "A"
//     },
//     {
//         "name": "Natasha",
//         "age": 17,
//         "id": 3,
//         "sec": "B",
//         "subject": [
//             "Physics",
//             "English"
//         ]
//     },
//     {
//         "name": "Bruce",
//         "age": 21,
//         "id": 4,
//         "sec": "B",
//         "subject": [
//             "Physics",
//             "English",
//             "Biology",
//             "Chemsitry"
//         ]
//     },
//     {
//         "name": "Nick",
//         "age": 40,
//         "id": 5,
//         "sec": "B",
//         "subject": [
//             "English"
//         ]
//     },
//     {
//         "name": "Groot",
//         "age": 14,
//         "id": 6,
//         "sec": "A",
//         "subject": [
//             "English"
//         ]
//     },
//     {
//         "name": "Thanos",
//         "age": 14,
//         "id": 7,
//         "sec": "A",
//         "subject": [
//             "English",
//             "Physics",
//             "Math"
//         ]
//     }

// ]

//mongodb connection 

const MONGO_URL = process.env.MONGO_URL
//"mongodb://127.0.0.1:27017"
//"mongodb://localhost:27017"

async function createConnection() {
    const client = new MongoClient(MONGO_URL)
    await client.connect()
    console.log("MongoDB is connected")
    return client;
}

const client = await createConnection()

//req => what we send to server
//res => what we receive from server
app.get('/', (req, res) => {
    res.send('Hello Everyone😀😀😀')
})

app.get('/students', async (req, res) => {
    const result = await client.db("ED-Sep-Mongo").collection("students").find().toArray()
    res.send(result)
})



app.listen(PORT, () => console.log("The server started on the PORT", PORT))