/**
 *  REST API 
 */
const express = require('express');
const router = new express.Router();
// const local_connection = require('../../database/mysql')
// const db = require('../Database/index')
const mongoose = require("mongoose");
const notes = require('../models/Notes')

//database setting
mongoose.connect('mongodb+srv://aframson:salvation@cluster0.gvs6c6d.mongodb.net/kwameai', { useNewUrlParser: true }).then(() => {
    console.log('connected')
}).catch(err => {
    console.log(err)
})

module.exports = () => {

    router.post('/add', async (req, res) => {
        try {
            const { title, body } = req.body

            const newNotes = await notes.create({
                title,
                body,
            })
            res.json({status:true,data:newNotes})

        } catch (error) {
            res.json(error)
        }


    });

    router.get('/fetch', async (req, res) => {
        try {
            const newNotes = await notes.find().sort([['updatedAt', 'descending']])

            res.json(newNotes)
            

        } catch (error) {
            res.json(error)
        }

    });

    //delete posts
    router.get('/delete/:id', async (req, res) => {
        const { id } = req.params
        try {
            const post = await notes.findByIdAndDelete(id)
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    })

    //update posts
    router.post('/update', async (req, res,next) => {
        const { id , title,body} = req.body
        try {

            const post = await notes.findByIdAndUpdate(id,{title:title,body:body})
            res.status(200).json(post)
               
        } catch (error) { 
            res.status(500).json(error)
        }
    })
 



    return router;

};