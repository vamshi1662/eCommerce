import * as React from "react";
// import DrawerAppBar from './NAvbar1';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect } from "react";

// import React, { createContext, useContext } from 'react';
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "./Newnavbar";
// import LabelBottomNavigation from "./Footer";
// import DirectionSnackbar from "./Footer";
import Footer from "./Footer";


// import { colors } from "@mui/material";

const UserContext = createContext();
export default function ImgMediaCard() {
  // const [cartsvalue, setcartsvalue] = React.useState(1);
  const [products, setproducts] = React.useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setproducts(res.data);
    });
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <ResponsiveAppBar />


      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "90px",
          justifyContent: "center",
        }}
      >
        <div className="saleImg1" style={{ marginBottom: -40, marginTop: 180 }}>
          {" "}
        </div>
        <div className="saleImg2"> </div>
        {products.slice(0, 20).map((value, index) => {
          return (
            <Card
              className="cd"
              sx={{
                backgroundAttachment: "fixed",
                maxWidth: 250,
                mt: 10,
                border: "0.5px solid grey",
                boxShadow: "0px 1px 4px grey",
                borderRadius: 2.5,
                padding: 2.5,
              }}
              key={index}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={value.image}
                style={{ objectFit: "contain" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${value.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="adToCart"
                  sx={{
                    borderColor: "black",
                    color: "black",
                    "&:hover": {
                      borderColor: "black",
                      boxShadow: "0 1px 4px  black",
                    },
                  }}
                  variant="outlined"
                  startIcon={
                    <AddShoppingCartIcon
                      sx={{
                        color: "black",
                      }}
                    />
                  }
                  onClick={() => {
                    axios
                      .post("http://localhost:3000/product", {
                        title: value.title,
                        price: value.price,
                        category: value.category,
                        image: value.image,
                        cartvalue: 1,
                      })
                      .then(console.log("done"));
                  }}
                >
                  Add To Cart
                </Button>
                <Button
                  sx={{
                    color: "black",
                    borderColor: "black",
                    "&:hover": {
                      borderColor: "black",
                      boxShadow: "0 1px 4px  black",
                    },
                  }}
                  variant="outlined"
                  onClick={() => {
                    navigate("/BuysPage");
                  }}
                >
                  Buy
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
export { UserContext };
