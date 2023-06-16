'use client'
import styled from "styled-components"
import { useFilter } from "../hooks/useFilter"
import { FilterType } from "../types/filterType"


interface FilterItemProps{
    selected: boolean
}

const FilterList = styled.ul`
    list-style: none;    
    display: flex;
    justify-content: flex-start;
    padding: 0;
    gap: 40px;
`

const FilterItem = styled.li<FilterItemProps>`
    text-transform: uppercase;
    cursor: pointer;

    font-weight: ${props => props.selected ? '600' : '400'};
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''};
    font-size: 16px;
    line-height: 22px;
`


export function CategoryFilter(){
    const { type , handleType } = useFilter();
    
    return (        
        <FilterList>
            <FilterItem 
                selected={(type === FilterType.ALL)}
                onClick={() => handleType(FilterType.ALL)}
            >
                Todos os produtos
            </FilterItem>
            <FilterItem 
                selected={(type === FilterType["T-SHIRTS"])}
                onClick={() => handleType(FilterType["T-SHIRTS"])}
                >
                Camisetas
            </FilterItem>
            <FilterItem 
                selected={(type === FilterType.MUGS)}
                onClick={() => handleType(FilterType.MUGS)}
                >
                Canecas
            </FilterItem>
        </FilterList>                
    )
}