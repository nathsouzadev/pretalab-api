import axios from "axios";
import type { apiResponse, TProducts } from "../models/products";

export async function getAllProduct(): Promise<TProducts[]>{
    const response = await axios.get<apiResponse>("https://pretalab-api-439254010866.us-central1.run.app/products");
    return response.data.data
}