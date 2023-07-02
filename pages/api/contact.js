function handler(req, res) {
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
      res.status(422).json({ message: "Invalid Entries" });
      return;
    }

    const newMessage = {
      name,
      email,
      message,
    };
    // save in db
    console.log(newMessage);
    res.status(201).json({ message: "Data Saved Successfully." ,messageObj:newMessage});
  }
}
export default handler;
