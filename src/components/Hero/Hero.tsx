const Hero = () => {
  return (
    <section className="flex relative z-20 items-center overflow-hidden">
      <div className="container mx-auto px-6 px-6 flex relative py-16">
        <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
          <span className="w-20 h-2 bg-yellow-600 mb-12"></span>
          <h1 className="font-bebas-neue uppercase text-4xl sm:text-6xl font-black flex flex-col leading-none text-white">
            Hi, {"I'm"}
            <span className="text-5xl sm:text-7xl">Tarik</span>
          </h1>
          <p className="text-sm sm:text-base text-white">
            I blog about web development - especially frontend frameworks like
            Astrobuild or React.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
