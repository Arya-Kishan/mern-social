const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Arya:Arya12345mongO@arya.z2dlxqw.mongodb.net/?retryWrites=true&w=majority&appName=Arya')
    .then(() => {
        console.log("CONNECTED TO CLOUD MONGO DB");
    })
    .catch((err) => {
        console.log("ERROR IN CONNECTING MONGO DB");
        console.log(err);
    })



    // mongodb+srv://arya12345kishan:Arya12345mongO@myecommerce.jtfts4p.mongodb.net/my-mern-ecommerce

    // mongodb+srv://Arya:Arya12345mongO@arya.z2dlxqw.mongodb.net/