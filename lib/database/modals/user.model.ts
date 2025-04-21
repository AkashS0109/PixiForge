
import {Document,model,models,Schema } from "mongoose";

import { Types } from "mongoose";

//for type safety we need to make interface
export interface IImage extends Document {
    title: string;
    transformationType?: string;
    publicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: number;
    transformationUrl?: string;
    aspectRatio?: string;
    prompt?: string;
    author:{
       id:string,
       firstName:string;
       lastName: string;
    },
    createdAt?: Date;
    updated?: Date;
}

const UserSchema = new Schema({
   clerkId:{
    type:String, 
    required:true,
    unique: true     
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
     username:{
        type:String,
        required:true,
        unique:true
     },
     photo:{
        type: String,
        required:true
     },
     firstName:{
        type:String
     },
     lastName: {
        type: String,
      },
      planId: {
        type: Number,
        default: 1,
      },
      creditBalance: {
        type: Number,
        default: 10,
      },
    });
    
    const User = models?.User || model("User", UserSchema);
    
    export default User;