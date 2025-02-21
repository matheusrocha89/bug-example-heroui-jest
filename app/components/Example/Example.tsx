import { Button } from "@heroui/button";
type ExampleProps = {
  onPress: () => void;
};

const Example = ({ onPress }: ExampleProps) => {
  return <Button onPress={onPress}>Click Me</Button>;
};

export { Example };
