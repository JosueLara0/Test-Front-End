//* libraries
import { useContext, useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import Slider from "react-slick";
//* styles
import { galleryStyles as styles } from "./productsGalleryView.styles";
import "./sliderStyles.css";
//* icons
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
//* context
import { UserContext } from "../../context/UserContext";
//* components
import { ProductItem } from "../../components";
//* hooks
import { useFetch } from "../../hooks";
//* utils
import { productsUrl as url } from "../../utils";

export const ProductsGalleryView = () => {
  const { setCart, cart } = useContext(UserContext);

  const { data, isLoading, hasError } = useFetch(url);

  const increment = () => setCart((current) => current + 1);

  useEffect(() => {
    localStorage.setItem("cartCounter", cart.toString());
  }, [cart]);

  if (isLoading) {
    return (
      <Grid sx={styles.gridContainer}>
        <Typography sx={styles.typoTitle}>Cargando...</Typography>
      </Grid>
    );
  }

  if (hasError) {
    return (
      <Grid sx={styles.gridContainer}>
        <Typography sx={styles.typoTitle}>
          Los sentimos, ha habido un error al cargar la pagina. Vuelva a
          intentarlo.
        </Typography>
      </Grid>
    );
  }

  return (
    <Grid sx={styles.gridContainer}>
      <Grid sx={styles.gridLocation}>
        <Typography sx={styles.typoTitle}>Más Vendidos</Typography>
        <Box sx={styles.boxBar}></Box>
      </Grid>

      <Slider {...settings}>
        {data.map((product) => (
          <ProductItem
            key={product.productId}
            {...product}
            increment={increment}
          />
        ))}
      </Slider>
    </Grid>
  );
};

//? Slider views config
export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <ArrowBackIos />,
  nextArrow: <ArrowForwardIos />,
  className: "react__slick__slider__parent",
  dotsClass: "button__bar",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 790,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      },
    },
  ],
};
