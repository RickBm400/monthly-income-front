// import HistoricList from "../../components/historic-list.component";

import IndicatorCard from "../../components/Indicator-card.component";

export default function dashboard() {
  return (
    <div className="grid grid-flow-col grid-cols-12 gap-4 h-full">
      <div className="col-span-8 grow-1 grid-rows-5 grid gap-4">
        <div id="cash_indicators" className="row-span-1 flex flex-wrap gap-4">
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
            type="INCOME"
          />
        </div>
        <div className="row-span-2 bg-red-200">ola</div>
        <div className="row-span-2 bg-red-200">ola</div>
      </div>
      <div className="col-span-4 bg-gray-400 grow-1">a</div>
    </div>
  );
}
