"use client"
import React from 'react'
import { createContext, useContext, useEffect, useState } from "react";

export const BasketContext = createContext();

function BasketContextProvider({ children }) {
    const [basket, setBasket] = useState([])

    const data = { basket, setBasket }
    return (
        <BasketContext.Provider value={data}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider