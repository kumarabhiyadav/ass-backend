import { getModelForClass, prop } from "@typegoose/typegoose";



export class EmiRange {

   @prop({ required:true })
    amountMin: number;

  @prop({ required:true })
  amountMax: number;

  @prop({ required:true })
  months: number;


  @prop({ required:true })
  rateofintrest: number;

}

export const EmiRangeModel = getModelForClass(EmiRange, {
  schemaOptions: { timestamps: true },
});
