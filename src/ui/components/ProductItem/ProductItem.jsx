//* libraries
import { Typography, Button, Box, Rating } from "@mui/material";
//* styles
import { productItemStyles as styles } from "./productItem.styles";

export const ProductItem = ({
  imageUrl,
  installments,
  listPrice,
  price,
  productName,
  stars,
  increment,
}) => {
  return (
    <Box sx={styles.box}>
      {/*//?  Product image  */}
      <Box sx={styles.boxProduct}>
        <Box component="img" src={imageUrl} alt={productName} />

        {listPrice && (
          <Box sx={styles.boxTriangle}>
            <Typography sx={styles.typoOff}>OFF</Typography>
          </Box>
        )}
      </Box>

      {/*//?  Product details  */}
      <Box sx={styles.boxData}>
        <Typography sx={styles.typoName}>{productName}</Typography>

        <Rating name="read-only" value={stars} readOnly sx={styles.rating} />

        {listPrice && (
          <Typography
            sx={styles.typoListPrice}
          >{`de $ ${listPrice}`}</Typography>
        )}

        <Typography sx={styles.typoPrice}>{`por $ ${price}`}</Typography>

        {installments[0] && (
          <Typography
            sx={styles.typoQuantity}
          >{`o en ${installments[0]?.quantity}x de R $ ${installments[0]?.value}`}</Typography>
        )}

        <Button sx={styles.button} onClick={() => increment()}>
          <Typography sx={styles.typoButton}>COMPRAR</Typography>
        </Button>
      </Box>
    </Box>
  );
};
