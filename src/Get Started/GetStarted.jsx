import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const STEPS = [
  {
    number: "01",
    icon: userImg,
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    number: "02",
    icon: packageImg,
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    number: "03",
    icon: rocketImg,
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
  },
];

export default function GetStarted() {
  return (

    <section className="bg-[#f3f4f6] px-5 py-[72px] md:px-8 lg:px-20">

      <div className="mb-12 text-center">
        <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold text-[#111827] tracking-tight mb-3">Get Started In 3 Steps</h2>

        <p className="text-[0.9rem] text-[#6b7280]">Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((step) => (
          <div 
            key={step.number} 
            className="group relative cursor-pointer flex flex-col items-center rounded-2xl border border-[#e5e7eb] bg-white px-7 pb-8 pt-9 text-center transition-all duration-200 ease-in hover:-translate-y-1 ">

            <span className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#7c3aed] text-[0.7rem] font-bold tracking-widest text-white">{step.number}</span>

            <div className="mb-6 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#ede9fe]">
              <img src={step.icon} alt={step.title} className="h-[34px] w-[34px] object-contain"/>
            </div>

            <h3 className="mb-3 text-base font-bold text-[#111827]">{step.title}</h3>

            <p className="max-w-[220px] text-[0.82rem] leading-[1.7] text-[#6b7280]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}