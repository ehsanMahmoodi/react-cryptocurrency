import Particles from "reactparticles.js";
const ParticleBackground = () => {
  return (
    <Particles
      id="config-1"
      config="react_particle_config.json"
      style={{
        width: "100%",
        height: "100%",
        opacity: "0.3",
      }}
    />
  );
};

export default ParticleBackground;
