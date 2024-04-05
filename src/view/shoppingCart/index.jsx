import { Button, Card, CardHeader, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useQuery } from "@tanstack/react-query";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCartItem } from "../../app/slices/cartSlice";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ShoppingCart = () => {
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { data: shoppingCartData } = useQuery({
    queryKey: ["shoppingData"],
    queryFn: async () => {
      const data = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => json);
      return data;
    },
  });

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems, shoppingCartData]);

  const handleItemClick = (item) => {
    console.log(item);
    dispatch(addToCart(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeCartItem(item));
  };

  useEffect(() => {
    console.log({ shoppingCartData });
  }, [shoppingCartData]);

  return (
    <>
      <Grid container spacing={2}>
        {shoppingCartData?.map((item, index) => (
          <Grid key={index} xs={12} sm={6} md={3} item>
            <Card
              elevation={5}
              sx={{
                maxWidth: 345,
                // cursor: "pointer",
                borderRadius: "20px",
                padding: 2,
              }}
            >
              <CardHeader
                sx={{ display: "flex", whiteSpace: "nowrap" }}
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={
                  <Typography
                    sx={{
                      display: "block",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      maxWidth: "50px",
                    }}
                    variant="caption"
                  >
                    {item?.title}
                  </Typography>
                }
                subheader={`Rs.${item?.price}`}
                className="tw-h-10"
              />
              <CardMedia
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img className="tw-h-80 tw-object-contain" src={item?.image} />
              </CardMedia>

              <CardActions className="tw-flex tw-justify-around">
                {cartItems?.some((element) => element?.id === item?.id) ? (
                  <>
                    <p className="tw-font-bold tw-text-blue-700 tw-text-xs tw-cursor-default">
                      Already in Cart
                    </p>
                    <a
                      onClick={() => handleRemoveItem(item)}
                      className="tw-text-red-500 tw-cursor-pointer tw-text-xs tw-border-2 tw-p-2 tw-border-red-300 tw-rounded-full"
                    >
                      remove
                    </a>
                  </>
                ) : (
                  <Button
                    onClick={() => handleItemClick(item)}
                    sx={{ background: "" }}
                    disableElevation
                    component="label"
                    variant="outlined"
                    startIcon={<ShoppingCartIcon />}
                  >
                    Add to cart
                  </Button>
                )}
                <Button
                  onClick={() => handleItemClick(item)}
                  sx={{ background: "" }}
                  disableElevation
                  component="label"
                  variant="contained"
                  color="success"
                  // startIcon={<ShoppingCartIcon />}
                >
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ShoppingCart;
