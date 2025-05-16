import type { ReactElement } from "react";

import { HeroUIProvider } from "@heroui/system";
import { render, RenderOptions } from "@testing-library/react";

interface CustomProviderProps {
  children: React.ReactNode;
}

const customRender = (
  ui: ReactElement,
  {
    disableRipple = true,
    ...options
  }: RenderOptions & { disableRipple?: boolean } = {}
) => {
  const Wrapper = ({ children }: CustomProviderProps) => (
    <HeroUIProvider disableRipple={disableRipple}>{children}</HeroUIProvider>
  );

  return render(ui, { wrapper: Wrapper, ...options });
};

export * from "@testing-library/react";
export { customRender as render };
