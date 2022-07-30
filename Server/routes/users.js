const express = require('express')
const axios = require("axios");
require('dotenv').config()
const router = express.Router()
const pool=require('../db')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

router.post('/login',async(req,res)=>{
    const {email,password} = req.body
    console.log("EMAIL",email,"PASSWORD",password)
    try{
        const db = await pool.connect()
        const result=await db.query('SELECT * FROM users WHERE email=$1', [email])
            if (!result) {
                return res.status(400).json({ error: "error querying database" })
            }
            else {
                if (result.rows.length > 0) {
                    const user = result.rows[0]
                    const validPassword = await bcrypt.compare(password, user.password);
                    if (validPassword) {
                        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET,{expiresIn:'1m'})
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

router.post('/save-song',async(req,res)=>{
    const {song_id,track_name,artist_name,userID, rating,genre} = req.body
    console.log("song_id",song_id,"track_name",track_name,"artist_name",artist_name,"userID",userID,"rating",rating,"genre",genre)
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



module.exports=router