const express = require('express');
const router = express.Router();

const controllers = require('../controllers/index');


router.post('/sample', controllers.sampleController);
router.get('/collections', controllers.collectionController);

module.exports=router;