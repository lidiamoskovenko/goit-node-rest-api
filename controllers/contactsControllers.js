

import { listContacts, getContactById, addContact, removeContact, updateContactById } from "../services/contactsServices.js";


export const getAllContacts = async (req, res, next) => {
 try {
    res.status(200).json(await listContacts())
 } catch (error) {
    next(error)
 }
};

export const getOneContact = async (req, res) => {
   try {
      const {id} = req.params
      
      const contact = await getContactById(id);

      if (!contact) {
         return  res.status(404).json({message: "Not found"})
      }
      res.status(200).json(contact)
   } catch (error) {
      console.log(error)
      
   }
};

export const deleteContact = async (req, res) => {
   try {
      const {id} = req.params
      
      const contact = await removeContact(id);

      if (!contact) {
        return res.status(404).json({message: "Not found"})
      }
      res.sendStatus(200);
   } catch (error) {
      console.log(error)
      
   }
};

export const createContact = async (req, res) => {
   try {
      const {name, email, phone} = req.body

      const create = await addContact(name, email, phone)

      res.status(201).json(create)

   } catch (error) {
      console.log(error)
      
   }
};

export const updateContact = async (req, res) => {

   const {id} = req.params

   const update = await updateContactById(id, req.body);

   if (!update) {
     return res.status(404).json({message: "Not found"})
   }

   res.status(200).json(update)
};