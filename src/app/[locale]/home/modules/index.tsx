import { ModulesType } from "../types";
import Banner from "./Banner";
import Brands from "./Brands";
import Categories from "./Categories";
import Products from "./Products";
import SlideShow from "./SlideShow";

const modulesList: ModulesType = {
  
  slider: SlideShow,
  
  categories: Categories,
  
  productsCollection: Products,
  
  oneBanner: Banner,
  
  twoBanners: Banner,

  featured: Products,

  brands: Brands,
};

export default function Modules({ modules }: any) {
  console.log(modules);
  return (
    <>
      {modules.map((module: any) => {
        const Module = modulesList[module.type] || null;

        if (Module) {
          return <Module record={module} />;
        }

        return <></>;
      })}
    </>
  );
}
