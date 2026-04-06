// import HistoricList from "../../components/historic-list.component";

import { DounugthChart } from "../../components/charts/dounugth-chart.component";
import IndicatorCard from "../../components/Indicator-card.component";
import { Subtitle } from "../../components/shared/SectionTitle";

export default function dashboard() {
  return (
    <div className="grid grid-flow-col grid-cols-12 gap-4 h-full">
      <div className="col-span-8 grid grid-flow-row grid-rows-8 gap-4">
        <div
          id="cash_indicators"
          className="row-span-1 flex flex-wrap gap-4 grow-1"
        >
          <IndicatorCard
            title="Income"
            total="$ 1.000.000"
            percentage="+10%"
            type="INCOME"
          />
          <IndicatorCard
            title="Income"
            total="$ 1.000.000"
            percentage="+10%"
            type="INCOME"
          />
          <IndicatorCard
            title="Income"
            total="$ 1.000.000"
            percentage="+10%"
            type="EXPENSE"
          />
        </div>
        <div className="row-span-4 bg-green-100">ola</div>
        <div className="row-span-3 bg-green-100">ola</div>
      </div>
      <div className="col-span-4 bg-gray-100 grow-1 p-4 rounded-[--corners-sm]]">
        <Subtitle text="Category Distribution" className="pb-4" />
        <DounugthChart />
      </div>
    </div>
  );
}
