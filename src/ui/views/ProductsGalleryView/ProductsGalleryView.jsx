//* libraries
import { useContext, useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
//* context
import { UserContext } from "../../context/UserContext";
//* styles
import { galleryStyles as styles } from "./productsGalleryView.styles";
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

  return (
    <Grid container direction="row" sx={styles.gridContainer}>
      <Grid item sx={styles.gridLocation}>
        <Typography sx={styles.typoTitle}>Más Vendidos</Typography>
        <Box sx={styles.boxBar}></Box>
      </Grid>

      <Grid item sx={styles.gridProduct}>
        {data?.map((product) => (
          <ProductItem
            key={product.productId}
            {...product}
            increment={increment}
          />
        ))}
      </Grid>
    </Grid>
  );
};
