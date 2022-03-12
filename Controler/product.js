const products = [
    {id: 1, name: "Products A"},
    {id: 2, name: "Products B"}
];

export const list = (req, res) => {
    res.josn(products);
}

export const read = (req, res) => {
    res.josn(products.find(item => item.id === +req.params.id));
}

export const create = (req, res) => {
    const product = req.body;
    res.josn(product);
}

export const remove = (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id));
}

export const update = (req, res) => {
    res.josn(products.map(item => item.id == +req.params.id ? req.body : item));
}