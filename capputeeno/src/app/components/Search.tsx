import styled from "styled-components"
import { SearchIcon } from "../icons/SearchIcon"

const SearchContainer = styled.div`
    position: relative;
    height: 42px;

    svg {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
    }

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }
`

const SearchInput = styled.input`
    padding: 10px 16px;
    background-color: var(--search-bg);
    border-radius: 8px;
    border: 0;
    width: 352px;

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`


export function Search() {
    return (
        <SearchContainer aria-label="Carrinho de compras">
            <div>
                <SearchInput placeholder="Procurando por algo específico?"/>
                <SearchIcon/>
            </div>
        </SearchContainer>
    )
}