const LINKS = {
  Product: ["Features", "Pricing", "Templates", "Integrations"],
  Company: ["About", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Help Center", "Community", "Contact"],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#12121f] px-6 pt-[60px] pb-0 md:px-20">
      
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#6d28d9] to-[#a855f7]" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-8 pb-12 md:gap-12">
          
          <div className="flex-[1.5] min-w-[180px] max-w-full md:max-w-[260px]">
            <h2 className="mb-3.5 text-[1.4rem] font-bold tracking-[-0.5px] text-white">DigiTools</h2>
            <p className="text-[0.82rem] leading-[1.75] text-[#9ca3af]">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
          </div>

          {Object.entries(LINKS).map(([category, items]) => (
            <div className="flex-1 min-w-[120px]" key={category}>
              <h4 className="mb-4 text-[0.88rem] font-semibold tracking-[0.1px] text-white">
                {category}
              </h4>
              <ul className="flex flex-col gap-[10px] list-none p-0 m-0">
                {items.map((item) => (
                  <li key={item}>
                    <a 
                      href="#" 
                      className="text-[0.82rem] text-[#9ca3af] transition-colors duration-200 hover:text-white">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex-1 min-w-[120px]">
            <h4 className="mb-4 text-[0.88rem] font-semibold tracking-[0.1px] text-white">Social Links</h4>
            <div className="flex flex-wrap gap-2.5">
              
              <a href="#" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1e1e30] text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#7c3aed]" aria-label="YouTube">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                </svg>
              </a>
             
              <a href="#" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1e1e30] text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#7c3aed]" aria-label="Facebook">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            
              <a href="#" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1e1e30] text-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#7c3aed]" aria-label="X">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-[#1e1e30] py-5 sm:flex-row sm:items-center">
          <p className="text-[0.78rem] text-[#6b7280]">
            © 2026 Digitools. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#" className="text-[0.78rem] text-[#6b7280] transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="text-[0.78rem] text-[#6b7280] transition-colors hover:text-white">Terms of Service</a>
            <a href="#" className="text-[0.78rem] text-[#6b7280] transition-colors hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}