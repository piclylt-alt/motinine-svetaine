export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Nemokama Konsultacija",
      description: "Aptariame jūsų verslo poreikius, viziją ir tikslus. Suprantame jūsų prekės ženklą ir klientus.",
    },
    {
      number: "02",
      title: "Svetainės Kūrimas",
      description: "Kuriu elegantišką, reaguojančią svetainę, pritaikytą jūsų prekės ženklui su visomis reikalingomis funkcijomis.",
    },
    {
      number: "03",
      title: "Rezervacijų Integracija",
      description: "Integruoju sklandžią rezervacijų sistemą. Jūsų klientai gali rezervuoti laiką tiesiogiai iš svetainės.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kaip Tai Veikia
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Paprastas, aiškus procesas nuo konsultacijos iki svetainės paleidimo
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div
                  className="hidden md:block absolute top-16 left-full w-full h-0.5 transform translate-x-4"
                  style={{ backgroundColor: "#1ED760" }}
                ></div>
              )}
              <div
                className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border"
                style={{ backgroundColor: "#0A183D", borderColor: "#1ED760" }}
              >
                <div className="text-6xl font-bold mb-4" style={{ color: "#1ED760" }}>
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/90 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
