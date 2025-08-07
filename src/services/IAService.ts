import type {FormIA} from "../types";
import {streamText} from "ai"
import {openRouter} from "../lib/ia.ts";

export async function getResponseIA(data: FormIA) {
    const result = streamText({
        model: openRouter("meta-llama/llama-3.3-70b-instruct:free"),
        prompt: data.busqueda
    });
    return result.textStream;
}