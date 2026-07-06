import BusSearchHeader from "@/component/head/BusSearchHeader";
import MapView from "@/component/LiveTracking/MapView";
import RouteSidebar from "@/component/LiveTracking/RouteSidebar";
import Stats from "@/component/stats/Stats";
import TrackLayout from "@/component/track-layout/TrackLayout";
const routes = [
    {
      number: "12A",
      route: "City Center → Airport",
      frequency: "Every 10 min",
      status: "Live",
      color: "bg-primary text-white",
      active: true,
    },
    {
      number: "7B",
      route: "Central Park → Tech Hub",
      frequency: "Every 12 min",
      status: "Live",
      color: "bg-blue-100 text-blue-600",
      active: true,
    },
    {
      number: "9C",
      route: "Railway Station → City Center",
      frequency: "Every 15 min",
      status: "Live",
      color: "bg-purple-100 text-purple-600",
      active: true,
    },
    {
      number: "4D",
      route: "University → Market Street",
      frequency: "Every 20 min",
      status: "Live",
      color: "bg-yellow-100 text-yellow-600",
      active: true,
    },
  ];
export default function Page() {
  return (
    <TrackLayout>
      <BusSearchHeader />
      <div className="p-5 flex gap-4 ">
      <RouteSidebar routes={routes}
        title="Available Routes"
        description=""
        showSearch={false}
      />
      <MapView/>
      </div>

      <Stats />
    </TrackLayout>
  );
}
