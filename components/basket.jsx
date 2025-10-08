"use client"
import { BasketContext } from '../context/basketContext'
import { Box, Button, Card, Grid } from '@mui/material'
import React, { useContext } from 'react'

export default function Basket() {
    const { basket, setBasket } = useContext(BasketContext)
    const removeItem = (item) => {
        setBasket(basket.filter(x => x._id !== item._id))
    }
    const updateCount = (item, type) => {
        const existedItem = basket.find(x => x._id === item._id)
        if (type === "increase") {
            existedItem.count++
            setBasket((prev) => [...prev])
        } else {
            existedItem.count--
            setBasket((prev) => [...prev])
        }
    }
    return (
        <Box>
            <h1>Basket</h1>
            <Grid container spacing={2} sx={{ padding: "20px 0" }}>
                {basket?.map(item => (
                    <Grid size={{ md: 4, sm: 6, xs: 12 }} item key={item._id}>
                        <Card sx={{ padding: 2 }}>
                            <h1>{item.username}</h1>
                            <p>
                                Count: {item.count}
                            </p>
                            <Box sx={{ margin: "10px 0" }}>
                                <Button onClick={() => updateCount(item, "increase")} variant='outlined'>+</Button>
                                <Button sx={{ marginLeft: 2 }} disabled={item.count === 1} onClick={() => updateCount(item, "decrease")} variant='outlined'>-</Button>
                            </Box>
                            <Button onClick={() => removeItem(item)} variant='outlined'>remove</Button>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
