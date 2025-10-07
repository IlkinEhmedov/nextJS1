import { Box, Card, Grid } from "@mui/material"

// 🟢 SEO üçün metadata əlavə olunur
export const metadata = {
  title: "News | My App",
  description: "Son xəbərləri burada izləyin — istifadəçilər və məlumatlar haqqında ən son yeniliklər.",
  keywords: ["news", "xəbərlər", "updates", "users", "Next.js","ilkin news next js project"],
  openGraph: {
    title: "News | My App",
    description: "Son xəbərləri burada izləyin — istifadəçilər və məlumatlar haqqında ən son yeniliklər.",
    url: "https://yourwebsite.com/news", // buraya real URL-ni yaz
    siteName: "My App",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // varsa OG image əlavə et
        width: 1200,
        height: 630,
        alt: "News preview",
      },
    ],
    locale: "az_AZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News | My App",
    description: "Son xəbərləri burada izləyin — istifadəçilər və məlumatlar haqqında ən son yeniliklər.",
    images: ["https://yourwebsite.com/og-image.jpg"], // varsa şəkil
  },
};

export default async function News() {
  const response = await fetch('https://chatapp-znz3.onrender.com/api/v1/auth/find-all', { cache: 'force-cache' })
  const products = await response.json()

  return (
    <Box sx={{ padding: 4 }}>
      <Grid container spacing={2}>
        {products?.map(item => (
          <Grid size={{ md: 4, sm: 6, xs: 12 }} item key={item._id}>
            <Card sx={{ padding: 2 }}>
              <h1>{item.username}</h1>
              <p>{item.count}</p>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
