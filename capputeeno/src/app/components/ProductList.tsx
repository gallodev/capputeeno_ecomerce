'use client'

import styled from "styled-components"
import { ProductCard } from "./ProductCard";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../types/Product";

const Container = styled.div`
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(auto-fill,256px);
    justify-content: center;
    grid-gap: 32px;
    max-width: 100%;
`
export function ProductList() {
    const { data } = useProducts()

    return (
        <Container>
            {data?.map((item: Product) => (
                <ProductCard key={item.id} id={item.id} image_url={item.image_url} name={item.name} price_in_cents={item.price_in_cents} />
            ))}
        </Container>
    )
}