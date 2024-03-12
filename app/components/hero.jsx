import Image from "next/image";


const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Image takes full width and maintains aspect ratio */}
      <div className="relative w-full h-screen " >
        <Image src="/hero.png" alt="hero" layout="fill" objectFit="cover" />

        {/* Text overlay on the image */}
        {/* <div className="absolute top-0 min-w-full text-center">
          
        </div> */}
        
      </div>
    </div>
  );
};
export default Hero;
