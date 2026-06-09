export default function Hero() {
  return (
    <section>
      <div
        id="home"
        className="relative w-full min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-12 overflow-hidden bg-cover bg-center bg-no-repeat pt-24"
        style={{ backgroundImage: "url('/LTCE 2.JPG.jpeg')" }}
      >
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-[#0f172a]/75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40 mix-blend-overlay"></div>

        <div className="relative max-w-7xl mx-auto w-full py-12">

          <div className="flex flex-col items-center xl:items-end xl:text-right w-full mb-12 sm:mb-20">
            <div className="flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:bg-white/15 hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] transition-all duration-300">
              <div className="bg-white rounded-full p-1 shadow-md">
                <img src="/ISTE.png" alt="ISTE Logo" className="h-7 sm:h-9 w-auto object-contain rounded-full" />
              </div>
              <span className="text-sm sm:text-base font-bold text-white tracking-[0.2em] uppercase ml-1 drop-shadow-md">
                ISTE Approved
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight drop-shadow-lg max-w-5xl">
              2<sup>nd</sup> International Conference on <br className="hidden lg:block" />
              Recent Trends in Multidisciplinary <br className="hidden lg:block" />
              Research & Innovation <br className="hidden lg:block" />
              <span className="text-[#a0c4ff]">(ICRMRI),</span> <span className="text-[#ffb4a2]">2026</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-end w-full">
            {/* Info box */}



          </div>
        </div>
      </div>

      <div className="bg-background">

        {/* Conference Stats */}
        <div className="max-w-7xl mx-auto text-center pb-20 px-4 sm:px-6 lg:px-8">
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
      </div>
    </section>
  )
}
