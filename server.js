const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 4501;
const Products = require('./modals/Product.modal')
const db = require('./modals')
/* const productController = require('./controllers/Product.controller') */
app.use(cors()) //app.use = middleware to prevent the cors error
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", '*'); //* = from any origin/domain we can make the request
    res.header("Access-Control-Allow-headers", "X-Requested-With")
})

/* const { MongoClient } = require('mongodb');
console.log(process.env.MONGODB_URI)
const db = new MongoClient(process.env.MONGODB_URI)
console.log(port) */

require('./Routes/Product.routes.js')(app)



//schema = layout = details
const connectToDB = () =>{
        db.mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true}).
        then(() => console.log("Connected to Mongo through connectToDB function")).
        catch((err) => console.log(err))

}
app.get("/test", (req,res)=>{
    console.log(req)
    res.send("success")
})

app.listen(port, () => {
    connectToDB()
    /* new Products({ name: "Sandhya", description : "B.Tech" }).save((res)=>{ console.log(res)}); */
    console.log(`server started on ${port}`)
    /* Products.remove({name:"Sandhya"}, (err)=>{
        if(err)
        console.log(err);
    }) */
})






