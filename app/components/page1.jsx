import Link from "next/link";

const Page1 = () => {
  return (
    <div className=" min-h-screen flex flex-col  justify-center items-center">
      <div className="mx-10 my-5 mt-20">
        <h1 className="text-black text-xl w-full font-bold bg-pink-300">
          Before QuillAudits
        </h1>

        <div className="my-5 mx-auto font-medium">
          Before QuillAudits Exploits like reentrancy and front-running can let
          attackers withdraw extra funds and manipulate transaction timing for
          unfair gains. Vulnerabilities could allow users to mint CDP tokens or
          pension shares indefinitely, disrupting the system&apos;s economic
          balance.
        </div>

        <div className="my-5 mx-auto font-medium">
          Vulnerabilities could allow users to mint CDP tokens or pension shares
          indefinitely, disrupting the system&apos;s economic balance.
        </div>
      </div>

      <div className="mx-10 my-5">
        <h1 className="text-black text-xl w-full font-bold bg-blue-300">
          Before QuillAudits
        </h1>

        <div className="my-5 mx-auto font-medium">
          After QuillAudits Implementation of reentrancy protection mechanisms.
          Ensure precision in decimal handling with standard libraries,
          recalculate accurately, fix logic errors, and secure referral systems
          against exploitation.
        </div>

        <div className="my-5 mx-auto font-medium">
          Ensure precision in decimal handling with standard libraries,
          recalculate accurately, fix logic errors, and secure referral systems
          against exploitation.
        </div>
      </div>

      <div className="border-2 border-blue-400 shadow-gradient-to-r from-blue-500 via-blue-500 to-blue-700 shadow-s px-[25%] mb-5 py-5 rounded-lg flex flex-col items-start  ">
        <span className="text-xs text-gray-400">Headquarters</span>
        <span>Switzerland</span>
        <span className="text-xs text-gray-400">Chain</span>
        <span> Pulse Blockchain</span>
      </div>

      <div className="text-[30px] text-center my-8 px-10 font-bold text-[#0E3088]">
        See how QuillAudits is a trusted partner in 1000+ Audit stories
      </div>

      <div className="sm:flex sm:gap-4">
        <Link
          className=" bg-gradient-to-b from-[#7184FD] via-[#3F7AF0] to-[#4F37EE] py-4 rounded-lg px-10 my-3 font-medium text-white shadow hover:bg-blue-800"
          href="#"
        >
          Request an Audit
        </Link>
      </div>
    </div>
  );
};
export default Page1;
