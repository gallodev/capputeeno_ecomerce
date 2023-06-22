'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FilterContextProvider } from "../context/filterContext";
import { ThemeProvider } from "styled-components";

interface DefaultProvidersProps {
    children: React.ReactNode
}

const queryClient = new QueryClient()

const theme = {
    desktopBreakpoint: "968px",
    tableBreakpoint: "768px",
}

export function DefaultProviders({children}: DefaultProvidersProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <FilterContextProvider>
                    {children}
                </FilterContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    )
}