import passwordModel from "../models/password.model";
import { Mongoose } from "mongoose";

export const getPasswords = async (req, res) => {
  try {
    const passwords = await passwordModel.find();
    res.status(200).json(passwords);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createPassword = async (req, res) => {
  const password = req.body;
  const newPassword = new passwordModel(password);
  try {
    await newPassword.save();
    res.status(201).json(newPassword);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const deletePassword = async (req, res) => {
  const id = req.params.id;
  try {
    await passwordModel.findByIdAndRemove(id);
    res.json({ message: "Password deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const updatePassword = async (req, res) => {
  const id = req.params.id;
  const password = req.body;
  try {
    await passwordModel.findByIdAndUpdate
    (id, { ...password, id }, { new: true });
    res.json({ message: "Password updated successfully" });

  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
