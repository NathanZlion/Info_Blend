import { CgDanger } from "react-icons/cg";



export default function WarningFooter() {
    return (
      <div className="flex flex-row justify-center items-center bg-gray-900 py-2 rounded-t-2xl mx-auto w-[100%] md:w-[80%] sticky bottom-0  ">
        <CgDanger className="text-white flex-none  w-7 lg:w-9 h-7 lg:h-9 mx-2 md:mx-4" />
        <div className="flex-3 ">
          <p className="text-white text-xs md:text-[16px] lg:text-sm font-bold md:inline"> The comparison is AI generated and in BETA phase.  </p>
          <p className="text-[#FF0000] text-xs md:text-[16px] lg:text-sm font-bold md:inline"> Double Check!  </p>
        </div>
      </div>
    );
}