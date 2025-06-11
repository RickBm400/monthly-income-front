import { Card } from "primereact/card";
import { todoCard } from "../types/components/todo-card.types";
import IconComponent from "./icons.component";

export default function TodoCard(props: todoCard) {
  return (
    <>
      <Card
        className="primary-border rounded-[8px] py-4 todo-card__component"
        pt={{
          body: {
            className: "w-full px-2",
          },
          content: {
            className: "flex justify-between items-center",
          },
        }}
      >
        <div className="flex space-x-3">
          <IconComponent icon="store" />
          <span className="w-[180px]">{props.title}</span>
        </div>
        <IconComponent
          icon={props.done ? "checkBoxMarked" : "checkBox"}
          className="ml-auto cursor-pointer"
        />
      </Card>
    </>
  );
}
