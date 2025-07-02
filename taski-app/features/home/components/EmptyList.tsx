import EmptyIcon from "@/assets/icons/EmptyIcon";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const EmptyList = () => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Box className="flex-1 items-center justify-center p-4">
      <Box className="flex-col items-center justify-center gap-4">
        <EmptyIcon />

        <AnimatedPressable
          onPressIn={() => {
            scale.value = withSpring(0.95, { stiffness: 200 });
          }}
          onPressOut={() => {
            scale.value = withSpring(1, { stiffness: 200 });
          }}
          onPress={() => {
            router.push("/(tabs)/create");
          }}
          style={animatedStyle}
          className="bg-[#e5f2ff] py-3 px-4 rounded-xl"
        >
          <Box className="flex-row items-center justify-center gap-2">
            <Text className="text-brand text-lg font-semibold">+</Text>
            <Text className="text-brand text-lg font-semibold">
              Create task
            </Text>
          </Box>
        </AnimatedPressable>
      </Box>
    </Box>
  );
};

export default EmptyList;
