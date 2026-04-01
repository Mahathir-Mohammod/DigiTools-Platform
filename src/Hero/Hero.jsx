import bannerImg from "../assets/banner.png";

export default function Hero() {
  return (
    <section className="bg-white min-h-auto overflow-hidden px-5 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row items-center justify-between py-9 gap-10 text-center lg:text-left h-full">
        
        <div className="flex-1 max-w-[520px]">
          <div className="inline-flex items-center gap-2 bg-[#f5f3ff] border border-[#ede9fe] text-[#6d28d9] text-[0.78rem] font-medium px-3.5 py-1.5 rounded-full mb-6 mx-auto lg:mx-0 w-fit">
            <span className="w-[7px] h-[7px] bg-[#7c3aed] rounded-full shrink-0" />
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-5xl font-bold text-[#111827] tracking-[-0.5px] mb-5">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="text-[0.9rem] text-[#6b7280] max-w-[420px] mb-9 mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
            <button className="bg-[#7c3aed] text-white border-none rounded-full px-7 py-3 text-[0.9rem] font-semibold cursor-pointer transition-all duration-200 ease-in hover:bg-[#6d28d9] hover:-translate-y-0.5 active:translate-y-0">
              Explore Products
            </button>
            <button className="group flex items-center gap-2 bg-transparent text-[#374151] border-[1.5px] border-[#e5e7eb] rounded-full px-6 py-[11px] text-[0.9rem] font-medium cursor-pointer transition-all duration-200 ease-in hover:border-[#7c3aed] hover:text-[#7c3aed] hover:-translate-y-0.5 active:translate-y-0">
              <span className="text-[0.7rem] group-hover:text-[#7c3aed]">&#9654;</span>
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center lg:justify-end items-center max-w-full lg:max-w-[520px]">
          <img
            src={bannerImg}
            alt="AI-Powered Digital Tools"
            className="w-full max-w-full lg:max-w-[480px] h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}