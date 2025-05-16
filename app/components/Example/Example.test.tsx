import { act } from "react";

import { render, screen } from "../../test-utils";

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
