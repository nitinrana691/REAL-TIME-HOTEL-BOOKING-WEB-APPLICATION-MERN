import dotenv from "dotenv";
dotenv.config();

const dev = {
  KEY_SECRET: process.env.KEY_SECRET,
  KEY_ID: process.env.KEY_ID,

};

export default dev;