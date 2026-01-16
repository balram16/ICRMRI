export default function About() {
  return (
    <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            About <span className="text-primary">ICRMIR-2026</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Fostering interdisciplinary collaboration and knowledge exchange at a global level
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Our Aim</h3>
                <p className="text-muted-foreground">
                  To provide an international platform for disseminating cutting-edge research and promoting
                  collaboration in advanced computing and engineering technologies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Key Objectives</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Bring together leading researchers and practitioners from academia and industry</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Present original, high-quality research contributions</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Encourage interdisciplinary research and innovation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">•</span>
                    <span>Promote industry–academia interaction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Target Audience</h3>
            <div className="space-y-4">
              {[
                "Researchers and faculty members",
                "Doctoral and postgraduate students",
                "Industry professionals and R&D engineers",
                "Technology entrepreneurs and startups",
                "Policymakers and technology strategists",
              ].map((audience) => (
                <div key={audience} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <p className="text-foreground">{audience}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-card border border-border rounded-xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">Organized by</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side - College info */}
            <div>
              <p className="text-lg text-muted-foreground">
                <span className="text-foreground font-semibold">Lokmanya Tilak College of Engineering</span>, Navi
                Mumbai
              </p>
            </div>

            {/* Right side - Patrons and Chair */}
            <div className="space-y-8 text-muted-foreground">
              {/* Chief Patron section */}
              <div>
                <p className="text-foreground mb-2 text-base font-bold">Chief Patron</p>
                <p className="text-base font-semibold">Dr. Satish Chaturvedi</p>
                <p className="text-sm">Chairman Lokmanya Tilak Jankalyan Shikshan Sanstha</p>
                <p className="mt-2 font-semibold">Smt. Abha Chaturvedi</p>
                <p className="text-sm">Secretary Lokmanya Tilak Jankalyan Shikshan Sanstha</p>
              </div>

              {/* Patron section */}
              <div>
                <p className="text-foreground mb-2 text-base font-bold">Patron</p>
                <p className="font-semibold">Shree Dushyant Chaturvedi</p>
                <p className="text-sm">Director(GB) Lokmanya Tilak Jankalyan Shikshan Sanstha</p>
                <p className="mt-2 font-semibold">Smt. Sheetal Chaturvedi</p>
                <p className="text-sm">Director Lokmanya Tilak Jankalyan Shikshan Sanstha</p>
              </div>

              {/* Conference Chair */}
              <div>
                <p className="text-foreground mb-2 text-base font-bold">Conference Chair</p>
                <p className="font-semibold">Dr. Subhash K. Shinde</p>
                <p className="text-sm">Principal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
