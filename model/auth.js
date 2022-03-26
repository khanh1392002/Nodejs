import mongoose, {Schema} from "mongoose";
import {createHmac} from "crypto";
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30
    },
    email: {
        type: String,
        required: true
    },
    salt:{
        type: string
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps: true});

userSchema.method = {
    aauthenticate(password){
        return this.password == this.encrytPassword(password);
    },
    encrytPassword(password){
        if(!password) return
        try {
            return createHmac("sha256", "abc123").update(password).digest("hex");
        } catch (error) {
            console.log(error);
        }
    }
}

userSchema.pre("save", function(next){
    this.password = this.encrytPassword(this.password);
    next();
})

export default mongoose.model('User', userSchema);