//* libraries
import { render } from "@testing-library/react";
//* components
import { Input } from "../../../src/ui/components/Input/Input";

describe("Tests in <Input />", () => {
  const label = "Ingresa tu nombre";
  const type = "text";
  const name = "name";
  const onInputChange = jest.fn();

  test("should make match with the snapshot", () => {
    const { container } = render(
      <Input label={label} type={type} name={name} onChange={onInputChange} />
    );

    expect(container).toMatchSnapshot();
  });
});
