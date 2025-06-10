import { Card } from "primereact/card";
import IconComponent from "./icons.component";

export default function TodoCard() {
  return (
    <>
      <Card
        className="primary-border h-[42px] rounded-[8px] flex items-center"
        pt={{
          body: {
            className: "w-full px-2",
          },
          content: {
            className: "flex justify-between",
          },
        }}
      >
        <div className="flex space-x-3">
          <IconComponent icon="store" />
          <span>Compra mensual</span>
        </div>
        <IconComponent icon="checkBoxMarked" className="ml-auto" />
      </Card>
    </>
  );
}
