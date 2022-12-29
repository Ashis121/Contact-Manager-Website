const Contact = require('../models/Contact');

exports.showContacts = async (req,res) =>{
    try {
        const contacts = await Contact.find().populate('Userid');
        if( contacts.length == 0){
            res.status(404).json({
                message:"No contacts found"
            })
        } else {
            res.status(200).json({
                message:"Contacts fetched successfully",
                contactData:contacts
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"Something went wrong",
            error: err.message
        })
    }
}

exports.searchbyName = async (req,res) => {
    
    try{
        const contactbyName = await Contact.findOne({contactName:req.params.cname});
        if(contactbyName == null) {
            res.status(404).json({
                message:"Contact not found"
            })
        } else {
            res.status(200).json({
                message:"Contact found",
                contactData: contactbyName
            })
        } 
    } catch(err) {
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })

    }
}

exports.searchbyEmail = async (req,res) => {
    try{
        const contactbyEmail = await Contact.findOne({contactEmail:req.body.cemail});
        if(contactbyEmail == null) {
            res.status(404).json({
                message:"Contact not found",
                error:err.message
            })
        } else {
            res.status(200).json({
                message:"Contact found",
                contactData: contactbyEmail
            })
        } 
    } catch(err) {
        res.status(500).json({
            message:"Something went wrong",
            error:err.message
        })

    }
}

exports.addContact = async (req,res) => {
    const contactObj = {
        Userid:req.body.cuser,
        contactName:req.body.cname,
        contactEmail:req.body.cemail,
        contactPhone:req.body.cphone,
        contactType:req.body.ctype
    }
    try {
        const contact = new Contact(contactObj);
        await contact.save();
        res.status(200).json({
            message:'Contact added successfully',
            contactData:contact
        })
    } catch (err) {
        res.status(500).json({
            message:"Contact could not be saved",
            error: err
        })
    }
}

exports.updatebyName = async (req,res) => {
    
    const contactObj = {
        Userid:req.body.cuser,
        contactName:req.body.cname,
        contactEmail:req.body.cemail,
        contactPhone:req.body.cphone,
        contactType:req.body.ctype
    }
    try {
        const updateContact = await  Contact.findOneAndUpdate({contactName:req.params.cname},{$set:contactObj});
        if(updateContact == null) {
            res.status(404).json({
                message:"Contact could not be updated/Contact not found"
            })
        } else {
            res.status(200).json({
                message:"Contact updated successfully",
                contactData:updateContact
            })
        }  
    } catch (err) {
        res.status(500).json({
            message:"Something went wrong",
            error: err
        })
    }
}

exports.deleteContact = async (req,res) => {
    try {
        const deletedContact = await Contact.findOneAndDelete({contactName:req.params.cname});
        if(deletedContact==null){
            res.status(404).json({
                message:"Could not delete contact/ Name not found"
            })
        }else{
            res.status(200).json({
                message:"Contact deleted successfully",
                deletedContact:deletedContact
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"Something went wrong",
            error:err 
        })
    }
}

exports.userContacts = async (req,res) => {
    try {
        const contacts = await Contact.find({Userid:req.params.cuser}).populate('Userid');
        if(!contacts) {
            res.status(404).json({
                message:"No contacts found"
            })
        } else {
            res.status(200).json({
                message:"Contacts fetched successfully",
                contactData:contacts
            })
        }
    } catch (err) {
        res.status(500).json({
            message:"Something went wrong",
            error: err.message
        })
    }

    
}