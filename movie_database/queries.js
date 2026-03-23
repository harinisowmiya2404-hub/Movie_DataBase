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

// Insert single document
db.movies.insertOne({
  title: "Leo",
  genre: "Action",
  rating: 8.5,
  releaseYear: 2023
})

// Insert multiple documents
db.movies.insertMany([
  { title: "Jailer", genre: "Action", rating: 7.8, releaseYear: 2023 },
  { title: "Master", genre: "Action", rating: 8.1, releaseYear: 2021 },
  { title: "Vikram", genre: "Thriller", rating: 8.9, releaseYear: 2022 }
])

// Find all movies
db.movies.find()
// Find movies with rating greater than 8
db.movies.find({ rating: { $gt: 8 } }) 

//Find movies with genre = Action
db.movies.find({ genre: "Action" })

//Update Rating
db.movies.updateOne({ title: "Leo" }, { $set: { rating: 9.0 } })

// Delete One Movie
db.movies.deleteOne({ title: "Master" })

// Verify / Validation Check
db.movies.insertOne({
  title: "Test",
  genre: "Drama",
  rating: 15, // ❌ invalid
  releaseYear: 2020
})

