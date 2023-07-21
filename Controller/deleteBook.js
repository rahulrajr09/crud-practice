import model from "../Model/bookModel.js";

export default async function deleteBookRoute(req,res) {
    try {
        const name = req.query.name;
        await model.deleteOne({name : name});
        res.send(`${name} is deleted successfully`);
    } catch(error) {
        console.error();
    }
}