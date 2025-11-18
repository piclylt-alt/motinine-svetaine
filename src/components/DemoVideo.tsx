export default function DemoVideo() {
  return (
    <section
      id="demo"
      className="py-24 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kaip Veikia Jūsų
            <span className="block mt-2" style={{ color: "#1ED760" }}>
              Rezervacijų Sistema
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Peržiūrėkite, kaip klientai lengvai rezervuoja laiką jūsų svetainėje
          </p>
        </div>
        <div
          className="relative rounded-[32px] overflow-hidden shadow-2xl border backdrop-blur-sm"
          style={{
            borderColor: "rgba(30, 215, 96, 0.25)",
            backgroundColor: "#0A183D",
          }}
        >
          <video
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
            controls={false}
            autoPlay
            muted
            loop
            playsInline
            style={{ backgroundColor: "#0A183D" }}
          >
            <source src="/video/demo.mp4" type="video/mp4" />
            <div className="w-full h-full flex items-center justify-center text-white/60">
              <div className="text-center">
                <div className="text-6xl mb-4">▶️</div>
                <p className="text-lg">Video placeholder</p>
              </div>
            </div>
          </video>
        </div>
      </div>
    </section>
  );
}
