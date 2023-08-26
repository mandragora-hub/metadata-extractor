/* eslint-disable import/no-anonymous-default-export */
import { loadDocument } from "pdf-metadata";

export default async (req, res) => {
  try {
    const { fileUrl } = req.body;
    if (!fileUrl) throw new Error("Must send a valid fileUrl.");

    console.log(`Processing ${fileUrl}.`);

    const document = await loadDocument(fileUrl);
    const info = await document.getInfo();
    return res.status(200).json(info);
  } catch (error) {
    return res.status(400).json(error);
  }
};