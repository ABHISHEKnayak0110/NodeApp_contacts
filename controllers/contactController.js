const asyncHandler = require('express-async-handler');
 const contactModal = require("../models/contactModels");
//@desc Get all contacts
//@route Get /api/contacts
// @Acess public

const getContacts =  asyncHandler(async(req, res) => {
    const contacts = await contactModal.find({userId : req.user.id})
  res.status(200).json(contacts);
});

const createContact = asyncHandler(async(req, res) => {
    console.log(req.body)
    const {name , email,number} = req.body
    if(!name || !email || !number){
        res.status(400)
        throw new Error("All fileds are mandatory")
    }
    const contact = await contactModal.create({
        ...req.body,
        userId : req.user.id
    })
  res.status(201).json({ message: `created` });
});
const getContact = asyncHandler(async (req, res) => {
    const contact = await contactModal.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Record not found") 
    }
  res.status(200).json(contact);
});
const updateContact = asyncHandler(async(req, res) => {
    const contact = await contactModal.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Record not found") 
    }
    if(contact.userId.toString() !== req.user.id){
      res.status(404)
      throw new Error("user MisMatch") 
    }
    const updatedData = await contactModal.findByIdAndUpdate(req.params.id , req.body , {new : true})
  res.status(200).json(updatedData);
});
const deleteContact =asyncHandler(async (req, res) => {
    const contact = await contactModal.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Record not found") 
    }
    if(contact.userId.toString() !== req.user.id){
      res.status(404)
      throw new Error("user MisMatch") 
    }
    const deletedData = await contactModal.findByIdAndDelete(req.params.id)
  res.status(200).json(deletedData );
});
module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
