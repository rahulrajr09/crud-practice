import model from '../Model/bookModel.js';

export default async function addBookRoute(req,res) {
    const {name, description, cost} = req.body;
    console.log(name);
    try {
        const book = await model.create({
            name : name,
            description : description,
            cost : cost
        })
        console.log(book)
        res.send("Successful");
    } catch(err) {
        res.send("Error while adding book! Try again");
        console.log(err);
    }
}