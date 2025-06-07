import { Card } from "primereact/card";
import Icon from "@mdi/react";
import { mdiCheckboxBlankOutline, mdiCheckboxMarked } from "@mdi/js";

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
        <div className="flex space-x-4">
          <Icon path={mdiCheckboxBlankOutline} size={1} />
          <span>Compra mensual</span>
        </div>
        <Icon path={mdiCheckboxMarked} size={1} />
      </Card>
    </>
  );
}
