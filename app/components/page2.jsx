import Image from "next/image";

const Page2 = () => {
  return (
    <div className=" min-h-screen flex flex-col  justify-center items-center">
      <div className="mx-5 my-5 mt-10 font-medium">
        Carpe Diem Pension, on Pulse blockchain, redefines retirement with a
        self-managed, inclusive, globally portable fund. Unique for its token
        burn mechanism, it ensures a sustainable 4.32% inflation payout. With
        $143.11k and 41.06% of CDP already burned, it serves 35 users globally.
      </div>

      <div className="text-[30px] text-start my-8 px-8 font-bold text-black">
        CarpeDiem Pension&apos;s Flexible, Blockchain-Enabled Future
      </div>

      <div className="my-5 mx-5  font-medium">
        CarpeDiem Pension redefines retirement planning with a unique approach
        that deviates from traditional pension funds. With no minimum age for
        retirement, it offers flexibility and freedom, ensuring all genders
        receive equal treatment. CarpeDiem Pension ensures blockchain
        transparency, anonymity, and global accessibility, safeguarding pensions
        during international relocation. Easily transfer pensions to loved ones;
        share wallet access. Re-deposit payouts for increased future benefits.
        Importantly, CarpeDiem Pension prioritizes deposit security by avoiding
        utilizing client funds for internal investments. To become a part of
        this forward-thinking pension scheme, one simply needs to install and
        configure a blockchain wallet.
      </div>

      <div className="mx-5 my-5 rounded-lg border-gray-500 border-2">
        <Image src="/img-3.png" alt="CarpeDiem" width={500} height={500} />
      </div>

      <div className="text-[30px] text-start my-8 px-8 font-bold text-black">
        CarpeDiem Pension&apos;s Challenges: Enhancing Security Against
        Reentrancy, Front-Running, and Infinite Minting
      </div>

      <div className="my-5 mx-5  font-medium">
        CarpeDiem Pension confronts critical security challenges, including the
        risks of reentrancy and front-running exploits.Malicious actors may
        exploit contract vulnerabilities, withdrawing excess funds or
        manipulating transaction timing for unfair advantages. System faces
        infinite minting threats, risking economic stability with endless
        creation of CDP tokens or pension shares.  Addressing these challenges
        is paramount to safeguarding the integrity and security of CarpeDiem
        Pension.
      </div>

      <div className="mx-5 my-5 rounded-lg border-gray-500 border-2">
        <Image src="/img-4.png" alt="CarpeDiem" width={500} height={500} />
      </div>
    </div>
  );
};
export default Page2;
