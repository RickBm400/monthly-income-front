import React from "react";

export function SectionTitle(props: { text: string }): React.ReactElement {
  return (
    <h3 className="row-span-1 flex items-center font-[600]">{props.text}</h3>
  );
}
