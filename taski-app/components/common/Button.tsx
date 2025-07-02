import React from "react";
import { Pressable, PressableProps } from "react-native";

interface Props extends PressableProps {
  className?: string;
  children?: React.ReactNode;
}

const Button = ({ children, className = "", ...rest }: Props) => {
  return (
    <Pressable
      className={`flex-row items-center justify-center px-4 py-3 rounded-lg ${className}`}
      {...rest}
    >
      {children}
    </Pressable>
  );
};

export default Button;
