import MainSection from "../components/organisms/main-section/main-section";
import SideBar from "../components/organisms/sidebar/sidebar";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/4 max-w-full bg-gray-100 p-4 shadow-lg overflow-hidden">
        <SideBar />
      </div>

      {/* Main Section */}
      <div className="w-3/4 flex-1 p-6 bg-white overflow-auto max-w-full min-w-0">
        <MainSection />
      </div>
    </div>
  );
}
