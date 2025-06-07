// import HistoricList from "../../components/historic-list.component";
import IndicatorBar from "../../components/Indicator-card.component";
import { indicatorsArray } from "../../types/dashboard.types";

export default function dashboard() {
  return (
    <>
      <div className="col-span-20 h-full w-full grid grid-flow-col grid-cols-20 gap-4">
        <div className="col-span-15 grid grid-flow-row grid-rows-16 h-full gap-4 ">
          <section className="row-span-3 grid grid-flow-col grid-cols-9 gap-4">
            {indicatorsArray.map((item, index) => (
              <IndicatorBar {...item} key={index} />
            ))}
          </section>
          <h3 className="row-span-1 flex items-center font-[500]">
            Flujo de Caja
          </h3>
          <section className="bg-gray-400 row-span-6">olamundo</section>
          <h3 className="row-span-1 flex items-center font-[500]">
            Movimientos Recientes
          </h3>
          <section className="bg-gray-400 row-span-6"></section>
        </div>
        <div className="col-span-5 grid gap-4 grid-flow-row grid-rows-16 ">
          <section className="bg-blue-400 row-span-8">olamundo</section>
          <section className="bg-blue-400 row-span-8">olamundo</section>
        </div>
      </div>
    </>
  );
}
