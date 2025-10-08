import { Box, Card, Grid } from "@mui/material"

export default async function About() {
    const products = await fetch('https://chatapp-znz3.onrender.com/api/v1/auth/find-all', { cache: 'no-store' })
        .then(x => x.json())

    return (
        <Box sx={{ padding: 4 }}>
            <h1>About</h1><br /><br />
            <h2>SSR</h2>
            <Grid container spacing={2}>
                {products?.map(item => (
                    <Grid size={{ md: 4, sm: 6, xs: 12 }} item key={item._id}>
                        <Card sx={{ padding: 2 }}>
                            <h1>{item.username}</h1>
                            <p>
                                {item.count}
                            </p>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
