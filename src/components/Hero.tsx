export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#0A183D" }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Profesionalios Svetainės su
          <span className="block" style={{ color: "#1ED760" }}>
            Integruotomis Rezervacijų Sistemomis
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
          Kuriu svetaines su integruotomis internetinėmis rezervacijų sistemomis paslaugų verslams. 
          Transformuokite savo verslą su sklandžia rezervacijų patirtimi.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg" style={{ backgroundColor: "#F20A54" }}>
            Pradėti Šiandien
          </button>
          <button className="px-8 py-4 bg-transparent border-2 text-white font-semibold rounded-full hover:opacity-80 transition-all duration-300" style={{ borderColor: "#1ED760" }}>
            Peržiūrėti Portfolio
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, #0A183D, transparent)" }}></div>
    </section>
  );
}

