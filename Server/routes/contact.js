const express = require('express');
const routes = express.Router();
const contactController = require('../controllers/contacts.controller')
const auth = require('../middleware/auth')
const multer = require('multer')
const upload = multer({dest:'uploads'});

//Routes
    
//Displaying all contacts
routes.get('/',auth.check,contactController.showContacts)

//Searching a contact by name
routes.get('/:cname',auth.check,contactController.searchbyName) 

//Searching a contact by email
routes.get('/searchemail/:cemail',auth.check,contactController.searchbyEmail) 

//Adding new contact
routes.post('/',auth.check,contactController.addContact) 

//For updating a contact by name
routes.put('/:cname',auth.check,contactController.updatebyName) 

//For deleting a contact by name
routes.delete('/:cname',auth.check,contactController.deleteContact) 

//Getting all contacts from a particular user
routes.get('/usersearch/:cuser',auth.check,contactController.userContacts);

//Uploading image
routes.post('/image',upload.single('profile_pic'),(req,res)=>{
    try{
        res.status(200).json({
            message:"File Uploaded Successfully",
            data:req.file
        })
    }catch(err){
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })
    }
});

module.exports = routes;