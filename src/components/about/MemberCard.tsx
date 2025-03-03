import React from "react";

interface MemberProps {
  name: string;
  role: string;
  bio: string;
  backgroundImage: string;
  frontImage: string;
  logoImage?: string;
}

const MemberCard: React.FC<MemberProps> = ({
  name,
  role,
  bio,
  backgroundImage,
  frontImage,
  logoImage,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 text-center transition-transform transform hover:scale-105 max-w-md mx-auto">
      {/* Yoda Animation */}
      <div className="relative w-[300px] aspect-[9/16] group transform-style-preserve-3d transition-transform duration-[400ms] mb-4 mx-auto">
        {/* Background Image */}
        <img
          src={backgroundImage}
          alt={name + " background image"}
          className="rounded-lg absolute inset-0 w-full h-full object-cover z-10 transform transition-transform duration-[400ms] group-hover:rotate-x-[25deg] group-hover:translate-z-[-35px] group-hover:blur-sm"
        />

        {/* Logo (or name if logo is not available) */}
        <div className="absolute overflow-hidden top-auto border-red-500 left-0 right-0 bottom-8 mx-auto w-[65%] text-white font-bold text-2xl filter-invert transform translate-z-[20px] transition-transform duration-[400ms] group-hover:translate-y-[-2rem] group-hover:rotate-x-[-20deg] z-[1000]">
          <div className="absolute inset-0 bg-black rounded-lg"></div>
          <div className="relative z-10 text-white">
            {logoImage ? (
              <img src={logoImage} alt={name + " logo"} className="w-full" />
            ) : (
              name
            )}
          </div>
        </div>

        {/* Front Image */}
        <img
          src={frontImage}
          alt={name + " front image"}
          className="absolute w-full h-full scale-[1.125] origin-bottom opacity-0 transform transition-all duration-[400ms] group-hover:opacity-100 group-hover:translate-y-[-2rem] group-hover:translate-z-[-10px] group-hover:rotate-x-[-20deg] z-[100]"
        />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-gradient-from-center opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] z-[100]" />

        {/* Blur Effect */}
        <div className="absolute inset-[80%_0_0.5rem] bg-black filter blur-[1rem] z-[1] transition-all duration-[400ms] group-hover:rotate-x-[10deg] group-hover:translate-y-[30px]" />
      </div>

      {/* Member Profile Info */}
      <p className="text-gray-900 text-2xl font-bold">{role}</p>
      {/* <p className="text-gray-900 bold text-2xl font-bold ">{role}</p> */}
      <p className="text-sm text-gray-700 mt-2">{bio}</p>
    </div>
  );
};

export default MemberCard;
