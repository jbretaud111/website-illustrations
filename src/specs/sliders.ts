import { SliderProps } from "@/app/components/slider/slider";
import { ImageProps } from "@/app/components/types";

export enum SliderName {
  Home = "home",
}
export enum ImageName {
  Marrakech_medina = "marrakech_medina",
  SFH = "SFH",
}

export const images: Record<ImageName, ImageProps> = {
  [ImageName.Marrakech_medina]: {
    path: "/images/medina_marrakech.jpg",
    alt: "",
    title: "",
    width: 2551,
    height: 1893,
  },
  [ImageName.SFH]: {
    path: "/images/dessin SFH 2.jpg",
    alt: "",
    title: "",
    width: 2551,
    height: 1893,
  },
};

export const sliders: Record<SliderName, Pick<SliderProps, "slides">> = {
  [SliderName.Home]: {
    slides: [
      {
        background: images[ImageName.Marrakech_medina],
        title: "Paysages et perspectives",
      },
      {
        background: images[ImageName.SFH],
        title: "Panneaux pedagogiques",
      },
    ],
  },
};
