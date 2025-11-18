export default function Features() {
  const features = [
    {
      title: "Elegantiškas Dizainas",
      description: "Šiuolaikiškos, gražios svetainės, kurios puikiai atspindi jūsų prekės ženklą. Reaguojantis dizainas, veikiantis visuose įrenginiuose.",
      icon: "💅",
    },
    {
      title: "Rezervacijų Sistema",
      description: "Klientai gali lengvai rezervuoti laiką tiesiogiai iš svetainės. Automatiniai patvirtinimai ir priminimai el. paštu.",
      icon: "📱",
    },
    {
      title: "Automatizavimas",
      description: "Sutaupykite laiką su automatiniais patvirtinimais, priminimais ir kalendoriaus sinchronizavimu. Niekada nepraleiskite rezervacijos.",
      icon: "⚡",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Viskas, Ko Reikia
            <span className="block mt-2" style={{ color: "#1ED760" }}>
              Jūsų Verslui Sėkmingai Veikti
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Išsamūs sprendimai, sukurti specialiai grožio verslams
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: "#0A183D", borderColor: "#1ED760" }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/90 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
