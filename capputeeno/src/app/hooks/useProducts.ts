import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from 'axios'
import { ProductFetchResponse } from "../types/ProductsFetchResponse";
import { useFilter } from "./useFilter";
import { getQuery } from "../utils/graphql-filters";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductFetchResponse> => {
    return axios.post(API_URL,{ query : query})
}

export function useProducts() {
  const { type, order, page, search } = useFilter();
  const searchDeferred = useDeferredValue(search)
  const query = getQuery(type,order,page)

  const { data } = useQuery({
      queryFn: () => fetcher(query),
      queryKey: ['products', type, order, page]
  })
  
  const products = data?.data?.data?.allProducts
  const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeferred.toLowerCase()))

  return { data: filteredProducts }
}