'use client'

import { BackButton } from "../components/BackButton";
import { DefaultPageLayout } from "../components/DefaultPageLayout";
import { useProduct } from "../hooks/useProduct";
import styled from 'styled-components';
import { getCategoryType } from "../utils/category-type";
import { formatPrice } from "../utils/format-price";
import { ShopBagIcon } from "../icons/ShopBagIcon";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Product, ProductInCart } from "../types/Product";

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    section {
        display: flex;
        justify-content: center;
        width: 100%;
        gap: 32px;
        margin-top: 24px;
        flex-direction: column;

        @media (min-width: ${props => props.theme.desktopBreakpoint}) {
            flex-direction: row;
        }

        img {
            max-width: 640px;
            width: 100%;

            @media (min-width: ${props => props.theme.desktopBreakpoint}) {
                width: 50%;
            }
        }
        
        > div {
            display: flex;
            justify-content: space-between;            
            flex-direction: column;

            button {
                background: #115D8C;
                mix-blend-mode: multiply;
                border-radius: 4px;
                color: white;
                border: none;
                cursor: pointer;
                padding: 10px 0;
                text-align: center;
                font-weight: 500;
                font-size: 16px;
                text-transform: uppercase;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            }

        }
    }

`

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    span {
        font-family: inherit;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--desc-text);
        :first-child {
            margin-bottom: 12px;
        }
    }

    strong {
        font-family: inherit;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--shapes-dark-text);
        margin-bottom: 25px;
    }

    small {
        font-family: inherit;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--desc-text);
        margin-bottom: 58px;
    }

    h5 {
        margin: 0;
        font-family: inherit;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--suport-text);
        margin-bottom: 8px;
    }

    h3 {
        margin: 0;
        font-family: inherit;
        font-size: 32px;
        font-weight: 300;
        line-height: 48px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--desc-text);
        margin-bottom: 4px;
    }

`


export default function Product({searchParams} : {searchParams: {id: string}}) {
    const { updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items",[]);
    const { data } = useProduct(searchParams.id)      
    const category = (data?.category) ? getCategoryType(data.category) : ''
    const price = (data?.price_in_cents) ? formatPrice(data.price_in_cents) : ''

    const handleAddProduct = () => {
        const cartItems = localStorage.getItem('cart-items')
        if(cartItems) {
            const cartItemsArray = JSON.parse(cartItems);
            let existingProductIndex = cartItemsArray.findIndex((item : {id: string}) => item.id === searchParams.id)
            
            if(existingProductIndex != -1) {
                cartItemsArray[existingProductIndex].quantity += 1
            }else {
                cartItemsArray.push({
                    ...data,
                    quantity: 1,
                    id: searchParams.id
                })
            }        
            
            updateLocalStorage(cartItemsArray)
            alert("Produto adicionado com sucesso!")
        } else {
            if(data) {
                const newCart: ProductInCart[] = [{...data,quantity: 1,id: searchParams.id}]
                updateLocalStorage(newCart)
                alert("Produto adicionado com sucesso!")
            }
        }   
    }
        
    return (
        <DefaultPageLayout>
            <Container>
                <BackButton navigate="/"/>
                <section>
                    <img src={data?.image_url} alt={data?.name}/>
                    <div>
                        <DescriptionContainer>
                            <span>{category}</span>
                            <h3>{data?.name}</h3>
                            <strong>{price}</strong>
                            <small>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</small>
                            <h5>Descrição</h5>
                            <span>{data?.description}</span>                                            
                        </DescriptionContainer>
                        <button onClick={handleAddProduct}>
                            <ShopBagIcon/>
                            Adicionar ao carrinho
                        </button>
                    </div>
                </section>           
            </Container> 
        </DefaultPageLayout>)
}