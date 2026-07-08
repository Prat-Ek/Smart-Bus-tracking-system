"use client";

import { IoArrowForward, IoChevronDown, IoEyeOutline } from "react-icons/io5";

const schedules = [
  {
    id: 1,
    routeNo: "12A",
    from: "City Center",
    to: "Airport",
    via: "Green Street",
    busNumber: "BA 01 PA 1234",
    firstBus: "05:30 AM",
    lastBus: "10:30 PM",
    frequency: "10 min",
    status: "On Time",
    routeColor: "bg-green-600 text-white",
    statusColor: "bg-green-100 text-green-700",
    active: true,
  },
  {
    id: 2,
    routeNo: "7B",
    from: "Central Park",
    to: "Tech Hub",
    via: "River View",
    busNumber: "BA 01 PA 2345",
    firstBus: "05:45 AM",
    lastBus: "10:15 PM",
    frequency: "12 min",
    status: "On Time",
    routeColor: "bg-blue-100 text-blue-600",
    statusColor: "bg-green-100 text-green-700",
    active: false,
  },
  {
    id: 3,
    routeNo: "9C",
    from: "Railway Station",
    to: "City Center",
    via: "Lake Park",
    busNumber: "BA 01 PA 3456",
    firstBus: "06:00 AM",
    lastBus: "10:45 PM",
    frequency: "15 min",
    status: "Delays",
    routeColor: "bg-purple-100 text-purple-600",
    statusColor: "bg-orange-100 text-orange-700",
    active: false,
  },
  {
    id: 4,
    routeNo: "4D",
    from: "University",
    to: "Market Street",
    via: "Airport Road",
    busNumber: "BA 01 PA 4567",
    firstBus: "06:10 AM",
    lastBus: "10:10 PM",
    frequency: "15 min",
    status: "On Time",
    routeColor: "bg-orange-100 text-orange-600",
    statusColor: "bg-green-100 text-green-700",
    active: false,
  },
  {
    id: 5,
    routeNo: "3A",
    from: "Tech Hub",
    to: "Railway Station",
    via: "Green Street",
    busNumber: "BA 01 PA 5678",
    firstBus: "05:50 AM",
    lastBus: "10:00 PM",
    frequency: "12 min",
    status: "On Time",
    routeColor: "bg-cyan-100 text-cyan-600",
    statusColor: "bg-green-100 text-green-700",
    active: false,
  },
  {
    id: 6,
    routeNo: "5E",
    from: "City Center",
    to: "Lake Park",
    via: "River View",
    busNumber: "BA 01 PA 6789",
    firstBus: "06:05 AM",
    lastBus: "09:55 PM",
    frequency: "20 min",
    status: "Delays",
    routeColor: "bg-pink-100 text-pink-600",
    statusColor: "bg-orange-100 text-orange-700",
    active: false,
  },
];

const BusScheduleTable = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="border-b border-gray-200 px-6 py-4">
        <h3 className="text-lg font-bold text-gray-900">
          Bus Schedules
        </h3>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead className="border-b border-gray-200 bg-gray-50">
            <tr className="text-xs uppercase tracking-wide text-gray-500">
              <th className="px-6 py-3 font-medium">Route</th>
              <th className="px-6 py-3 font-medium">Bus Number</th>
              <th className="px-6 py-3 font-medium">First Bus</th>
              <th className="px-6 py-3 font-medium">Last Bus</th>
              <th className="px-6 py-3 font-medium">Frequency</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 text-center font-medium">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-sm">
            {schedules.map((schedule) => (
              <tr
                key={schedule.id}
                className={`cursor-pointer transition hover:bg-gray-50 ${
                  schedule.active ? "bg-green-50" : ""
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded font-bold ${schedule.routeColor}`}
                    >
                      {schedule.routeNo}
                    </div>

                    <div>
                      <div className="flex items-center gap-2 font-semibold text-gray-900">
                        {schedule.from}

                        <IoArrowForward className="text-xs text-gray-400" />

                        {schedule.to}
                      </div>

                      <p className="text-xs text-gray-500">
                        via {schedule.via}
                      </p>
                    </div>
                  </div>
                </td>

              
                <td className="px-6 py-4 text-gray-600">
                  {schedule.busNumber}
                </td>

             
                <td className="px-6 py-4 font-medium text-gray-900">
                  {schedule.firstBus}
                </td>

               
                <td className="px-6 py-4 font-medium text-gray-900">
                  {schedule.lastBus}
                </td>

               
                <td className="px-6 py-4 text-gray-600">
                  {schedule.frequency}
                </td>

              
                <td className="px-6 py-4">
                  <span
                    className={`rounded-md px-3 py-1 text-xs font-medium ${schedule.statusColor}`}
                  >
                    {schedule.status}
                  </span>
                </td>

               
                <td className="px-6 py-4 text-center">
                  <button className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700">
                    <IoEyeOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
      <div className="flex justify-center border-t border-gray-200 p-4">
        <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900">
          View More Schedules

          <IoChevronDown className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default BusScheduleTable;