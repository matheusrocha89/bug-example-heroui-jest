import { render, screen } from "@testing-library/react";
import { act } from "react";

import { Example } from "./Example";

describe("Example", () => {
  it("Clicks the button", () => {
    const onPress = jest.fn();

    render(<Example onPress={onPress} />);
    act(() => {
      screen.getByText("Click Me").click();
    });
    expect(onPress).toHaveBeenCalled();
  });
});
