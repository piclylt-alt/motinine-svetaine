export default function Features() {
  const features = [
    {
      title: "Svetainės Kūrimas",
      description: "Gražios, šiuolaikiškos svetainės, pritaikytos jūsų prekės ženklui. Reaguojantis dizainas, veikiantis puikiai visuose įrenginiuose.",
      icon: "🌐",
    },
    {
      title: "Rezervacijų Sistema",
      description: "Sklandžiai integruota internetinė rezervacijų sistema tiesiogiai į jūsų svetainę. Leiskite klientams rezervuoti laiką 24/7.",
      icon: "📅",
    },
    {
      title: "Automatizavimas",
      description: "Automatiniai patvirtinimai, priminimai ir kalendoriaus sinchronizavimas. Sutaupykite laiką ir niekada nepraleiskite rezervacijos.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#0A183D" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Viskas, Ko Reikia
            <span className="block" style={{ color: "#1ED760" }}>
              Jūsų Verslui Augti
            </span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Išsamūs sprendimai, sukurti specialiai paslaugų verslams
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ backgroundColor: "#0A183D", border: "2px solid #1ED760" }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

