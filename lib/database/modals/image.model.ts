
import {Document,model,models,Schema } from "mongoose";


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

const ImageSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    transformationType:{
        type:String
    },
    publicId:{type:String,reuired:true},
    secureUrl:{
        type:URL,required:true,
    },
    width:{
        type:Number,
    },
    height:{
        type:Number, 
    },
    config:{
        type:Number
    },
    transformationUrl:{
     type:URL
    },
    aspectRatio:{
        type:String
    },
    prompt:{
        type:String
    },
    author:{
        type:Schema.Types.ObjectId,red:'User'
    },
    createdAt:{type:Date,default:Date.now},
    updated:{type:Date,default:Date.now}
});

const Image = models?.Image || model('Image',ImageSchema);

export default Image;