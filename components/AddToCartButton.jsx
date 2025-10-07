"use client"
import { BasketContext } from '@/context/basketContext'
import { Box, Button } from '@mui/material'
import React, { useContext } from 'react'

export default function AddToCartButton({ item }) {
    const { setBasket, basket } = useContext(BasketContext)
    const addToCart = (item) => {
        const existedItem = basket.find(x => x._id === item._id)
        if (existedItem) {
            existedItem.count++
            setBasket((prev) => [...prev])
        } else {
            const updatedItem = { ...item, count: 1 }
            setBasket((prev) => [...prev, updatedItem])
        }
    }

    const currentItem = basket.find(x => x._id === item._id)
    if (currentItem) {
        return (
            <Box>
                Count: {currentItem.count} <Button onClick={() => addToCart(item)} variant='outlined'>+</Button>
            </Box>
        )
    } else {
        return (
            <Button onClick={() => addToCart(item)} variant="contained">Add to cart</Button>
        )
    }
}
