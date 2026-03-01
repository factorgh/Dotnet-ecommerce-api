import { Link } from "react-router-dom";
import type { Product as Prod } from "../../models/product";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Chip,
  Box,
  Stack,
} from "@mui/material";

type ProductProps = {
  product: Prod;
  // onAddToCart?: (product: Prod) => void;
  // onViewProduct?: (id: number) => void;
};

const ProductCard = ({ product }: ProductProps) => {
  const isOutOfStock = product.quantityInStock === 0;

  return (
    <Card
      sx={{
        maxWidth: 320,
        maxHeight: 400,
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.3s",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-6px)",
        },
      }}
    >
      {/* Product Image */}
      <CardMedia
        component="img"
        height="200"
        image={product.pictureUrl}
        alt={product.name}
        sx={{ objectFit: "cover" }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        {/* Brand + Type */}
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Chip label={product.brand} size="small" />
          <Chip label={product.type} size="small" color="secondary" />
        </Stack>

        {/* Product Name */}
        <Typography variant="subtitle2" fontWeight={600} gutterBottom>
          {product.name}
        </Typography>

        {/* Price + Stock */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" color="primary" fontWeight={700}>
            ${product.price.toFixed(2)}
          </Typography>

          <Typography
            variant="body2"
            color={isOutOfStock ? "error" : "success.main"}
            fontWeight={500}
          >
            {isOutOfStock
              ? "Out of Stock"
              : `${product.quantityInStock} in stock`}
          </Typography>
        </Box>
      </CardContent>

      {/* Actions */}
      <CardActions sx={{ p: 2, gap: 1 }}>
        <Button
          fullWidth
          variant="outlined"
          component={Link}
          to={`/catalog/${product.id}`}
        >
          View
        </Button>

        <Button fullWidth variant="contained" disabled={isOutOfStock}>
          {isOutOfStock ? "Unavailable" : "Add"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
