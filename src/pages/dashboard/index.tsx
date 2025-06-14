// import HistoricList from "../../components/historic-list.component";
import { ReactNode } from "react";
import IndicatorBar from "../../components/Indicator-card.component";
import TodoCard from "../../components/todo-card.component";
import { indicatorsArray } from "../../types/components/indicators.types";
import { todoListArray } from "../../types/components/todo-card.types";
import { movementList } from "../../types/components/movement.types";
import MovementCard from "../../components/movement-card.component";
import LineChart from "../../components/charts/linear-chart.component";

export default function dashboard() {
  const sectionTitle = (title: string): ReactNode => {
    return <h3 className="row-span-1 flex items-center font-[600]">{title}</h3>;
  };

  return (
    <div className="col-span-20 h-full w-full grid grid-flow-col grid-cols-20 gap-4">
      <div className="col-span-15 grid grid-flow-row grid-rows-16 h-full gap-4">
        <section className="row-span-3 grid grid-flow-col grid-cols-9 gap-4">
          {indicatorsArray.map((item, index) => (
            <IndicatorBar {...item} key={index} />
          ))}
        </section>

        {sectionTitle("Flujo de Caja")}

        <section className="row-span-6">
          <LineChart />
        </section>

        {sectionTitle("Movimiemtos Recientes")}

        <section className="row-span-6 flex flex-col">
          <div className="overflow-y-scroll basis-0 grow">
            {movementList.map((task, index) => (
              <MovementCard key={index} {...task}></MovementCard>
            ))}
          </div>
        </section>
      </div>
      <div className="col-span-5 grid gap-4 grid-flow-row grid-rows-16 ">
        {sectionTitle("Variable")}

        <section className="bg-blue-400 row-span-7">Estatus</section>

        {sectionTitle("Tareas pendientes")}

        <section className="row-span-7 flex flex-col">
          <div className="overflow-y-scroll basis-1 grow space-y-4 ">
            {todoListArray.map((task, index) => (
              <TodoCard key={index} {...task}></TodoCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
