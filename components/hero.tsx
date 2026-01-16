export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-4">
            December 2026
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6 text-foreground leading-tight">
          2<sup>nd</sup> International Conference on Recent Trends in{" "}
          <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance mb-6 text-foreground leading-tight">
            Multidisciplinary Research &amp; Innovation
          </span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
          A premier international forum for researchers, academicians, industry professionals, and policymakers to
          present and discuss recent innovations in advanced computing and engineering technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
            Download Brochure
          </button>
          <button className="px-8 py-3 border border-border text-foreground hover:bg-card transition-colors font-semibold rounded-lg">
            Learn More
          </button>
        </div>

        <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-6xl sm:text-7xl font-bold text-foreground mb-4">Coming Soon</h2>
            <p className="text-lg sm:text-xl text-muted-foreground">Hold tight, something amazing is on the way!</p>
          </div>
        </section>

        {/* Conference Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-8">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">10</div>
            <p className="text-muted-foreground">Technical Tracks</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">Global</div>
            <p className="text-muted-foreground">Research Community</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">2026</div>
            <p className="text-muted-foreground">Innovation Platform</p>
          </div>
        </div>
      </div>
    </section>
  )
}
