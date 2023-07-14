import styled from "styled-components"
import { SearchIcon } from "../icons/SearchIcon"
import { useFilter } from "../hooks/useFilter"

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
    width: 220px;

    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;

    @media (min-width: ${props => props.theme.desktopBreakpoint}) {
        width: 352px;
        font-size: 14px;
    }
`


export function Search() {
    const { handleSearch } = useFilter()
    return (
        <SearchContainer aria-label="Carrinho de compras">
            <div>
                <SearchInput placeholder="Procurando por algo específico?" onChange={(e) => handleSearch(e.target.value)}/>
                <SearchIcon/>
            </div>
        </SearchContainer>
    )
}