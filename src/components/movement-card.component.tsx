import { Card } from "primereact/card";
import { movementItem } from "../types/components/movement.types";
import IconComponent from "./icons.component";
import { IncreaseSvg, DecreaseSvg } from "./vectors/vectors.path";
export default function MovementCard(props: movementItem) {
  const columnClass = (
    col: number,
    justify: string = "start",
    color: string = "898585",
  ) => `col-span-${col} flex justify-${justify} items-center text-[#${color}]`;

  const movementIcons = {
    INCOME: <IncreaseSvg />,
    OUTCOME: <DecreaseSvg />,
  };

  return (
    <Card
      className="h-[64px] movement-card__component grid items-center"
      pt={{
        content: {
          className: "grid grid-cols-12",
        },
      }}
    >
      <div className="col-span-5 flex">
        {movementIcons[props.type]}
        <p className="m-0 ml-4">
          <span className="font-[500]">{props.title}</span>
          <br />
          <span className="text-[#AAAAAA] text-[10pt]">by {props.owner}</span>
        </p>
      </div>
      <div className={columnClass(2)}>${props.total}</div>
      <div className={columnClass(2)}>{props.card}</div>
      <div className={columnClass(2)}>{props.date}</div>
      <div className={columnClass(1, "center")}>
        <IconComponent icon="checkBox"></IconComponent>
      </div>
    </Card>
  );
}
