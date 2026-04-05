import { Card } from "primereact/card";
import {
  indicator,
  indicatorTypeColors,
} from "../types/components/indicators.types";

export default function IndicatorCard(props: indicator) {
  return (
    <Card className="col-span-3 px-6 indicator-card flex items-center primary-border h-full flex-1">
      <span className="title font-[600]">{props.title}</span>
      <br />
      <span className="total font-[400]">{props.total}</span>
      <br />
      <span
        className="percentage"
        style={{ color: indicatorTypeColors[props.type] }}
      >
        {props.percentage}
      </span>
    </Card>
  );
}
