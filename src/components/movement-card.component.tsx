import { Card } from "primereact/card";
import { movementItem } from "../types/components/movement.types";
import IconComponent from "./icons.component";
import { IncreaseSvg, DecreaseSvg } from "./vectors/vectors.path";
export default function MovementCard(props: movementItem) {
  const columnClass = (justify: string = "start", color: string = "898585") =>
    ` flex justify-${justify} items-center text-[#${color}]`;

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
      <div className={"col-span-2" + columnClass()}>${props.total}</div>
      <div className={"col-span-2" + columnClass()}>{props.card}</div>
      <div className={"col-span-2" + columnClass()}>{props.date}</div>
      <div className={"col-span-1" + columnClass("center")}>
        <IconComponent icon="dots" className="cursor-pointer" />
      </div>
    </Card>
  );
}
