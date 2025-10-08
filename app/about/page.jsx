import { Box, Card, Grid } from "@mui/material"

export default async function News() {
    const products = await fetch('https://chatapp-znz3.onrender.com/api/v1/auth/find-all', { cache: 'no-store' })
        .then(x => x.json())
    const products2 = await fetch('https://chatapp-znz3.onrender.com/api/v1/auth/find-all', { cache: 'force-cache' })
        .then(x => x.json())
    const products3 = await fetch('https://chatapp-znz3.onrender.com/api/v1/auth/find-all', { next: { revalidate: 60 } })
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
            <hr /><br /><br />
            <h2>SSG</h2>
            <Grid container spacing={2}>
                {products2?.map(item => (
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
            <hr /><br /><br />
            <h2>ISR</h2>
            <Grid container spacing={2}>
                {products3?.map(item => (
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
