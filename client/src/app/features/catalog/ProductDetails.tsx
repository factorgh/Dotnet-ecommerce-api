import { useParams } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useState } from "react";

import { useFetchProductDetailsQuery } from "./CatalogApi";

const Item = styled(Box)(({ theme }) => ({
  width: "100%",
  color: theme.palette.text.primary,
}));

const ProductDetails = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState<number>(1);

  const { data: product, isLoading } = useFetchProductDetailsQuery(
    id ? +id : 0,
  );

  if (!product || isLoading) return <Typography>Loading...</Typography>;

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = parseInt(e.target.value);
    if (isNaN(value) || value < 1) value = 1;
    if (value > product.quantityInStock) value = product.quantityInStock;
    setQuantity(value);
  };

  const handleAddToCart = () => {
    console.log(`Add ${quantity} of product ${product.name} to cart`);
    // Integrate with cart logic here
  };

  return (
    <Box sx={{ flexGrow: 1, py: 8 }}>
      <Grid container spacing={4}>
        {/* IMAGE LEFT */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Item>
            <Box
              component="img"
              src={product.pictureUrl}
              alt={product.name}
              sx={{
                width: "100%",
                borderRadius: 3,
                boxShadow: 3,
                objectFit: "cover",
                maxHeight: 600,
              }}
            />
          </Item>
        </Grid>

        {/* CONTENT RIGHT */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Item>
            <Typography variant="overline" color="text.secondary">
              {product.type} • {product.brand}
            </Typography>

            <Typography variant="h3" fontWeight={700} gutterBottom>
              {product.name}
            </Typography>

            <Typography
              variant="h4"
              color="primary"
              sx={{ mb: 3, fontWeight: 700 }}
            >
              ${product.price}
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              {product.description}
            </Typography>

            <Divider sx={{ mb: 3 }} />

            {/* Quantity Selector */}
            <Box sx={{ mb: 3 }}>
              <TextField
                label="Quantity"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                InputProps={{
                  inputProps: {
                    min: 1,
                    max: product.quantityInStock,
                  },
                }}
                sx={{ width: 120 }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                In Stock: {product.quantityInStock}
              </Typography>
            </Box>

            {/* Buttons */}
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                size="large"
                sx={{ flex: 1 }}
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              <Button variant="outlined" size="large" sx={{ flex: 1 }}>
                Buy Now
              </Button>
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetails;
