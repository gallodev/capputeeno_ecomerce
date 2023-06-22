
'use client'
import { FilterBar } from "./components/FilterBar";
import { Pagination } from "./components/Pagination";
import { ProductList } from "./components/ProductList";
import { DefaultPageLayout } from "./components/DefaultPageLayout";

export default function Home() {
  return (
      <DefaultPageLayout>
        <FilterBar/>
        <Pagination/>
        <ProductList/>
      </DefaultPageLayout>
  )
}
