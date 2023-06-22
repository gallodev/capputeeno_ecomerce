'use client'

import styled from "styled-components"
import { BackButtonIcon } from "../icons/BackButtonIcon"
import { useRouter } from 'next/navigation';

interface IBackButtonProps {
    navigate: string
}

const Container = styled.div`
    display: flex;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
`

const BackLabel = styled.span`
    font-family: inherit;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--back-text);
`

export function BackButton(props: IBackButtonProps) {
    const router = useRouter();

    const handleNavigate = () => {
        return router.push(props.navigate)
    }

    return (
        <Container onClick={handleNavigate}>
            <BackButtonIcon/>
            <BackLabel>Voltar</BackLabel>
        </Container>
    )
}