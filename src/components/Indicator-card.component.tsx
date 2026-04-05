import { Card } from "primereact/card";
import {
  indicator,
  indicatorTypeColors,
} from "../types/components/indicators.types";

export default function IndicatorCard(props: indicator) {
  return (
    <Card className="p-4 indicator-card primary-border h-full flex-1 grow-1 basis-1">
      <div className="flex flex-col gap-2 h-full justify-between ">
        <div className="flex justify-between">
          <h3 className="text-sm font-[400]">{props.title}</h3>
          <span
            className={`text-[${indicatorTypeColors[props.type]}] text-md font-[500]`}
          >
            {props.percentage}
          </span>
        </div>
        <span className="text-2xl font-[700]">{props.total}</span>
      </div>
    </Card>
  );
}
