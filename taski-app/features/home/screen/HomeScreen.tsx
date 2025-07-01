import TaskCard from "@/components/common/TaskCard";
import { VStack } from "@/components/ui/vstack";
import React from "react";

const HomeScreen = () => {
  const dummyTasks: Task[] = [
    {
      id: "1",
      title: "Buy groceries",
      completed: false,
      description: "Milk, eggs, bread, and fruits",
      createdAt: new Date("2025-06-30T08:00:00Z"),
      updatedAt: new Date("2025-06-30T08:00:00Z"),
    },
    {
      id: "2",
      title: "Finish React Native project",
      completed: true,
      description: "Implement Create tab and task form",
      createdAt: new Date("2025-06-28T14:30:00Z"),
      updatedAt: new Date("2025-06-29T09:45:00Z"),
    },
    {
      id: "3",
      title: "Read DDD book",
      completed: false,
      createdAt: new Date("2025-06-25T10:00:00Z"),
    },
    {
      id: "4",
      title: "Clean the house",
      completed: true,
      createdAt: new Date("2025-06-26T15:20:00Z"),
      updatedAt: new Date("2025-06-26T17:00:00Z"),
    },
    {
      id: "5",
      title: "Walk the dog",
      completed: false,
      createdAt: new Date("2025-06-29T06:45:00Z"),
    },
    {
      id: "6",
      title: "Schedule doctor appointment",
      completed: false,
      description: "Check availability next week",
      createdAt: new Date("2025-06-24T12:00:00Z"),
    },
    {
      id: "7",
      title: "Deploy API to production",
      completed: true,
      createdAt: new Date("2025-06-23T11:00:00Z"),
      updatedAt: new Date("2025-06-24T13:00:00Z"),
    },
    {
      id: "8",
      title: "Update resume",
      completed: false,
      createdAt: new Date("2025-06-20T09:00:00Z"),
    },
    {
      id: "9",
      title: "Plan vacation",
      completed: true,
      description: "Look into Da Nang or Phu Quoc",
      createdAt: new Date("2025-06-15T08:15:00Z"),
      updatedAt: new Date("2025-06-17T16:00:00Z"),
    },
    {
      id: "10",
      title: "Review pull requests",
      completed: false,
      createdAt: new Date("2025-06-30T13:25:00Z"),
    },
  ];

  return (
    <VStack space="2xl">
      {dummyTasks.map((x) => (
        <TaskCard key={x.id} task={x} />
      ))}
    </VStack>
  );
};

export default HomeScreen;
