'use client'

import { BackButton } from "../components/BackButton";
import { DefaultPageLayout } from "../components/DefaultPageLayout";
import { useProduct } from "../hooks/useProduct";
import styled from 'styled-components';
import { getCategoryType } from "../utils/category-type";
import { formatPrice } from "../utils/format-price";

const MainContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
    margin-top: 22px;
`

const DescriptionContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    h3 {
        font-family: inherit;
        font-size: 32px;
        font-weight: 300;
        line-height: 48px;
        text-align: left;
        color: var(--desc-text);
        margin-top: 12px;
        margin-bottom: 4px;
    }

    span {
        font-family: inherit;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--desc-text);
        max-width: 448px;
    }
    section {
        display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    }
`

const Price = styled.span`
    font-family: inherit;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    text-align: left;
    color: var(--shapes-dark-text);
    margin-bottom: 24px;
`

const Description = styled.span`
    font-family: inherit;    
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: left;
    text-transform: uppercase;
    color: var(--suport-text);
    margin-bottom: 8px;
    margin-top: 58px;
`

const Frete = styled.span`
    color: var(--desc-text);
    font-family: inherit;
    font-size: 12px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    width: 448px;
`


export default function Product({searchParams} : {searchParams: {id: string}}) {
    const { data } = useProduct(searchParams.id)      
    const category = (data?.category) ? getCategoryType(data.category) : ''
    const price = (data?.price_in_cents) ? formatPrice(data.price_in_cents) : ''
        
    return (
        <DefaultPageLayout>
            <BackButton navigate="/"/>
            <MainContainer>
                <img src={data?.image_url} alt={data?.name} width={640} height={580}/>
                <DescriptionContainer>
                    <section>
                        <span>{category}</span>
                        <h3>{data?.name}</h3>
                        <Price>{price}</Price>
                        <Frete>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</Frete>
                        <Description>Descrição</Description>
                        <span>{data?.description}</span>                    
                    </section>
                    <button>Adicionar ao carrinho</button>
                </DescriptionContainer>
            </MainContainer>            
        </DefaultPageLayout>)
}