const express = require('express')
const axios = require("axios");
require('dotenv').config()
const router = express.Router()
const pool=require('../db')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/login',async(req,res)=>{
    const {email,password} = req.body
    console.log("EMAIL",email,"PASSWORD",password)
    try{
        const db = await pool.connect()
        console.log("DB CONNECT")
        const result=await db.query('SELECT * FROM users WHERE email=$1', [email])
        console.log("LOGIN RESULT",result.rows[0])
            if (!result) {
                return res.status(400).json({ error: "error querying database" })
            }
            else {
                if (result.rows.length > 0) {
                    const user = result.rows[0]
                    const validPassword = await bcrypt.compare(password, user.password);
                    if (validPassword) {
                        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET,{expiresIn:'30m'})
                        res.json({
                            userId: user.id,
                            token: token
                        })
                    }
                    else {
                        return res.status(400).json({ error: "incorrect password" })
                    }
                }
                else {
                    return res.status(400).json({ error: "user does not exist" })
                }
            }
        }
        
    
    
    catch(err){
        console.log(err.message)
        pool.close()
    }
   
    }
)


router.post('/register',async(req,res)=>{
    const {name,email,password} = req.body
    const salt = await bcrypt.genSalt(10);
    const hash_password=await bcrypt.hash(password,salt)
    try{
        const db=await pool.connect()
        console.log("BEFORE QUERY")
        const result=await db.query('SELECT * FROM users WHERE email=$1',[email])
        console.log("AFTER QUERY",result)
        if(!result){
            return res.status(400).json({error:"error querying database"})
        }
        else{
            if(result.rows.length>0){
                return res.status(400).json({ error: "user already exists" })
            }
            else {
           
                const queryText = 'INSERT INTO users (id,name,email,password) VALUES ($1,$2,$3,$4)'
                const values = [uuidv4(),name, email, hash_password]
                const result=await db.query(queryText, values)
                    if (!result) {
                        return res.status(400).json({ error: "error creating user in database" })
                    }
                    else {
                        res.status(200).json({ message: "user created successfully" })
                    }
                
            }
        }
    }
    catch(err){
        console.log(err.message)
    }
        }
    )

router.post('/save-song',authMiddleware,async(req,res)=>{
    const {song_id,track_name,artist_name,userID, rating,genre} = req.body
    
    if (!song_id || !track_name || !artist_name || !userID || !rating.toString() || !genre) {
        return res.status(400).json({ error: "missing required fields" })
    }

    try{
        const db=await pool.connect()
        const queryText = 'INSERT INTO wishlist (id,userid,track_name,artist_name,genre,song_id, explicit) VALUES ($1,$2,$3,$4,$5,$6,$7)'
        const values = [uuidv4(), userID,track_name, artist_name,genre, song_id, Boolean(rating) ]
        const result=await db.query(queryText, values)
            if (!result) {
                return res.status(400).json({ error: "error creating song in database" })
            }
            else {
                res.status(200).json({ message: "song created successfully" })
            }
        
    }
    catch(err){
        console.log(err.message)
    }
        }
    )

router.get('/get-songs',authMiddleware,async(req,res)=>{
    const userID = req.userID

    try{
        const db=await pool.connect()
        const result=await db.query('SELECT * FROM wishlist WHERE userid=$1',[userID])
        console.log(result.rows)
            if (!result) {
                return res.status(400).json({ error: "error querying database" })
            }
            else {
                res.status(200).json(result.rows)
            }
        
    }
    catch(err){
        console.log(err.message)
    }

    }
)


router.get('/get-user',authMiddleware,async(req,res)=>{
    const userID = req.userID

    try{
        const db=await pool.connect()
        const result=await db.query('SELECT * FROM users WHERE id=$1',[userID])
        console.log(result.rows)
            if (!result) {
                return res.status(400).json({ error: "error querying database" })
            }
            else {
                res.status(200).json(result.rows)
            }
        
    }
    catch(err){
        console.log(err.message)
    }

    }

)


router.put('/update-user',authMiddleware,async(req,res)=>{
    console.log("UPDATE USER")
    const {name,email,password} = req.body
    console.log("UPDATE DATA", name,email,password)
    const userID = req.userID
    try{
        const db=await pool.connect()
        console.log("DB CONNECT")
        const result=await db.query('SELECT * FROM users WHERE id=$1',[userID])
        console.log(result.rows)
            if (!result) {
                return res.status(400).json({ error: "error querying database" })
            }
            else {
                const user = result.rows[0]
                if(password == null){
                    console.log("IN IF")
                    const queryText = 'UPDATE users SET name=$1,email=$2 WHERE id=$3'
                    const values = [name, email, userID]
                    const result=await db.query(queryText, values)
                        if (!result) {
                            return res.status(400).json({ error: "error updating user in database" })
                        }
                        else {
                            res.status(200).json({ message: "user updated successfully" })
                        }
                }
                else{
                    console.log("IN ELSE")

                    const salt = await bcrypt.genSalt(10);
                    const hash_password = await bcrypt.hash(password, salt)
                    if (hash_password) {
                        const queryText = 'UPDATE users SET name=$1,email=$2,password=$3 WHERE id=$4'
                        const values = [name, email, hash_password, userID]
                        const result = await db.query(queryText, values)
                        if (!result) {
                            return res.status(400).json({ error: "error updating user in database" })
                        }
                        else {
                            res.status(200).json({ message: "user updated successfully" })
                        }

                    }
                    else {
                        return res.status(400).json({ error: "incorrect password" })
                    }

                }
                
            }
        
    }
    catch(err){
        console.log(err.message)
    }

    
})


module.exports=router