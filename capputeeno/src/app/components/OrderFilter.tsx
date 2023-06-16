'use client'

import { useState } from 'react';
import styled from "styled-components";
import { ArrowIcon } from "../icons/ArrowIcon";
import { useFilter } from '../hooks/useFilter';
import { FilterOrder } from '../types/filterOrder';

interface SelectBoxItemProps {
    selected: boolean
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    button {
        background-color: transparent;
        border: 0;
        cursor: pointer;
    }
`

const SelectBox = styled.ul`
    position: absolute;
    top: 100%;
    background-color: #FFFFFF;
    width: 175px;
    height: 100px;
    list-style: none;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin: 0;
    padding: 12px 16px;

    li {
        cursor: pointer;
    }
`

const SelectBoxItem = styled.li<SelectBoxItemProps>`
    color: ${props => props.selected ? 'var(--orange-low)' : ''};
`

export function OrderFilter() {
    const [open,setOpen] = useState(false);
    const { order , handleOrder } = useFilter();

    const handleSelectBoxClick = (filter: FilterOrder) => {
        handleOrder(filter)
        setOpen(!open)
    }

    return (
        <Container>
            Organizar por
            <button onClick={() => setOpen(!open)}>
                <ArrowIcon/>
            </button>
            {open && (
                <SelectBox>
                        <SelectBoxItem 
                            selected={order === FilterOrder.NEWS}
                            onClick={() => handleSelectBoxClick(FilterOrder.NEWS)}
                        >
                            Novidades
                        </SelectBoxItem>
                        <SelectBoxItem
                            selected={order === FilterOrder.BIGGEST_PRICE}
                            onClick={() => handleSelectBoxClick(FilterOrder.BIGGEST_PRICE)}    
                        >
                            Preço: Maior - menor
                        </SelectBoxItem>
                        <SelectBoxItem
                            selected={order === FilterOrder.LOWEST_PRICE}
                            onClick={() => handleSelectBoxClick(FilterOrder.LOWEST_PRICE)}
                        >
                            Preço: Menor - maior
                        </SelectBoxItem>
                        <SelectBoxItem
                            selected={order === FilterOrder.BEST_SELLERS}
                            onClick={() => handleSelectBoxClick(FilterOrder.BEST_SELLERS)}
                        >
                                Mais vendidos
                        </SelectBoxItem>
                </SelectBox>
            )}
        </Container>
    );
}