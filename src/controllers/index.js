const services = require('../services/index');
const {callService} = require('./callServices');

const sampleController = async(req,res) =>{
    callService(services.sampleService,req,res);
}

const collectionController = async(req,res) =>{
    callService(services.collectionService,req,res);
}

module.exports={
    sampleController,collectionController
}