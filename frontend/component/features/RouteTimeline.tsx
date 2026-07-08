import React from "react";

interface RouteStop {
  id: number;
  name: string;
  time: string;
  type: "start" | "stop" | "end";
}

const routeStops: RouteStop[] = [
  {
    id: 1,
    name: "City Center",
    time: "05:30 AM",
    type: "start",
  },
  {
    id: 2,
    name: "Green Street",
    time: "05:33 AM",
    type: "stop",
  },
  {
    id: 3,
    name: "River View",
    time: "05:37 AM",
    type: "stop",
  },
  {
    id: 4,
    name: "Airport",
    time: "06:02 AM",
    type: "end",
  },
];

const RouteTimeline = () => {
  return (
    <div className="p-5">
      <h4 className="mb-5 text-sm font-bold text-gray-900">
        Route Stops
      </h4>

      <div className="relative">
        {routeStops.map((stop, index) => (
          <div key={stop.id} className="relative flex gap-4 pb-8 ">
          
            <div className="relative flex flex-col items-center">
             
              {index !== routeStops.length - 1 && (
                <div className="absolute top-5 h-full w-0.5 bg-gray-200"></div>
              )}

             
              {stop.type === "start" || stop.type === "end" ? (
                <div className="z-10 h-4 w-4 rounded-full border-4 border-green-600 bg-white"></div>
              ) : (
                <div className="z-10 flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-[10px] font-bold text-green-700">
                  {index}
                </div>
              )}
            </div>

           
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className={`text-sm ${
                    stop.type === "start" || stop.type === "end"
                      ? "font-semibold text-gray-900"
                      : "text-gray-800"
                  }`}
                >
                  {stop.name}
                </span>

                {stop.type === "start" && (
                  <span className="rounded bg-green-50 px-2 py-0.5 text-[10px] font-medium uppercase text-green-700">
                    Start
                  </span>
                )}

                {stop.type === "end" && (
                  <span className="rounded border border-green-100 bg-green-50 px-2 py-0.5 text-[10px] font-medium uppercase text-green-700">
                    End
                  </span>
                )}
              </div>

              <span className="text-sm text-gray-600">
                {stop.time}
              </span>
            </div>
          </div>
        ))}

       
        <div className="ml-[7px] mt-1 flex flex-col gap-1">
          <div className="h-1 w-1 rounded-full bg-gray-300"></div>
          <div className="h-1 w-1 rounded-full bg-gray-300"></div>
          <div className="h-1 w-1 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default RouteTimeline;