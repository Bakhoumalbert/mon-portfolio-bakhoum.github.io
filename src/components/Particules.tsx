import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import particulesConfig from "./config/particules-config";

export const ParticulesBackground: React.FC = () => {
  const particlesInit = async (main: Engine) => {
    // console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <div className="">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particulesConfig}
      />
    </div>
  );
};
