import { SliderName, sliders } from "@/specs/sliders";
import Slider from "./components/slider/slider";

const Home = () => {
  return (
    <>
      <div className="flex w-full h-screen bg-white overflow-hidden">
        <div
          className="flex justify-center align-middle bg-zinc-950 w-3/4 rotate-6 z-20"
          style={{
            height: "200vh",
            marginTop: "-50vh",
            marginLeft: "-28%",
          }}
        ></div>
        <div
          className="absolute z-50"
          style={{
            top: "calc(50vh)",
            left: "10%",
          }}
        >
          <h1 className="h-10 text-5xl font-bold">Marie Bretaud</h1>
        </div>
        <div
          className="flex z-10"
          style={{
            width: "58%",
          }}
        >
        {Slider(sliders[SliderName.Home])}
        </div>
      </div>
    </>
  );
};

export default Home;
