import React from "react";
import { globalComponent } from "../../types/components/global-component.type";

export function Subtitle(
  props: { text: string } & globalComponent,
): React.ReactElement {
  return (
    <h3
      className={`row-span-1 flex items-center font-[600] ${props.className}`}
    >
      {props.text}
    </h3>
  );
}
