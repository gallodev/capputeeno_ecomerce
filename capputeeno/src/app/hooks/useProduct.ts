import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductFetchResponse } from "../types/Product";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (id: string): AxiosPromise<ProductFetchResponse> => {
    return axios.post(API_URL, {query: `
        query{
            Product(id: "${id}"){
                id
                name
                description
                category
                image_url
                price_in_cents
            }
        }
    `})
}


export function useProduct(id: string) {
    const { data } = useQuery({
        queryFn: () => fetcher(id),
        queryKey: ['product']
    })

    return { 
        data: data?.data?.data?.Product
    }
}