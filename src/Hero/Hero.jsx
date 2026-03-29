import bannerImg from "../assets/banner.png";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-5 py-9 md:px-8 lg:px-20 min-h-[calc(100vh-64px)] bg-white gap-10 overflow-hidden text-center lg:text-left">
      
      <div className="flex-1 max-w-[520px]">
        
        <div className="inline-flex items-center gap-2 bg-[#f5f3ff] border border-[#ede9fe] text-[#6d28d9] text-[0.78rem] font-medium px-3.5 py-1.5 rounded-full mb-6 mx-auto lg:mx-0 w-fit">
          <span className="w-[7px] h-[7px] bg-[#7c3aed] rounded-full shrink-0" />
          New: AI-Powered Tools Available
        </div>

        <h1 className="text-[clamp(2rem,4vw,2.8rem)] font-bold text-[#111827] leading-[1.2] tracking-[-0.5px] mb-5">
          Supercharge Your <br /> Digital Workflow
        </h1>

        <p className="text-[0.92rem] text-[#6b7280] leading-[1.75] max-w-[420px] mb-9 mx-auto lg:mx-0">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
          <button className="bg-[#7c3aed] text-white border-none rounded-full px-7 py-3 text-[0.9rem] font-semibold cursor-pointer transition-all duration-200 ease-in shadow-[0_4px_14px_rgba(124,58,237,0.4)] hover:bg-[#6d28d9] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(124,58,237,0.5)] active:translate-y-0">
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
    </section>
  );
}