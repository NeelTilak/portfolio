const express = require("express")

const cors = require("cors")

const dotenv = require("dotenv")
dotenv.config()

const app = express()

// middleware
app.use(cors())
app.use(express.json())

//static files
app.use(express.static(path.join(--__dirname, './client/build/index.html')))


app.get('*', (req,res)=>{
    res.sendFile(path.join)
})
//route
app.use('/api/v1/portfolio/',require('./routes/portfolioRoute'))
//port
const PORT = process.env.PORT || 8080

//listen

app.listen(PORT,() =>{
    console.log(`server is running on ${PORT}`)
})