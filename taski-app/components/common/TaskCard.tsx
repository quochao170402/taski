import MoreIcon from "@/assets/icons/MoreIcon";
import TrashIcon from "@/assets/icons/TrashIcon";
import React, { useState } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { Box } from "../ui/box";
import { Heading } from "../ui/heading";
import { Pressable } from "../ui/pressable";
import { Text } from "../ui/text";
import CheckBox from "./CheckBox";

interface Props {
  task: Task;
  onToggle: (taskId: string, completed: boolean) => void;
  onDelete: (taskId: string) => void;
}

const TaskCard = ({ task, onToggle, onDelete }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const [swiped, setSwiped] = useState(false);

  const handleToggleExpand = () => setExpanded((prev) => !prev);

  const renderRightActions = () => (
    <View className="flex justify-center items-center px-4">
      <Pressable onPress={() => onDelete(task.id)}>
        <TrashIcon />
      </Pressable>
    </View>
  );

  const handleSwipeableOpen = () => {
    setSwiped(true);
    setExpanded(false);
  };

  return (
    <GestureHandlerRootView className="flex-1">
      <Swipeable
        renderRightActions={renderRightActions}
        onSwipeableOpen={handleSwipeableOpen}
        onSwipeableClose={() => setSwiped(false)}
      >
        <Box className="flex-row items-start justify-between p-4 bg-cardBg rounded-lg gap-4">
          <CheckBox
            checked={task.completed}
            onChange={() => onToggle(task.id, !task.completed)}
          />

          <Pressable className="flex-1" onPress={handleToggleExpand}>
            {/* Title and (conditionally) MoreIcon */}
            <Box className="flex-row items-start justify-between">
              <Heading className="text-base font-semibold flex-1">
                {task.title}
              </Heading>

              {!swiped && task.description && !expanded && <MoreIcon />}
            </Box>

            {expanded && task.description && (
              <Box className="mt-2">
                <Text className="text-mutedText font-medium text-sm/[18px]">
                  {task.description}
                </Text>
              </Box>
            )}
          </Pressable>
        </Box>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default TaskCard;
