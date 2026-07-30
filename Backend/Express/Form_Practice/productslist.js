const productList = require("../Products_Practice/products");

const app = express();
app.use(express.json());
app.get("/products", (req, res) => {
    res.status(200).json(productList)
});
app.get("/products/:id", (req, res) => {
    const singleItem = productList.filter((item) => item.id === req.params.id);
    res.status(200).json(singleItem);
});
app.delete("/products/:id", (req, res) => {
    const newList = productList.filter((item) => item.id !== Number(req.params.id))
    res.status(200).json(newList);
})