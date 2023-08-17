import dell from "../../data/dell.json";
import gaming from "../../data/gaming.json";
import gateway from "../../data/gateway.json";
import hp from "../../data/hp.json";
import lenovo from "../../data/lenovo.json";
import monitors from "../../data/monitors.json";
import other from "../../data/other.json";
import GridCard from "./GridCard";

const brandArray = [
  { name: "dell", data: dell },
  { name: "gaming", data: gaming },
  { name: "gateway", data: gateway },
  { name: "hp", data: hp },
  { name: "lenovo", data: lenovo },
  { name: "monitors", data: monitors },
  { name: "other", data: other },
];

const GridSection = () => {
  return (
    <>
      {brandArray.map((brand, index)=> (
        <section key={index} className="container my-12 mx-auto px-4 md:px-12">
          <h2 className="mb-4 text-3xl capitalize text-left font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">{brand.name}</span></h2>
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {brand.data.product.map((product, productIndex) => (
              <div
                key={productIndex}
                className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              >
                <GridCard
                  imgSrc={product.imgSrc} 
                  description={product.description}
                  screen_size={product.screen_size}
                  resolution={product.resolution}
                  processor={product.processor}
                  storage={product.storage}
                  memory={product.memory}
                  operating_system={product.operating_system}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default GridSection;
