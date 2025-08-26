import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
<<<<<<< HEAD
    username: {type: String, required: true, unique:true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true},
}, 
   {timestamps: true}
);

const User = mongoose.model("user",userSchema);
=======
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, 
    { timestamps: true } 
);

const User = mongoose.model("User", userSchema);
>>>>>>> 871daaec6386c2ce354ab4ee34cb4a788dc6c39a

export default User;