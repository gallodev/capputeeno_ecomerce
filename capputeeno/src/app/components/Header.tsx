'use client'
import styled from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { Search } from "./Search"
import { CartControl } from "./CartControl"

const saira_stencil = Saira_Stencil_One({ subsets: ['latin'], weight: '400' })

const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 5px;

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
        padding: 0 160px;
    }
`

const Logo = styled.a`
    font-size: 20px;
    line-height: 120%;
    color: var(--logo-color);
    text-transform: lowercase;
    padding: 20px 0;
    margin-right: 5px;

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
        font-size: 40px;
        line-height: 150%;
        margin-right: 0;
    }
`


export function Header() {
    return (
        <HeaderContainer>
            <Logo className={saira_stencil.className}>capputeeno</Logo>
            <Search/>            
            <CartControl/>
        </HeaderContainer>
    )
}