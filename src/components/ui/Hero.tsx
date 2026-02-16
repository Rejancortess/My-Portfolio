import profile2 from "../../assets/profile-2.jpeg";

export const Hero = () => {
  return (
    <div className="flex p-5">
      <div className="text-gray-300 w-2/3 pr-10">
        <h1 className="text-white text-5xl font-bold mb-5 ">
          Hi, I'm Rejan 👋
        </h1>
        <p>
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating (and occasionally designing) exceptional digital experiences
          that are fast, accessible, visually appealing, and responsive. Even
          though I have been creating web applications for over 7 years, I still
          love it as if it was something new.
        </p>
      </div>
      <div className="flex items-center justify-center w-1/3">
        <div className="relative w-60">
          <div className="absolute -right-10 -bottom-10 h-60 w-60 border-30 border-slate-700 border-l-0 border-t-0" />
          <img
            src={profile2}
            alt="Rejan"
            className="relative z-10 w-70 rounded"
          />
        </div>
      </div>
    </div>
  );
};
