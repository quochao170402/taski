import TaskCard from "@/components/common/TaskCard";
import { Box } from "@/components/ui/box";
import React from "react";
import { ScrollView } from "react-native";

interface Props {
  tasks: Task[];
  onDeleteTask: (taskId: string) => void;
  onToggleTask: (taskId: string, completed: boolean) => void;
}

const HomeContainer = ({ tasks, onDeleteTask, onToggleTask }: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerClassName="pb-4"
    >

      <Box className="flex-1 flex-col gap-4">
        {tasks.map((x) => (
          <TaskCard
            key={x.id}
            task={x}
            onToggle={onToggleTask}
            onDelete={onDeleteTask}
          />
        ))}
      </Box>
    </ScrollView>
  );
};

export default HomeContainer;
