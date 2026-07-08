import NextDepartures from "@/component/features/NextDepartures";
import RouteTimeline from "@/component/features/RouteTimeline";
import ScheduleDay from "@/component/head/ScheduleDay";
import ScheduleHeader from "@/component/head/ScheduleHeader";
import BusScheduleTable from "@/component/table/BusScheduleTable";
import TrackLayout from "@/component/track-layout/TrackLayout";
import { Download, FileText } from "lucide-react";

const page = () => {
  return (
    <TrackLayout>
      <div className="flex  gap-5">
        <div className="flex flex-col gap-3">
          <ScheduleHeader />
          <BusScheduleTable />
        </div>
        <div className="flex flex-col gap-2">
          <NextDepartures />
          <RouteTimeline/>
          <div className="bg-green-50 rounded-xl border border-green-100 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="text-2xl text-green-600"/>
              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Download Full Schedule
                </h4>
                <p className="text-xs text-gray-500">PDF Format</p>
              </div>
            </div>
            <button className="w-8 h-8 rounded bg-white border border-green-200 text-green-600 flex items-center justify-center hover:bg-green-100 transition-colors">
              <Download className="text-sm"></Download>
            </button>
          </div>
        </div>
      </div>
    </TrackLayout>
  );
};

export default page;
