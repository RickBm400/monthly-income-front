import { Card } from "primereact/card";
import {
  indicator,
  indicatorTypeColors,
} from "../types/components/indicators.types";

export default function IndicatorBar(props: indicator) {
  return (
    <>
      <Card className="col-span-3 px-6 indicator-card flex items-center primary-border">
        <p>
          <span className="title">{props.title}</span>
          <br />
          <span className="total">{props.total}</span>
          <br />
          <span
            className="percentage"
            style={{ color: indicatorTypeColors[props.type] }}
          >
            {props.percentage}
          </span>
        </p>
      </Card>
    </>
  );
}
