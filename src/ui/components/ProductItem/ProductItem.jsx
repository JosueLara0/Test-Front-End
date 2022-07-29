//* libraries
import { useState } from "react";
import { Typography, Button, Box, Rating, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";
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
  const is640px = useMediaQuery("(max-width:640px)");
  const [isBtnShown, setIsBtnShown] = useState(false);

  const onMouseOver = () => setIsBtnShown(true);

  const onMouseLeave = () => setIsBtnShown(false);

  return (
    <Box sx={styles.box}>
      {/*//?  Product image  */}
      <Box sx={styles.boxProduct}>
        <Box
          aria-label="productImg"
          component="img"
          src={imageUrl}
          alt={productName}
        />

        {listPrice && (
          <Box sx={styles.boxTriangle}>
            <Typography sx={styles.typoOff}>OFF</Typography>
          </Box>
        )}
      </Box>

      {/*//?  Product details  */}
      <Box
        sx={styles.boxData}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
      >
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

        {(isBtnShown || is640px) && (
          <Button sx={styles.button} onClick={() => increment()}>
            <Typography sx={styles.typoButton}>COMPRAR</Typography>
          </Button>
        )}
      </Box>
    </Box>
  );
};

//? Props validations
ProductItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  installments: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number,
      value: PropTypes.number,
    })
  ).isRequired,
  listPrice: PropTypes.number,
  price: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
};
