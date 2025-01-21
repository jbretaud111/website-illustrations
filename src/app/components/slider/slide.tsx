import { ImageProps } from "../types";
import Image from "next/image";

export interface SlideProps {
  background: ImageProps;
  title: string;
  subtitle?: string;
  text?: string;
}

const Slide = ({ title, background }: SlideProps, key: string) => {
  return (
    <div key={key} id={key} className="relative h-full overflow-hidden">
      <div className="flex w-full h-full justify-center items-center">
        <Image
          className="min-h-full max-h-full max-w-none"
          style={{
            objectFit: "contain",
            opacity: 0.8,
          }}
          src={background.path}
          alt={background.alt}
          width={background.width}
          height={background.height}
        ></Image>
      </div>
      <div className="absolute" style={{ bottom: 100, left: 100 }}>
        <h1 className="text-slate-900 font-semibold" style={{ fontSize: 50 }}>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Slide;
