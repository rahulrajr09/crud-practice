import model from '../Model/bookModel.js'

async function getBooksRoute (req,res) {
    try {
        const result = await model.aggregate([{$group : {_id : "$name" , TotalCost: { $sum: "$cost" }}}])
        console.log(result);
        res.send(result);
    } catch (err) {
        res.send("Error occurred! Retry");
        console.log(err);
    }
}


async function getBookByNameRoute(req,res) {
    const name = req.params.name;
    const book = await model.find({name : name})
    const description = book[0].description;
    res.send(description);
}

export {getBooksRoute, getBookByNameRoute};