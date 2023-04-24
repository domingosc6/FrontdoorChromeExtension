import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type SummaryDocument = Summary & Document;
@Schema()
export class Summary {
    @Prop({required:true})
    prompt: string;
    @Prop({required:true})
    resumedText: string;
    @Prop({default: Date.now() })
    createdDate: Date
}
export const SummarySchema = SchemaFactory.createForClass(Summary)