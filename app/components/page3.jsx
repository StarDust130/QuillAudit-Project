const Page3 = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-[30px] text-start my-8 px-8 font-bold text-black">
        CarpeDiem Pension&apos;s Journey Through our Audit Process
      </div>
      <ol className="mx-10 py-3">
        <li className="py-3">
          <span>
            <span className="text-[25px] font-bold">
              1. Information gathering:
            </span>
          </span>
          <ul className="list-disc ml-5 py-3">
            <li>
              Collected and reviewed all relevant documentation, including
              whitepaper, technical specifications, and design documents.
            </li>
            <li>
              Obtained a clear understanding of the CDP platform&apos;s
              functionality, economic model, and intended user interactions.
            </li>
            <li>
              Discussed client concerns and specific areas of focus for the
              audit.
            </li>
          </ul>
        </li>
        <li className="py-3">
          <span>
            <span className="text-[25px] font-bold">
              2. Manual Code Review:
            </span>
          </span>
          <ul className="list-disc ml-5 py-3">
            <li>
              Conducted a line-by-line review of the smart contract code,
              focusing on:
              <ul className="list-disc ml-5">
                <li>
                  Vulnerability identification: Searching for known
                  vulnerabilities like reentrancy, front-running, integer
                  overflows, and access control issues, etc.
                </li>
                <li>
                  Logic flaws: Identifying inconsistencies or unintended
                  behaviours in the code logic.
                </li>
                <li>
                  Tokenomics correctness: Verifying if the code accurately
                  implements the intended economic model and token distribution
                  mechanisms.
                </li>
                <li>
                  Solidity best practices: Compliance with secure coding
                  standards and adherence to established guidelines.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="py-3">
          <span>
            <span className="text-[25px] font-bold">
              3. Functional Testing:
            </span>
          </span>
          <ul className="list-disc ml-5 py-3">
            <li>
              Developed and executed a comprehensive set of test cases covering
              various user interactions and edge cases.
            </li>
            <li>
              Simulated different deposit, claim, and referral scenarios to
              assess functionality and uncover potential exploits.
            </li>
            <li>
              Focused on scenarios identified during the manual review and
              client concerns (e.g., infinite minting, reward calculation
              errors).
            </li>
            <li>
              Leveraged tools like Hardhat and Ganache to deploy and test the
              smart contract locally.
            </li>
          </ul>
        </li>
        <li className="py-3">
          <span>
            <span className="text-[25px] font-bold">4. Automated Testing:</span>
          </span>
          <ul className="list-disc ml-5 py-3">
            <li>
              Employed static analysis tools like Slither to identify
              vulnerabilities through automated code scanning.
            </li>
            <li>
              Utilized symbolic execution tools like Mythril to explore various
              code execution paths and uncover potential attack vectors.
            </li>
            <li>
              Integrated unit tests are written by the CDP team to verify
              specific contract functions and their behaviour.
            </li>
          </ul>
        </li>
        <li className="py-3">
          <span>
            <span className="text-[25px] font-bold">
              5. Reporting & Remediation:
            </span>
          </span>
          <ul className="list-disc ml-5 py-3">
            <li>
              Prepared a detailed report outlining all identified
              vulnerabilities, categorized by severity and potential impact.
            </li>
            <li>
              Provided clear recommendations for fixing each vulnerability,
              including code snippets and best practices.
            </li>
            <li>
              Collaborated with the CDP team to prioritize and address the
              identified issues.
            </li>
            <li>
              Conducted additional verification testing after vulnerability
              fixes were implemented.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
};

export default Page3;
