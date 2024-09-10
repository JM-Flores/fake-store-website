import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
  refValue?: number;
  onChange?: (value: number) => void;
}

const QuantitySelector = ({ refValue, onChange }: Props) => {
  const [value, setValue] = useState<number>(refValue || 1);

  //If refValue exist, value state will be based on this reference.
  useEffect(() => {
    if (refValue) {
      setValue(refValue);
    }
  }, [refValue]);

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 100,
      precision: 0,
      onChange: (valAsString, valAsNumber) => {
        if (onChange) onChange(valAsNumber);
        if (!refValue) setValue(valAsNumber);
      },
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
      <Input {...input} value={value} />
      <Button {...inc}>+</Button>
    </HStack>
  );
};

export default QuantitySelector;
