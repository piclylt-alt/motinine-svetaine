export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center space-y-10">
          {/* Main Headline - Outcome-focused, clear */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Jūsų grožio salonui – 
              <span className="block mt-2 text-emerald-500">
                paprasta svetainė su rezervacijų sistema
              </span>
            </h1>
          </div>
          
          {/* Subheadline - Simple, reassuring */}
          <p className="text-xl sm:text-2xl md:text-3xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Klientai rezervuoja tiesiogiai jums. 
            <span className="block mt-2 text-slate-700">
              Jūs mokate tik už svetainę – be mėnesinių mokesčių ir komisinių.
            </span>
          </p>

          {/* Key Benefits - Outcome-focused, trust-building */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-6 pb-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-2.5 text-slate-700">
              <svg className="w-6 h-6 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-base sm:text-lg font-medium">Viskas jūsų kontrolėje</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-700">
              <svg className="w-6 h-6 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-base sm:text-lg font-medium">Daugiau pinigų jūsų kišenėje</span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-700">
              <svg className="w-6 h-6 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-base sm:text-lg font-medium">Paprasta naudoti</span>
            </div>
          </div>

          {/* Primary CTA - Clear, confident */}
          <div className="pt-8">
            <a 
              href="#contact"
              className="inline-block px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 focus:ring-offset-2"
            >
              Gauti pasiūlymą
            </a>
          </div>

          {/* Trust Signal - Calm, reassuring */}
          <p className="text-base text-slate-500 pt-4 font-light">
            Nemokama konsultacija • Aiški kaina • Be paslėptų mokesčių
          </p>
        </div>
      </div>
    </section>
  );
}

