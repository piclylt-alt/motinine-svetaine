export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
            Svetainė su rezervacijų sistema
            <span className="block mt-3 text-emerald-600">
              be komisinių mokesčių
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
            Jūsų grožio salonui – paprasta svetainė su Google kalendoriumi. 
            Klientai rezervuoja tiesiogiai jums, o jūs mokate tik už svetainę.
          </p>

          {/* Key Benefits - Simple, Trust-Building */}
          <div className="flex flex-wrap justify-center gap-6 pt-4 pb-2">
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base">Nėra mėnesinių mokesčių</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base">Nėra komisinių</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm sm:text-base">Paprasta naudoti</span>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="pt-6">
            <a 
              href="#contact"
              className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:ring-offset-2"
            >
              Susisiekti ir aptarti projektą
            </a>
          </div>

          {/* Trust Signal */}
          <p className="text-sm text-slate-500 pt-2">
            Nemokama konsultacija • Aiški kaina • Be paslėptų mokesčių
          </p>
        </div>
      </div>
    </section>
  );
}

