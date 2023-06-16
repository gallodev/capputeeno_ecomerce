'use client'

import styled from "styled-components";

interface Product {
    id: string;
    name: string;
    price_in_cents: string;
    image_url: string;
}


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;    

    img {
        height: 300px;
        width: 100%;        
        border-radius: 10px 10px 0 0;
    }

    > div {
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(10px);
        border-radius: 0px 0px 4px 4px;
        width: 100%;
        padding: 8px 12px;
        box-sizing: border-box;

        > div {
            height: 1px;
            width: 228px;
            background-color: var(--divider-color);
        }

        span {
            color: var(--bold-text);
            font-family: inherit;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 150%;
        }
    }

    h3 {
        font-family: inherit;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        margin: 0;
    }

`


export function ProductCard(props: Product) {
    return (
        <Container>
            <img src={props.image_url} alt={props.name} />   
            <div>
                <h3>{props.name}</h3>   
                <div/>
                <span>R${props.price_in_cents}</span>
            </div>
        </Container>
    )
}