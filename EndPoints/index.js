/**
 *  REST API 
 */
const express = require('express');
const router = new express.Router();
// const local_connection = require('../../database/mysql')
const { basicAuth } = require('../middlewares/index')


module.exports = () => {

   
    router.get('/add',basicAuth, async (req, res) => {
           res.json({message:"this is for adding"})
    });

    return router;

};