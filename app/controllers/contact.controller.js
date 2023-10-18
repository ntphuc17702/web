const ApiError = require("../api-error");
const ContactService = require("../services/contact.service");

exports.create = async (req,res,next)=>{
    if(!req.body?.name){
        return next(new ApiError(400,"name can not be emty"))
    }

    try{
        const ContactService = ContactService(MongoDB.client);
        const document = await ContactService.create(req)
        return document
    }catch(error){
        
    }
};

exports.findAll = (req,res)=>{
    res.send({message: "findAll handler"})
};

exports.findOne = (req,res)=>{
    res.send({message: "findOne handler"})
}

exports.update = (req,res)=>{
    res.send({message: "create handler"})
}

exports.delete = (req,res)=>{
    res.send({message: "delete handler"})
}

exports.deleteAll = (req,res)=>{
    res.send({message: "deleteAll handler"})
}

exports.findAllFavorite = (req,res)=>{
    res.send({message: "findAllFavorite handler"})
}

