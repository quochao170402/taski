import { CheckIcon } from "@/components/ui/icon";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionContentText,
  AccordionHeader,
  AccordionItem,
} from "../ui/accordion";
import { Box } from "../ui/box";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "../ui/checkbox";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  // Remove checkedIcon, use CheckIcon directly as the component type
  return (
    <Box>
      <Accordion>
        <AccordionItem value={""}>
          <AccordionHeader className="px-4 py-6">
            <Checkbox value={""}>
              <CheckboxIndicator>
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <CheckboxLabel className="text-black">{task.title}</CheckboxLabel>
            </Checkbox>
          </AccordionHeader>
          <AccordionContent>
            <AccordionContentText />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default TaskCard;
