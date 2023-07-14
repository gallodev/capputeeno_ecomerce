'use client'

import { BackButton } from "../components/BackButton"
import { CartItem } from "../components/CartItem"
import { DefaultPageLayout } from "../components/DefaultPageLayout"
import styled from 'styled-components'
import { Product, ProductInCart } from "../types/Product"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { formatPrice } from "../utils/format-price"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
`

const CartListContainer = styled.div`
    h3 {
        font-family: inherit;
        font-size: 24px;
        font-weight: 500;
        line-height: 36px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--desc-text);
        margin-top: 22px;
        margin-bottom: 6px;
        text-transform: uppercase;
    }
    span > span {
        font-family: inherit;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--desc-text);
        margin-bottom: 7px;
    }    
`

const OrderSummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 352px;
    padding: 16px 24px;
    background: white;

    h3 {
        font-family: inherit;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--desc-text);
        text-transform: uppercase;
    }

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        width: 100%;
    }

    div {
        background-color: var(--divider-color);
        height: 1px;
        width: 305px;
        margin-top: 25px;
        margin-bottom: 8px;        
        padding: 0 24px;
    }

    button {
        font-family: inherit;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;

        color: var(--shapes-light);
        background-color: var(--cart-button);
        border-radius: 4px;
        padding: 12px 0;
        margin-top: 40px;
        margin-bottom: 280px;
        width: 100%;
        border: 0;
    }

    a {
        font-family: inherit;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
        text-align: left;
        text-transform: uppercase;

        color: var(--text-dark);
        margin-bottom: 12px;
    }

`


export default function Cart() {
    const {value} = useLocalStorage<ProductInCart[]>("cart-items",[]);

    const calculateTotal = (value : ProductInCart[]) => {
        return value.reduce((total,curValue) => total += curValue.price_in_cents * curValue.quantity,0)
    }

    const totalValue = formatPrice(calculateTotal(value));
    const totalFee = 400
    const cartTotalWithDelivery = formatPrice(calculateTotal(value) + totalFee) 

    return (
        <DefaultPageLayout>
            <Container>            
                <CartListContainer>                    
                    <BackButton navigate="/"/>    
                    <h3>Seu carrinho</h3>
                    <span>Total ({value.length} produtos)</span> 
                    <strong>{totalValue}</strong>
                    {value.map((product) => <CartItem key={product.id} {...product}/>)}
                </CartListContainer>
                <OrderSummaryContainer>
                    <h3>Resumo do pedido</h3>
                    <li>Subtotal de produtos<span>{totalValue}</span></li>
                    <li>Entrega<span>{formatPrice(totalFee)}</span></li>
                    <div/>
                    <li><strong>Total</strong><strong>{cartTotalWithDelivery}</strong></li>
                    <button>Finalizar a compra</button>
                    <a href="#">Ajuda</a>
                    <a href="#">reembolsos</a>
                    <a href="#">entregas e frete</a>
                    <a href="#">trocas e devoluções</a>
                </OrderSummaryContainer>
            </Container>
        </DefaultPageLayout>
    )
}