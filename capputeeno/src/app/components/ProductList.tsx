'use client'

import styled from "styled-components"
import { ProductCard } from "./ProductCard";

const Container = styled.div`
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(auto-fill,256px);
    justify-content: center;
    grid-gap: 32px;
    max-width: 100%;
`

interface Product {
    id: string;
    name: string;
    price_in_cents: string;
    image_url: string;
}

export function ProductList() {
    const arr: Product[] = [{
        id: '123',
        image_url: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg',
        name: 'caneca',
        price_in_cents: '50000'
    },
    {
        id: '123',
        image_url: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg',
        name: 'caneca',
        price_in_cents: '50000'
    },
    {
        id: '123',
        image_url: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg',
        name: 'caneca',
        price_in_cents: '50000'
    },
    {
        id: '123',
        image_url: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg',
        name: 'caneca',
        price_in_cents: '50000'
    },
    {
        id: '123',
        image_url: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg',
        name: 'caneca',
        price_in_cents: '50000'
    },
    {
        id: '123',
        image_url: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg',
        name: 'caneca',
        price_in_cents: '50000'
    },
    {
        id: '123',
        image_url: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg',
        name: 'caneca',
        price_in_cents: '50000'
    },
    {
        id: '123',
        image_url: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg',
        name: 'caneca',
        price_in_cents: '50000'
    },
    {
        id: '123',
        image_url: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg',
        name: 'caneca',
        price_in_cents: '50000'
    },
    {
        id: '123',
        image_url: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg',
        name: 'caneca',
        price_in_cents: '50000'
    },
    {
        id: '123',
        image_url: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg',
        name: 'caneca',
        price_in_cents: '50000'
    },
    {
        id: '123',
        image_url: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg',
        name: 'caneca',
        price_in_cents: '50000'
    },
    {
        id: '123',
        image_url: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg',
        name: 'caneca',
        price_in_cents: '50000'
    },
    {
        id: '123',
        image_url: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/a/caneca-bento-cafe-glassral-300ml_758369.jpg',
        name: 'caneca',
        price_in_cents: '50000'
    }]

    return (
        <Container>
            {arr.map((item: Product) => (
                <ProductCard key={item.id} id={item.id} image_url={item.image_url} name={item.name} price_in_cents={item.price_in_cents} />
            ))}
        </Container>
    )
}