const ExperienceCard = ({
  title,
  description,
  period,
  logo,
}: {
  title: string;
  description: string[];
  period: string;
  logo?: string;
}) => {
  return (
    <div className="flex w-200 justify-between items-start gap-10 bg-gray-800 p-8 rounded-xl shadow-md hover:scale-105 transition-transform">
      <div>
        <img src={logo} className="w-20 rounded-2xl" alt="Antimony Logo" />
      </div>
      <div className="w-1/2">
        <p className="text-white text-xl mb-5">{title}</p>
        <ul className="list-disc text-lg pl-5 text-gray-300 space-y-3 font-extralight">
          {description.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <span className="text-gray-300">{period}</span>
      </div>
    </div>
  );
};

export default ExperienceCard;
