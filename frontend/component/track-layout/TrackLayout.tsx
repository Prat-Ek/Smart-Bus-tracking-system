import TrackSidebar from "@/component/sidebar/TrackSidebar";
import TrackHeader from "@/component/head/TrackHeader";

export default function TrackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <TrackSidebar />

      <div className="flex flex-1 flex-col">
        <TrackHeader />

        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}