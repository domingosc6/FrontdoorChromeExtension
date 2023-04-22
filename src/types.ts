export enum FetchState {
    DEFAULT = 'DEFAULT',
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
}

export type PromptData = {
    answerFromAPI: string;
};