export default function FooterUp() {
  return (
    <section className="flex items-center justify-center w-full px-5 py-16 md:px-10 bg-gradient-to-r from-[#6d28d9] to-[#a855f7]">
      <div className="flex flex-col items-center text-center  px-6 py-10 md:px-[60px] md:py-[56px] max-w-[720px] w-full gap-0">
        
        <h2 className="text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-white tracking-tight leading-[1.25] mb-4">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-[0.92rem] font-normal text-white/80 leading-[1.7] mb-8">
          Join thousands of professionals who are already using DigiTools to work smarter.
          <br className="hidden sm:block" />
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-5">
          <button className="w-full sm:w-auto bg-white text-[#7c3aed] border-none rounded-full px-7 py-3 text-[0.9rem] font-semibold cursor-pointer transition-all duration-200 ease-in shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-[#f5f3ff] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] active:translate-y-0">
            Explore Products
          </button>
          
          <button className="w-full sm:w-auto bg-transparent text-white border-[1.5px] border-white/70 rounded-full px-7 py-[11px] text-[0.9rem] font-medium cursor-pointer transition-all duration-200 ease-in hover:border-white hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0">View Pricing</button>
        </div>

        <p className="text-[0.78rem] text-white/60 tracking-tight font-['Poppins']">
          14-day free trial &bull; No credit card required &bull; Cancel anytime
        </p>
      </div>
    </section>
  );
}