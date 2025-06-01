import HistoricList from "../../components/historic-list.component";

export default function dashboard() {
  return (
    <>
      <div className=" h-screen w-screen bg-red-300 grid items-center justify-center">
        <HistoricList />
      </div>
    </>
  );
}
