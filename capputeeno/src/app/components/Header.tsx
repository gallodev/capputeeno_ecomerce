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

    padding: 0 20px;

    @media(min-width: 1000px) {
        padding: 0 160px;
    }
`

const Logo = styled.a`
    font-size: 40px;
    line-height: 150%;
    color: var(--logo-color);
    text-transform: lowercase;
    padding: 20px 0;
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