exports.create = (req,res) => {
    res.send({ message: "create handler"});
};

exports.findOne = (req,res) => {
    res.send({ message: "findOne handler"});
};

exports.findAll = (req,res) => {
    res.send({ message: "findAll handler"});
};

exports.findAllFavorite = (req,res) => {
    res.send({ message: "findAllFavorite handler"});
};

exports.update = (req,res) => {
    res.send({ message: "update handler"});
};

exports.delete = (req,res) => {
    res.send({ message: "delete handler"});
};

exports.deleteAll = (req,res) => {
    res.send({ message: "deleteAll handler"});
};

