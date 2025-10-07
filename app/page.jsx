import AddToCartButton from "@/components/AddToCartButton";
import { Box, Card, Grid } from "@mui/material";
import styles from "./page.module.scss";
import Basket from "@/components/basket";


export default async function Home() {
  const response = await fetch('https://chatapp-znz3.onrender.com/api/v1/auth/find-all', { next: { revalidate: 60 } })
  const products = await response.json()
  return (
    <Box className={styles.page} sx={{ padding: 4 }}>
      <Grid container spacing={2}>

        {products?.map(item => (
          <Grid size={{ md: 4, sm: 6, xs: 12 }} item key={item._id}>
            <Card sx={{ padding: 2 }}>
              <h1>{item.username}</h1>
              <p>
                {item.count}
              </p>
              <AddToCartButton item={item} />
            </Card>
          </Grid>
        ))}
      </Grid>
      <hr style={{ margin: '40px 0' }} />
      <Basket />
    </Box>
  );
}
