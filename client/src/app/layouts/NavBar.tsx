import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  InputBase,
  Button,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link, NavLink } from "react-router-dom";

type NavBarProps = {
  toggleColorMode: () => void;
  mode: "light" | "dark";
};

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

// ---------- Styled Components ----------

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  color: "inherit",
  textDecoration: "none",
  textTransform: "capitalize",
  fontWeight: 500,
  padding: "6px 14px",
  borderRadius: 8,
  transition: "all 0.2s ease",

  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },

  "&.active": {
    backgroundColor: theme.palette.action.selected,
    fontWeight: 600,
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  width: "250px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

// ---------- Component ----------

const NavBar = ({ toggleColorMode, mode }: NavBarProps) => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backdropFilter: "blur(12px)",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? "rgba(25,118,210,0.9)"
            : "rgba(18,18,18,0.9)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* LEFT SECTION */}
        <Typography
          component={Link} // use RouterLink for navigation
          to="/"
          variant="h6"
          sx={{
            fontWeight: 700,
            textDecoration: "none", // remove underline
            color: "inherit", // inherit color from navbar
            "&:hover": {
              color: "primary.main", // optional hover effect
            },
            letterSpacing: 1, // optional spacing for a premium feel
          }}
        >
          Khardi's Store
        </Typography>
        {/* CENTER LINKS */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 1,
          }}
        >
          {midLinks.map((link) => (
            <StyledNavLink key={link.path} to={link.path}>
              {link.title}
            </StyledNavLink>
          ))}
        </Box>

        {/* RIGHT SECTION */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {/* Search */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" />
          </Search>

          {/* Mode Toggle */}
          <IconButton color="inherit" onClick={toggleColorMode}>
            {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>

          {/* Cart */}
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>

          {/* Account */}
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>

          {/* Auth Buttons */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, ml: 1 }}>
            <Button
              component={NavLink}
              to="/login"
              color="inherit"
              sx={{ textTransform: "capitalize" }}
            >
              Login
            </Button>
            <Button
              component={NavLink}
              to="/register"
              variant="contained"
              color="secondary"
              sx={{
                textTransform: "capitalize",
                borderRadius: 20,
                px: 2,
              }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
