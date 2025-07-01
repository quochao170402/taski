import React from "react";
import { Text } from "react-native";
import { twMerge } from "tailwind-merge"; // optional helper
import { Pressable } from "../ui/pressable";

interface Props extends React.ComponentProps<typeof Pressable> {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: number;
}

const CheckBox = ({ checked = false, onChange, size = 24, ...rest }: Props) => {
  return (
    <Pressable
      {...rest}
      onPress={() => onChange?.(!checked)}
      className={twMerge(
        "items-center justify-center rounded-md",
        checked
          ? "bg-brand border-brand"
          : "border-2 border-mutedText bg-white",
        "transition-all"
      )}
      style={{ width: size, height: size }}
    >
      {checked && <Text className="text-white text-lg">✓</Text>}
    </Pressable>
  );
};

export default CheckBox;
