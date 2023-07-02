import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    // nextjs does the json parsing for us.
    const { name, email, message } = req.body;

    // add server side validations
    if (
      !name ||
      !email ||
      !email.includes("@") ||
      !message ||
      name.trim() === "" ||
      email.trim() === "" ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    const newMessage = {
      name,
      email,
      message,
    };
    let client;
    // save in db
    try {
      client = await MongoClient.connect(
        "mongodb+srv://harsh_aror:iBk8oP6RjVv1O34V@cluster0.jfh4zpi.mongodb.net/?retryWrites=true&w=majority"
      );

      const db = client.db("blog-messages");

      const meetupsCollection = db.collection("messages");

      const result = await meetupsCollection.insertOne(newMessage);
      
    } catch (error) {
        if(client)client.close();
        res.status(500).json({message:'Could not save query.'});
        return;
    }

    // console.log(result);
    client.close();
    
    res
      .status(201)
      .json({ message: "Data Saved Successfully.", messageObj: newMessage });
  }
}
export default handler;
