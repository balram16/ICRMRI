const tracks = [
  "Advanced Computing Paradigms",
  "Artificial Intelligence and Machine Learning",
  "Data Science, Big Data Analytics, and Cloud Computing",
  "Cybersecurity, Blockchain, and Privacy",
  "Internet of Things (IoT) and Smart Systems",
  "Networking, Communication, and 5G/6G Technologies",
  "Robotics, Automation, and Cyber-Physical Systems",
  "Smart Technologies & Engineering",
  "Human-Centered Computing and Intelligent Interfaces",
  "Emerging and Interdisciplinary Technologies",
]

export default function Tracks() {
  return (
    <section id="tracks" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Technical <span className="text-primary">Tracks</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore cutting-edge research across diverse domains of computing and engineering
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="group p-6 bg-background border border-border hover:border-primary rounded-lg transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <span className="text-primary font-bold text-sm">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {track}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-background border border-border rounded-xl">
          <h3 className="text-xl font-bold text-foreground mb-4">Conference Structure</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-primary font-semibold mb-2">Presentations</p>
              <p className="text-foreground">Keynote and invited talks by eminent experts</p>
            </div>
            <div>
              <p className="text-sm text-primary font-semibold mb-2">Paper Presentation</p>
              <p className="text-foreground">Oral and poster paper presentations</p>
            </div>
            <div>
              <p className="text-sm text-primary font-semibold mb-2">Discussions</p>
              <p className="text-foreground">Panel discussions and networking sessions</p>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mt-6 pt-6 border-t border-border">
            <span className="text-foreground font-semibold">Hybrid Mode:</span> The conference will be conducted in
            hybrid mode (offline + online) to ensure broader participation.
          </p>
        </div>
      </div>
    </section>
  )
}
