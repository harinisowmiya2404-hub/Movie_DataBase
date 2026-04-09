db.createCollection("movies", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "genre", "rating", "releaseYear"],
      properties: {
        title: {
          bsonType: "string",
          description: "must be a string and is required"
        },
        genre: {
          bsonType: "string",
          description: "must be a string"
        },
        rating: {
          bsonType: "double",
          minimum: 1,
          maximum: 10,
          description: "must be between 1 and 10"
        },
        releaseYear: {
          bsonType: "int",
          minimum: 1900,
          maximum: 2026
        }
      }
    }
  }
})


db.movies.insertOne({
  title: "Leo",
  genre: "Action",
  rating: 8.5,
  releaseYear: 2023
})


db.movies.insertMany([
  { title: "Jailer", genre: "Action", rating: 7.8, releaseYear: 2023 },
  { title: "Master", genre: "Action", rating: 8.1, releaseYear: 2021 },
  { title: "Vikram", genre: "Thriller", rating: 8.9, releaseYear: 2022 }
])


db.movies.find()

db.movies.findOne({ title: "Leo" })

db.movies.find({ rating: { $gt: 8 } }) 

db.movies.find({ genre: "Action" })

db.movies.find({
  genre: "Action",
  rating: { $gt: 8 }
})

db.movies.updateOne({ title: "Leo" }, { $set: { rating: 9.0 } })

db.movies.updateOne(
  { title: "Jailer" },
  { $set: { rating: 8.2 } }
)

db.movies.updateMany(
  { genre: "Action" },
  { $set: { status: "Popular" } }
)

db.movies.updateOne(
  { title: "Leo" },
  { $set: { language: "Tamil" } }
)

db.movies.deleteMany({ genre: "Action" })

db.movies.deleteOne({ title: "Master" })

db.movies.find().pretty()

db.movies.countDocuments()

db.movies.insertOne({
  title: "Test",
  genre: "Drama",
  rating: 15, // ❌ invalid
  releaseYear: 2020
})

