'use client'

import { useState, createContext } from 'react';
import { FilterType } from '../types/filterType';
import { FilterOrder } from '../types/filterOrder';

interface IFilterContext {
    search : string;
    page: number;
    type: FilterType;
    order: FilterOrder;
    handleSearch: (value: string) => void;
    handlePage: (page: number) => void;
    handleType: (type: FilterType) => void;
    handleOrder: (order: FilterOrder) => void
}

export const FilterContext = createContext({} as IFilterContext)

interface IFilterContextProvider {
    children: React.ReactNode
}

export const FilterContextProvider = ({ children }: IFilterContextProvider) => {
    const [search,setSearch] = useState('');
    const [page,setPage] = useState(1);
    const [type,setType] = useState(FilterType.ALL);
    const [order,setOrder] = useState(FilterOrder.NEWS);    

    return (
        <FilterContext.Provider value={{
            search,
            page,
            type,
            order,
            handleSearch: setSearch,
            handlePage: setPage,
            handleType: setType,
            handleOrder: setOrder
        }}>
            {children}
        </FilterContext.Provider>
    )
}