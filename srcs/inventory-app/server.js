const express = require("express")
const {Sequelize} = require("sequelize")
const app = express();
const port = 5000

const routes = require("./app/routes/Routes")
const sequelize = new Sequelize('postgres://postgres:abcd1234@localhost:5432/postgres')

app.use("/api/movies", routes)

app.listen(port, async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
    console.log(`Server is running on port: ${port}`)
})
   

