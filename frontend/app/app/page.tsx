import Calender from "../components/organisms/Calender"
import Modal from "../components/molecules/Modal";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";
import ResultInput from "@/components/organisms/ResultInput";

export default function Home() {
  return (
    <>
      <div className="flex w-full h-screen text-stone-600 font-bold">
        <div className="w-1/5 flex flex-col bg-slate-500 h-full justify-evenly items-center">
          <Sidebar />
        </div>
        <div className="flex-1 flex-col h-full">
          <Header />
          <div className="flex flex-1" style={{height: "92%"}}>
            <div className="flex" style={{width: "55%"}}>
              <div className="w-full border-r-4 border-stone-400">
                <ResultInput />
              </div>
            </div>
            <div style={{width: "45%"}} className="flex flex-col">
              <div className="mb-5 pt-5 pl-7 h-3/5 w-5/6">
                <Calender />
              </div>
              <div className="h-2/5 border-t-4 border-stone-400">
                <div className="text-center p-3 stroke-inherit text-xl text-stone-600 h-1/5">最近の記録</div>
                <div className="recent-records-box flex flex-col justify-start items-center overflow-scroll" style={{height: "65%"}}>
                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                  <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </>
  )
}
