import Calender from "../../components/organisms/Calender"
import Modal from "../../components/organisms/Modal";
import Header from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar";
import ProfileInput from "@/components/organisms/ProfileInput";
import RecentReport from "@/components/molecules/RecentReport";

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
                <ProfileInput />
              </div>
            </div>
            <div style={{width: "45%"}} className="flex flex-col">
              <div className="mb-5 pt-5 pl-7 h-3/5 w-5/6">
                <Calender />
              </div>
              <RecentReport />
            </div>
          </div>
        </div>
      </div>
      <Modal />
    </>
  )
}
