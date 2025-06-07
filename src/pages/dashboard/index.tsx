// import HistoricList from "../../components/historic-list.component";
import IndicatorBar from "../../components/Indicator-card.component";

import { indicator } from "../../types/dashboard.types";

export default function dashboard() {
  const indicatorsArray: Array<indicator> = [
    {
      title: "Ingresos Generales",
      total: "$205.409.90",
      percentage: "30% esta semana",
      type: "INCOME",
    },
    {
      title: "Ingresos Generales",
      total: "$205.409.90",
      percentage: "30% esta semana",
      type: "EXPENSE",
    },
    {
      title: "Ingresos Generales",
      total: "$205.409.90",
      percentage: "30% esta semana",
      type: "TRANSACTION",
    },
  ];

  return (
    <>
      <div className="col-span-20 h-full w-full grid grid-flow-col grid-cols-20 gap-4">
        <div className="col-span-15 grid grid-flow-row grid-rows-16 h-full gap-4 ">
          <section className="row-span-3 grid grid-flow-col grid-cols-9 gap-4">
            {indicatorsArray.map((item, index) => (
              <IndicatorBar {...item} key={index} />
            ))}
          </section>
          <section className="bg-gray-400 row-span-7">olamundo</section>
          <section className="bg-gray-400 row-span-6">olamundo</section>
        </div>
        <div className="col-span-5 grid gap-4 grid-flow-row grid-rows-16 ">
          <section className="bg-blue-400 row-span-8">olamundo</section>
          <section className="bg-blue-400 row-span-8">olamundo</section>
        </div>
      </div>
    </>
  );
}
