import {
    Injectable,
    NotFoundException,
    ServiceUnavailableException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Summary, SummaryDocument } from "../model/summary.schema";
import { createReadStream, statSync } from 'fs';
import { join } from 'path';
import { Request, Response } from 'express';

@Injectable()
export class SummaryService {
    constructor(@InjectModel(Summary.name) private summaryModel: Model<SummaryDocument>) { }

    async createSummary(summary: Object): Promise<Summary> {
        const newSummary = new this.summaryModel(summary);
        return newSummary.save();
    }

    async getAll() : Promise<Summary[]> {
        return this.summaryModel.find();
    }

    async readSummary(id): Promise<any> {
        if (id) {
            return this.summaryModel.findOne({ _id: id });
        }
    }

    async update(id, summary: Summary): Promise<Summary> {
        return await this.summaryModel.findByIdAndUpdate(id, summary, { new: true })
    }
    async delete(id): Promise<any> {
        return await this.summaryModel.findByIdAndRemove(id);
    }
}