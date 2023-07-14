import styled from "styled-components";
import { CartIcon } from "../icons/CartIcon";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ProductInCart } from "../types/Product";
import { useEffect, useState } from "react";

const CartContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    cursor: pointer;
    background-color: transparent;
    border: 0;
`

const CartBallon = styled.div`
    background-color: var(--bg-orange);
    height: 17px;
    width: 17px;
    border-radius: 50%;

    font-family: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 26px;
    color: #FFF;
    text-align: center;
    line-height: 150%;

    position: absolute;
    top: 75%;
    right: -5px;
`


export function CartControl() {
    const router = useRouter();
    const { value } = useLocalStorage<ProductInCart[]>('cart-items',[])

    const handleNavigate = () => {
        return router.push('/cart')
    }
    
    return (
        <CartContainer onClick={handleNavigate}>            
            <CartIcon/>
            {value.length > 0 && <CartBallon>{value.length}</CartBallon>}
        </CartContainer>
    )
}