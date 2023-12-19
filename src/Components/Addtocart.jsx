import React, { useEffect, useState } from "react";
import axios from "axios";
import ResponsiveAppBar from "./Newnavbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Addtocart() {
  const [cart, setCart] = useState([]);
  const [pri, setPri] = useState(0); // Initialize pri as a numeric value

  useEffect(() => {
    axios.get("http://localhost:3000/product").then((res) => {
      setCart(res.data);
      updateSubtotal(res.data)
    });
  }, []);

  const handleIncrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].cartvalue += 1;
    setCart(updatedCart);
    updateSubtotal(updatedCart);
  };

  const handleDecrement = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].cartvalue = Math.max(updatedCart[index].cartvalue - 1, 1);
    setCart(updatedCart);
    updateSubtotal(cart);
  };



  const updateSubtotal = (cart) => {
    const total = cart.reduce((acc, item) => acc + item.cartvalue * item.price, 0);
    setPri(total); // Always set pri as a numeric value

    // if()

  };

  return (
    <>

      <ResponsiveAppBar />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "90px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {cart.slice(0,).map((value, index) => {
          return (
            <Card
              key={index}
              sx={{

                maxWidth: 345,
                maxHeight: 545,
                border: "1px solid grey",
                mt: 10,
                boxShadow: "0 2px 3px grey",
                borderRadius: "6px",
              }}

            >

              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={value.image}
                style={{ objectFit: "contain" }}
                sx={{ mt: 4 }}
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${value.price}
                </Typography>
                <Button variant="outlined" sx={{
                  mt: 5, color: "black",
                  borderColor: "black",
                  "&:hover": {
                    borderColor: "black",
                    boxShadow: "0 1px 4px  black",
                  },
                }}>
                  Buy
                </Button>
                <Button variant="outlined" sx={{
                  mt: 5, ml: 10, color: "black",
                  borderColor: "black",
                  "&:hover": {
                    borderColor: "black",
                    boxShadow: "0 1px 4px  black",
                  },
                }}
                  onClick={() => {
                    axios.delete("http://localhost:3000/product/" + value.id)
                      .then(() => window.location.reload(true))


                  }}
                >
                  Remove item
                </Button>
                <h5>-Quantity-</h5>


                <h6>{value.cartvalue}</h6>
              </CardContent>
              <CardActions>
                {/* Additional actions if needed */}
              </CardActions>
              <Box
                sx={{
                  color: "action.active",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center",
                  marginBottom: 20,

                  "& > *": {},
                  "& .MuiBadge-root": {
                    marginRight: 2.5,
                  },
                }}
              >
                <div>
                  <Badge color="primary" badgeContent={value.cartvalue}>
                    <ShoppingCartIcon />
                  </Badge>
                  <ButtonGroup>
                    <Button aria-label="reduce" onClick={() => handleDecrement(index)}>
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <Button aria-label="increase" onClick={() => handleIncrement(index)}>
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>
                </div>
              </Box>
            </Card>
          );
        })}
      </div>

      <Box
        component="footer"
        sx={{
          textAlign: "center",
          fontFamily: "inherit",
          fontSize: "19px",
          mt: "5%",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 6,
        }}
      >
        Subtotal: ${pri.toFixed(2)}
      </Box>

    </>
  );
}

export default Addtocart;
