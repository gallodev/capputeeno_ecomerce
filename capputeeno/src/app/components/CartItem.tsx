'use client'

import styled from 'styled-components';
import { Product, ProductInCart } from '../types/Product';
import { formatPrice } from '../utils/format-price';
import { TrashIcon } from '../icons/TrashIcon';
import { useLocalStorage } from '../hooks/useLocalStorage';


const Item  = styled.li`
    display: flex;
    height: 220px;
    border-radius: 8px;
    background-color: white;
    
    position: relative;
    margin-top: 16px;
    gap: 15px;

    img {
        max-height: 100%;
        width: 256px;
        border-radius: 8px 0 0 8px;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 16px;
        width: 100%;

        button {
            background-color: transparent;
            border: 0;
        }

        svg {
            position: absolute;
            right: 16px;
            cursor: pointer;
        }

        h4 {
            margin: 0;
            color: var(--desc-text);
            font-family: inherit;
            font-size: 20px;
            font-weight: 300;
            line-height: 30px;
            letter-spacing: 0em;
            text-align: left;
        }

        select {
            width: 65px;
            height: 40px;
            border-radius: 8px;
            border: 1px;
            color: linear-gradient(0deg, #A8A8B3, #A8A8B3);
            background: linear-gradient(0deg, #F3F5F6, #F3F5F6);
            padding: 5px;
        }

        div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            span {
                color: var(--shapes-dark-text);
                font-family: inherit;
                font-size: 16px;
                font-weight: 600;
                line-height: 24px;
                letter-spacing: 0em;
                text-align: right;

            }
        }
    }

`


export function CartItem(props: ProductInCart) {
    const { value, updateLocalStorage} = useLocalStorage<ProductInCart[]>('cart-items',[])

    const getQuantityOptions = () => {
        let rows = []
        let quantity = 5
        if(props.quantity > 5) {
            quantity = props.quantity
        }

        for(let i = 1; i <= quantity; i++) {
            if(i === props.quantity) {
                rows.push(<option value={props.quantity} selected={true}>{props.quantity}</option>)
            } else {
                rows.push(<option value={i}>{i}</option>)
            }            
        }

        return rows
    }

    const handleUpdateQuantity = (id: string, quantity: number) => {
        const newValue = value.map((item) => {
           if(item.id !== id) return item 
           return {...item,quantity: quantity}
        })
        updateLocalStorage(newValue)
    }

    const handleDeleteProduct = (id: string) => {
        const newValue = value.filter((item) => {
            if(item.id !== id) return item
        })
        updateLocalStorage(newValue)
    }

    return (
        <Item>
            <img src={props.image_url} alt={props.name} />
            <div>
                <button onClick={() => handleDeleteProduct(props.id)}>
                    <TrashIcon />
                </button>
                <h4>{props.name}</h4>
                <span>{props.description}</span>
                <div>
                    <select onChange={(e) => handleUpdateQuantity(props.id,Number(e.target.value))}>
                        {getQuantityOptions()}                                               
                    </select>
                    <span>{formatPrice(props.price_in_cents)}</span>
                </div>
            </div>
        </Item>
    )
}