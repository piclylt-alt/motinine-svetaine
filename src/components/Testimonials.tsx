export default function Testimonials() {
  const testimonials = [
    {
      name: "Sara Jonaitienė",
      business: "Grožio Salono Savininkė",
      content: "Rezervacijų sistema tikrai pakeitė mano verslą. Gaunu rezervacijas 24/7, o mano tvarkaraštis visada organizuotas. Svetainė atrodo nuostabiai ir klientai ją mėgsta!",
      rating: 5,
    },
    {
      name: "Mikas Čen",
      business: "Fitness Treneris",
      content: "Profesionalus aptarnavimas nuo pradžios iki pabaigos. Svetainė puikiai atspindi mano prekės ženklą, o rezervacijų sistema yra neįtikėtinai lengva mano klientams naudoti.",
      rating: 5,
    },
    {
      name: "Ema Radvilaitė",
      business: "Konsultantė",
      content: "Buvau skeptiška dėl internetinės rezervacijos, bet tai tikrai pakeitė viską. Mano klientai mėgsta patogumą, o aš mėgstu automatizavimą. Labai rekomenduoju!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#0A183D" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ką Sako Mūsų
            <span className="block" style={{ color: "#1ED760" }}>
              Klientai
            </span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Išklausykite patenkintų verslo savininkių atsiliepimų
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ backgroundColor: "#0A183D", border: "2px solid #1ED760" }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ color: "#1ED760" }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-white mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-white text-sm opacity-80">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

