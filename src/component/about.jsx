export const About = () => {
  return (
    <div>
      <section className="mt-34.5">
        {/* About hero */}
        <div className="max-w-141.5 mx-auto flex flex-col gap-4">
          <h1 className="font-display text-5xl/15 font-bold text-center mx-auto">
            {" "}
            Building The Future of Work
          </h1>
        </div>
        <img
          src="/assets/aboutHero.png"
          alt="Image of an office setup"
          className="my-20 w-220 mx-auto"
        />
      </section>

      <section className="py-30 flex justify-between">
        {/* The Logic */}
        <div className="flex-1">
          <p className="font-body text-xl text-[#4A5468] mb-2">THE LOGIC</p>
          <h2 className="font-display text-4xl font-bold">
            Designed for Focus
          </h2>
        </div>

        <div className="flex-1">
          <p className="text-[#1A202C] text-lg/8">
            Home blurs the line between rest and work. Traditional offices
            demand unnecessary commutes and rigid structures. GbagadaHub is the
            considered middle ground—a space engineered for deep work, genuine
            collaboration, and the kind of clarity that only comes from the
            right environment.
          </p>
        </div>
      </section>

      <section className="py-41.5 flex flex-col gap-16">
        {/* Designed for focus */}
        <div className="text-center">
          <p className="font-body text-md text-[#4A5468] mb-2">THE PILLARS</p>
          <h2 className="font-display text-4xl font-bold">
            Designed for Focus
          </h2>
        </div>

        <div className="flex gap-16">
          <div className="w-80 h-80 rounded bg-[#E2E7F0]"></div>
          <div className="w-80 h-80 rounded bg-[#E2E7F0]"></div>
          <div className="w-80 h-80 rounded bg-[#E2E7F0]"></div>
        </div>
      </section>
    </div>
  );
};
