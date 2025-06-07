// import HistoricList from "../../components/historic-list.component";
import { ReactNode } from "react";
import IndicatorBar from "../../components/Indicator-card.component";
import TodoCard from "../../components/todo-card.component";
import { indicatorsArray, todoListArray } from "../../types/dashboard.types";

export default function dashboard() {
  const sectionTitle = (title: string): ReactNode => {
    return <h3 className="row-span-1 flex items-center font-[600]">{title}</h3>;
  };

  return (
    <>
      <div className="col-span-20 h-full w-full grid grid-flow-col grid-cols-20 gap-4">
        <div className="col-span-15 grid grid-flow-row grid-rows-16 h-full gap-4 ">
          <section className="row-span-3 grid grid-flow-col grid-cols-9 gap-4">
            {indicatorsArray.map((item, index) => (
              <IndicatorBar {...item} key={index} />
            ))}
          </section>

          {sectionTitle("Flujo de Caja")}

          <section className="bg-gray-400 row-span-6">olamundo</section>

          {sectionTitle("Movimiemtos Recientes")}

          <section className="bg-gray-400 row-span-6"></section>
        </div>
        <div className="col-span-5 grid gap-4 grid-flow-row grid-rows-16 ">
          {sectionTitle("Variable")}
          <section className="bg-blue-400 row-span-7">holamundo</section>
          {sectionTitle("Tareas pendientes")}
          <section className=" row-span-7">
            {todoListArray.map((task, index) => (
              <TodoCard key={index}></TodoCard>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
