import { Card } from "primereact/card";
import IconComponent from "./icons.component";

export default function TodoCard() {
  return (
    <>
      <Card
        pt={{
          content: {
            className: "flex justify-between",
          },
        }}
      >
        <div className="flex space-x-3">
          <IconComponent name="store" />
          <span>Compra mensual</span>
        </div>
        <IconComponent name="checkBoxMarked" />
      </Card>
    </>
  );
}
