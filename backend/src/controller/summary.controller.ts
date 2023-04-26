import { Body, Controller, Logger, Injectable, Delete, Get, HttpStatus, Param, Post, UploadedFiles, Put, Req, Res } from "@nestjs/common";
import { Summary } from "../model/summary.schema";
import { ApiService } from "../api/api.service";
import { SummaryService } from "../service/summary.service";

@Controller('/api/v1/summary')
export class SummaryController {
    private readonly logger = new Logger(SummaryController.name);
    constructor(private readonly summaryService: SummaryService,
        private apiService: ApiService
    ) { }

    @Post('/request')
    async RequestSummary(@Res() response, @Body() request: string) {
        const promptFromRequest = eval(request).prompt

        const responseFromOpenAI = await this.apiService.createCompletion(promptFromRequest);
        const newSummaryJson = { prompt: promptFromRequest, resumedText: responseFromOpenAI, createdAt: Date.now() }
        const summary = await this.summaryService.createSummary(newSummaryJson);

        return response.status(HttpStatus.CREATED).json({
            summary
        })
    }

    @Get('/all')
    async GetAllSummaries(@Res() response) {
    
        const allSummaries = await this.summaryService.getAll();

        return response.status(HttpStatus.CREATED).json({
            allSummaries
        })
    }

    @Get('/:id')
    async GetSummary(@Param('id') id, @Res() response) {
    
        const summary = await this.summaryService.readSummary(id);

        return response.status(HttpStatus.OK).json({
            summary
        })
    }
}