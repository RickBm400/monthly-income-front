import { Outlet } from "react-router";
import { ListBox, ListBoxChangeEvent } from "primereact/listbox";
import { useState } from "react";

export default function Sidebar() {
  const [selectedItem, setSelectedItem] = useState("/dashboard");
  const options = [
    { label: "Dashboard", value: "/dashboard" },
    { label: "Calendario", value: "/purchases" },
    { label: "Histórico", value: "/historic" },
    { label: "Productos", value: "/cards" },
    { label: "Objetivos", value: "/tasks" },
  ];

  /**
   * Handles the change event from the ListBox component.
   *
   * Updates the selected item state if a valid value is provided in the event.
   *
   * @param e - The ListBoxChangeEvent containing the new selected value.
   */
  function redirect(e: ListBoxChangeEvent) {
    if (e.value) {
      setSelectedItem(e.value);
    }
  }

  return (
    <div className="grid grid-cols-24 grid-flow-col gap-4 p-4 h-screen w-screen bg-[--black-color]">
      <aside className="col-span-4">
        <ListBox
          pt={{
            list: {
              className: "space-y-2 mx-2",
            },
            item: {
              className:
                "text-[14px] py-2 px-3 rounded-[8px] text-white font-[500]",
            },
          }}
          value={selectedItem}
          optionLabel="label"
          options={options}
          focusOnHover
          onChange={redirect}
          unstyled={false}
          aria-selected={true}
        ></ListBox>
      </aside>
      <div className="bg-white w-full col-span-20 rounded-[--corners-sm] p-4">
        <Outlet />
      </div>
    </div>
  );
}
