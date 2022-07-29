//* libraries
import { render, screen } from "@testing-library/react";
//* components
import { ProductItem } from "../../../src/ui/components/ProductItem/ProductItem";

describe("Tests in <ProductItem/>", () => {
  const imageUrl =
    "https://media2.giphy.com/media/oxbNORcXx76F2/giphy.gif?cid=aa030f39gigshg8jcumtz662xsloyek0d7jblzpwqvqnxuhh&rid=giphy.gif&ct=g";
  const installments = [{ quantity: 4, value: 100 }];
  const listPrice = 10;
  const price = 20;
  const productName = "Boots";
  const stars = 4;
  const increment = jest.fn();

  test("should make match with the snapshot", () => {
    const { container } = render(
      <ProductItem
        imageUrl={imageUrl}
        installments={installments}
        listPrice={listPrice}
        price={price}
        productName={productName}
        stars={stars}
        increment={increment}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test("should show img with the right url and alt", () => {
    render(
      <ProductItem
        imageUrl={imageUrl}
        installments={installments}
        listPrice={listPrice}
        price={price}
        productName={productName}
        stars={stars}
        increment={increment}
      />
    );

    const { src, alt } = screen.getByLabelText("productImg");
    expect(src).toBe(imageUrl);
    expect(alt).toBe(productName);
  });
});
