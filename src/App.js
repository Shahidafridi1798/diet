import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import CssBaseline from "@mui/material/CssBaseline";
import Fitness from "./components/Fitness";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { ProductList } from "./components/Products";
import { ProductDetailsPage } from "./components/ProductDetailsPage";
import { NotFoundPage } from "./components/NotFoundPage";
import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { Login } from "./components/login";
import { SignUp } from "./components/Signup";
import { MealCalendar } from "./components/MealCalendar";

export default function App() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: 0, minHeight: "100vh" }} elevation={24}>
        <CssBaseline />
        <div className="App">
          <AppBar>
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/Home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/Products")}>
                Products
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate("/CalorieTracker")}
              >
              Tracker
              </Button>
              {/* <Button color="inherit" 
  onClick={() => navigate("/Products/add")}>Add-Product</Button> */}
              <Button color="inherit" onClick={() => navigate("/MealPlanner")}>
                Planner
              </Button>

              <Button
                className="btn"
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {" "}
                {mode === "light" ? "dark" : "light"} Mode
              </Button>
              <Box sx={{ flexGrow: 0 }} className="bar">
                <Tooltip>
                  <IconButton
                    className="btnn"
                    onClick={() => {
                      navigate("/Home");
                    }}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://i.pinimg.com/736x/f8/2f/ba/f82fbac7514f944aacc0257445c1f89e.jpg"
                    />
                  </IconButton>
                </Tooltip>
                {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
              </Box>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Products" element={<ProductList />} />
            <Route path="/CalorieTracker" element={<Fitness />} />
            {/* <Route
              path="/Products/add"
              element={
                <AddProduct productList={productList} setProductList={setProductList} />
              }
            /> */}

            <Route
              path="Products/:productid"
              element={<ProductDetailsPage productList={ProductList} />}
            />
            <Route path="login" element={<Login />} />

            <Route path="Signup" element={<SignUp />} />

            <Route path="MealPlanner" element={<MealCalendar />} />

            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate replace to="/404" />} />
            <Route path="/*" element={<Navigate replace to="/404" />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
  //JSX ends
}
