import type { Product as Prod } from "../../models/product";
import { Grid, Container, Typography, Box } from "@mui/material";
import ProductCard from "./ProductCard";

type Props = {
  products: Prod[];
};

const ProductList = ({ products }: Props) => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700}>
          Product Catalog
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Browse our collection
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductList;
