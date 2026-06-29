//seed/craeteAdmin.js

import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import connectDB from "../src/config/db.js";
import Admin from "../src/models/Admin.js";

dotenv.config();

await connectDB();

const password =
    await bcrypt.hash(
        "sinha@Admin26",
        10
    );

await Admin.create({

    name: "Super Admin",

    email: "admin@sinhabmh.com",

    password,

    role: "superadmin"

});

console.log("Admin Created Successfully!");

process.exit();