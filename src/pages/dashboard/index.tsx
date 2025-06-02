// import HistoricList from "../../components/historic-list.component";

export default function dashboard() {
  return (
    <>
      <div className="col-span-20 h-full w-full grid grid-flow-col grid-cols-20 gap-4">
        <div className="col-span-15 grid grid-flow-row grid-rows-15 h-full gap-4 ">
          <section className="row-span-5 grid grid-flow-col gap-4">
            <div className="bg-red-500">map</div>
            <div className="bg-red-500">map</div>
            <div className="bg-red-500">map</div>
          </section>
          <section className="bg-gray-400 row-span-5">olamundo</section>
          <section className="bg-gray-400 row-span-5">olamundo</section>
        </div>
        <div className="col-span-5 grid gap-4 grid-flow-row grid-rows-16 ">
          <section className="bg-blue-400 row-span-8">olamundo</section>
          <section className="bg-blue-400 row-span-8">olamundo</section>
        </div>
      </div>
    </>
  );
}
