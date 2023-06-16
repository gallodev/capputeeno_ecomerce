'use client'

import styled from "styled-components"
import { CategoryFilter } from "./CategoryFilter"
import { OrderFilter } from "./OrderFilter"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
`

export function FilterBar() {
    return (
        <Container>
            <CategoryFilter/>
            <OrderFilter/>
        </Container>
    )
}