import Image from "next/image";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Icon from "./components/Icon";

export default function Home() {
  return (
    <main>
      <div>
        <Icon />
              <NavBar />
        <div className="flex flex-col min-h-screen items-center justify-between p-24">
          <div>
            <div className="flex justify-between w-full">
            </div>
            <div>
              <Projects />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
