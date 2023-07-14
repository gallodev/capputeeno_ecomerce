'use client'

import styled from "styled-components"
import { CategoryFilter } from "./CategoryFilter"
import { OrderFilter } from "./OrderFilter"

const Container = styled.div`
    display: flex;
    justify-content: inherit;
    align-items: center;    

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        justify-content: space-between;
    }
`

export function FilterBar() {
    return (
        <Container>
            <CategoryFilter/>
            <OrderFilter/>
        </Container>
    )
}