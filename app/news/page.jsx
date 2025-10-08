import SearchInput from "../../components/SearchInput";
import { Box, Card, Grid } from "@mui/material";

// 🟢 Metadata
export const metadata = {
  title: "News | My App",
  description:
    "Son xəbərləri burada izləyin — istifadəçilər və məlumatlar haqqında ən son yeniliklər.",
};

export default async function News({ searchParams }) {
  const search = await searchParams;
  const searchValue = search.search

  const res = await fetch(
    "https://chatapp-znz3.onrender.com/api/v1/auth/find-all",
    { cache: "force-cache" }
  );
  const products = await res.json();

  const filtered = searchValue
    ? products.filter((item) =>
      item.username?.toLowerCase().includes(searchValue.toLowerCase())
    )
    : products;

  return (
    <Box sx={{ padding: 4 }}>
      <h1>News</h1>
      <SearchInput />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        {filtered?.length ? (
          filtered.map((item) => (
            <Grid key={item._id} size={{ md: 2, sm: 6, xs: 12 }}>
              <Card sx={{ padding: 2 }}>
                <h2>{item.username}</h2>
              </Card>
            </Grid>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </Grid>
    </Box>
  );
}
