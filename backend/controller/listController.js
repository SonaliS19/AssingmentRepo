const ListModel = require("../model/listSchema");

const saveList = async (req, res) => {
    
    const { name, id, items } = req.body;

    const list = await ListModel.create({
        name,
        id,
        items,
    });

    res.status(200).json({
        status: "success",
        data: {
            list,
        },
    });
};

const fetchList = async (req, res) => {
    const { id } = req.body;
    // find all the lists where id value is equal to `id`
    const list = await ListModel.find({ id });

    if (list.length === 0 || list === null || list === undefined) {
        res.status(404).json({
            status: "fail",
            message: "List not found",
            data: {},
        });
        return;
    }

    res.status(200).json({
        status: "success",
        list,
    });
};

const deleteList = async (req, res) => {
    const { id } = req.body;
    const list = await ListModel.findOneAndDelete({ _id: id });

    if (!list) {
        res.status(404).json({
            status: "fail",
            message: "List not found",
            data: {},
        });
        return;
    }

    res.status(200).json({ status: "success", data: {} });
};

const updateList = async (req, res) => {
    const { id, name } = req.body;
    const list = await ListModel.findOneAndUpdate({ _id: id }, { name });

    if (!list) {
        res.status(404).json({
            status: "fail",
            message: "List not found",
            data: {},
        });
        return;
    }

    res.status(200).json({ status: "success", data: {} });
};


module.exports = { saveList, fetchList, deleteList, updateList };
