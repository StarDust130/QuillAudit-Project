import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { Poppins } from "next/font/google";

// const poppins =  Poppins({ subsets: ['latin'] ,weights: [500]})
const Hero = () => {
  return (
    <div className="bg-gradient-to-r  from-blue-900 to-blue-900 min-h-screen flex flex-col justify-center items-center">
      <Image
        src="/img-2.png"
        alt="img"
        width={500}
        height={500}
        className="md:hidden mt-20 "
      />

      <p className="text-[35px] text-white font-medium mx-7 text-start mt-4 ">
        Securing Trust : Boosting Security and Strengthening Trust at Carpe Diem
        Pension
      </p>

      <p
        className={`  text-[18px]   text-white  mx-7 text-start mt-8 `}
      >
        QuillAudits enhances Carpe Diem Pension by addressing 33 vulnerabilities
        on the Pulse blockchain, boosting security and user trust in digital
        pensions.
      </p>

      <nav aria-label="Breadcrumb " className="mt-20 mb-8">
        <ol className="flex items-center gap-1 text-xs text-white">
          <li>
            <a href="#" className="block transition hover:text-gray-300">
              <span className="sr-only"> Home </span>
            </a>
          </li>

          <li className="rtl:rotate-180"></li>

          <li>
            <a href="#" className="block transition hover:text-gray-300">
              {" "}
              QuillAudits{" "}
            </a>
          </li>

          <li className="rtl:rotate-180">
            <FaArrowRightLong />
          </li>

          <li>
            <a href="#" className="block transition hover:text-gray-300">
              {" "}
              Resources{" "}
            </a>
          </li>
          <li className="rtl:rotate-180">
            <FaArrowRightLong />
          </li>
          <li>
            <a href="#" className="block transition hover:text-gray-300">
              {" "}
              Case Studies{" "}
            </a>
          </li>
          <li className="rtl:rotate-180">
            <FaArrowRightLong />
          </li>
          <li>
            <a href="#" className="block transition hover:text-gray-300">
              {" "}
              kucoin{" "}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  );
};
export default Hero;
