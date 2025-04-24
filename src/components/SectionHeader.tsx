export const SeactionHeader = ({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-400 to-sky-600 text-center text-transparent bg-clip-text">
          {subtitle}
        </p>
      </div>
      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl dark:text-white/60 text-black/60 mt-10 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};
