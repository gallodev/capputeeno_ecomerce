
'use client'
import styled from "styled-components";
import { FilterBar } from "./components/FilterBar";
import { Pagination } from "./components/Pagination";
import { ProductList } from "./components/ProductList";

const MainContainer = styled.main`
  padding: 35px 20px;
  background-color: var(--bg-primary);
  min-height: 100vh;

  @media(min-width: 1000px) {
      padding: 35px 160px;
  }
`


export default function Home() {
  return (
    <MainContainer>
      <FilterBar/>
      <Pagination/>
      <ProductList/>
    </MainContainer>
  )
}
