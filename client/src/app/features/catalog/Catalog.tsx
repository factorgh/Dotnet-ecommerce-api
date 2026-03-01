import { Container, Typography } from "@mui/material";
import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./CatalogApi";

const Catalog = () => {
  const { data: products, isLoading } = useFetchProductsQuery();

  if (isLoading || !products) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography variant="h6" color="text.secondary">
          Loading products...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Empty State */}
      {products.length === 0 && (
        <Typography variant="h6" color="text.secondary">
          No products available.
        </Typography>
      )}

      {/* Products Grid */}
      <ProductList products={products} />
    </Container>
  );
};

export default Catalog;
