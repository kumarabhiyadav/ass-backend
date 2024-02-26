import { getModelForClass, prop } from "@typegoose/typegoose";



export class Product {

    @prop({ required: true })
    name: string;

    @prop({ required: true })
    price: number;


}

export const ProductModel = getModelForClass(Product, {
    schemaOptions: { timestamps: true },
});
