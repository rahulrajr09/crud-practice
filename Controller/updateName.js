import model from "../Model/bookModel.js";

export default async function updateNameRoute(req,res) {
    try {
        const name = req.query.name;
        const newName = req.query.newName;
        await model.findOneAndUpdate({name : name}, {
            name : newName
        })
        res.send("Successful")
    } catch {
        console.error();
    }
}
