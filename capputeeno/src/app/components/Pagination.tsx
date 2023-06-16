'use client'

import styled from "styled-components"
import { LeftArrowIcon } from "../icons/LeftArrowIcon"
import { RightArrowIcon } from "../icons/RightArrowIcon"
import { useFilter } from "../hooks/useFilter"

interface PaginateItemProps {
    selected: boolean
}

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const Paginate = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
    list-style: none;
`

const PaginateItem = styled.li<PaginateItemProps>`
    color: ${props => props.selected ? 'var(--orange-low)' : 'var(--text-dark)'};
    border: ${props => props.selected ? '1px solid var(--orange-low)' : ''};
    border-radius: 8px;
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 185%;
    width: 32px;
    height: 32px;
    background: ${props => props.selected ? 'var(--shapes-light)' : 'var(--shapes-dark)'};
    cursor: pointer;
`

const Controls = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-left: 8px;
    list-style: none;
    padding: 0;
`

const ControlItem = styled.li`
    background: #E9E9F0;
    border-radius: 8px;
    cursor: pointer;
    padding: 3px;
    text-align: center;
    line-height: 100%;
`

export function Pagination() {
    const { page, handlePage } = useFilter();

    enum ActionType {
        'INCREMENT',
        'DECREMENT'
    }

    const handleControlPaginate = (actionType: ActionType) => {
        if(actionType === ActionType.DECREMENT) {
            if(page > 1) {
                handlePage(page - 1)
            }
        } else {
            if(page < 5) {
                handlePage(page + 1)
            }
        }
    }

    return (
        <Container>
            <Paginate>
                <PaginateItem 
                    selected={page === 1}
                    onClick={() => handlePage(1)}
                >
                    1
                </PaginateItem>
                <PaginateItem 
                    selected={page === 2}
                    onClick={() => handlePage(2)}
                >
                    2
                </PaginateItem>
                <PaginateItem 
                    selected={page == 3}
                    onClick={() => handlePage(3)}
                >
                    3
                </PaginateItem>
                <PaginateItem 
                    selected={page === 4}
                    onClick={() => handlePage(4)}
                >
                    4
                </PaginateItem>
                <PaginateItem 
                    selected={page === 5}
                    onClick={() => handlePage(5)}
                >
                    5
                </PaginateItem>
                <Controls>
                    <ControlItem onClick={() => handleControlPaginate(ActionType.DECREMENT)}>
                        <LeftArrowIcon/>
                    </ControlItem>
                    <ControlItem onClick={() => handleControlPaginate(ActionType.INCREMENT)}>
                        <RightArrowIcon/>
                    </ControlItem>
                </Controls>
            </Paginate>
        </Container>
    )
}