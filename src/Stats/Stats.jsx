const STATS = [
  { value: "50K+", label: "Active Users" },
  { value: "200+", label: "Premium Tools" },
  { value: "4.9",  label: "Rating" },
];

export default function Stats() {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-center gap-0 w-full py-12 px-6 md:px-20 bg-gradient-to-r from-[#6d28d9] to-[#a855f7]">
      {STATS.map((stat, index) => (
        <div key={stat.label} className="flex flex-col sm:flex-row items-center flex-1 justify-center gap-6 sm:gap-0">
          
          <div className="flex flex-col items-center gap-2 text-center px-4">
            <span className="text-[clamp(1.8rem,3vw,2.4rem)] font-bold text-white leading-none tracking-[-0.5px]">
              {stat.value}
            </span>
            <span className="text-[0.88rem] font-normal text-white/75 tracking-wider">
              {stat.label}
            </span>
          </div>

          {index < STATS.length - 1 && (
            <div className="w-12 h-[1px] bg-white/25 shrink-0 sm:w-[1px] sm:h-12" />
          )}
        </div>
      ))}
    </section>
  );
}