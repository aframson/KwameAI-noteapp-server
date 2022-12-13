/**
 *  REST API 
 */
const express = require('express');
const router = new express.Router();
// const local_connection = require('../../database/mysql')
const { basicAuth } = require('../middlewares/index')
const connection = require('../Database/index')

module.exports = () => {

    router.post('/add',basicAuth, async (req, res) => {

          const {title,body,date,update} = req.body

           const query = `INSERT INTO notes (title,body,date,dateUpdate) VALUES ('${title}','${body}','${date}','${update}')`
   
           connection.query(query, function (error, results) {
               if (error) {
                   res.status(404).json({
                    status:false,
                    error:error
                })
               } else {
                   res.status(200).json({
                       status:true,
                       message: "Data inserted successfully",
                       data:results
                   })
               }
           });
    });

    return router;

};