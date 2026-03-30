const PLANS = [
    {
        name: "Starter",
        tagline: "Perfect for getting started",
        price: "$0",
        period: "/Month",
        features: [
            "Access to 10 free tools",
            "Basic templates",
            "Community support",
            "1 project per month",
        ],
        cta: "Get Started Free",
        popular: false,
    },
    {
        name: "Pro",
        tagline: "Best for professionals",
        price: "$29",
        period: "/Month",
        features: [
            "Access to all premium tools",
            "Unlimited templates",
            "Priority support",
            "Unlimited projects",
            "Cloud sync",
            "Advanced analytics",
        ],
        cta: "Start Pro Trial",
        popular: true,
    },
    {
        name: "Enterprise",
        tagline: "For teams and businesses",
        price: "$99",
        period: "/Month",
        features: [
            "Everything in Pro",
            "Team collaboration",
            "Custom integrations",
            "Dedicated support",
            "SLA guarantee",
            "Custom branding",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section className="bg-white px-5 py-20 md:px-8 lg:px-20 ">

            <div className="mb-14 text-center">
                <h2 className="text-5xl font-bold tracking-tight text-[#111827] mb-3">
                    Simple, Transparent Pricing
                </h2>
                <p className="text-[0.9rem] text-[#6b7280] font-normal">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-6 lg:grid-cols-3 items-start">
                {PLANS.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative flex flex-col rounded-2xl p-7 pb-7 transition-all duration-200 ease-in
              ${plan.popular
                                ? "bg-gradient-to-br from-[#7c3aed] to-[#a855f7] pt-11  hover:-translate-y-1.5 order-first lg:order-none"
                                : "bg-white border border-[#e5e7eb] pt-8 hover:-translate-y-1 "
                            }`}
                    >
                        {plan.popular && (
                            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#fbbf24] text-[#78350f] text-[0.72rem] font-bold px-3.5 py-1.5 rounded-full whitespace-nowrap tracking-wide">
                                Most Popular
                            </span>
                        )}

                        <div className="mb-5">
                            <h3 className={`text-[1.2rem] font-bold mb-1 ${plan.popular ? "text-white" : "text-[#111827]"}`}>
                                {plan.name}
                            </h3>
                            <p className={`text-[0.8rem] ${plan.popular ? "text-white/75" : "text-[#374154]"}`}>
                                {plan.tagline}
                            </p>
                        </div>

                        <div className="flex items-baseline gap-1 mb-7">
                            <span className={`text-[2.4rem] font-bold tracking-tighter leading-none ${plan.popular ? "text-white" : "text-[#111827]"}`}>
                                {plan.price}
                            </span>
                            <span className={`text-[0.85rem] font-medium ${plan.popular ? "text-white/75" : "text-[#6b7280]"}`}>
                                {plan.period}
                            </span>
                        </div>

                        <ul className="flex flex-col gap-3 mb-8 flex-1 list-none p-0">
                            {plan.features.map((feature) => (
                                <li key={feature} className={`flex items-center gap-2.5 text-[0.83rem] ${plan.popular ? "text-white/90" : "text-[#374151]"}`}>
                                    <span className={`font-bold text-[0.85rem] shrink-0 ${plan.popular ? "text-white" : "text-[#7c3aed]"}`}>
                                        ✓</span>{feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            className={`w-full py-3.5 rounded-full text-[0.9rem] font-semibold transition-all duration-200 cursor-pointer active:translate-y-0 hover:-translate-y-0.5
                ${plan.popular
                                    ? "bg-white text-[#7c3aed] shadow-[0_4px_14px_rgba(0,0,0,0.15)] hover:bg-[#f5f3ff] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
                                    : "bg-[#7c3aed] text-white shadow-[0_4px_14px_rgba(124,58,237,0.35)] hover:bg-[#6d28d9] hover:shadow-[0_6px_20px_rgba(124,58,237,0.45)]"
                                }`}>{plan.cta}</button>
                    </div>
                ))}
            </div>
        </section>
    );
}