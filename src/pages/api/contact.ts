import type { NextApiRequest, NextApiResponse } from "next";

import { MongoClient } from "mongodb";

interface data {
  message?: string;
  dataMessage?: {
    //id?: string | any;
    email: string;
    name: string;
    message: string;
  };
}

async function handler(req: NextApiRequest, res: NextApiResponse<data>) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const dataMessage: data["dataMessage"] = { email, name, message };

    // Add data to database

    let client;

    try {
      client = await MongoClient.connect(process.env.DB_URL as string);
    } catch (err) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("message").insertOne(dataMessage);

      //dataMessage.id = result.insertedId;
    } catch (err) {
      client.close();
      res.status(500).json({ message: "Storing message failed!" });
      return;
    }

    client.close();

    res
      .status(200)
      .json({ message: "Successfully added to data!", dataMessage });
  }
}

export default handler;
