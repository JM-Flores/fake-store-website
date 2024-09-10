import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

const QuantitySelector = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 0,
      max: 100,
      precision: 0,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({
    width: "40px",
    paddingX: 0,
    textAlign: "center",
    borderColor: "transparent",
    focusBorderColor: "transparent",
    _hover: { borderColor: "transparent" },
  });

  return (
    <HStack maxW="320px" gap={0}>
      <Button {...dec}>-</Button>
      <Input {...input} />
      <Button {...inc}>+</Button>
    </HStack>
  );
};

export default QuantitySelector;
