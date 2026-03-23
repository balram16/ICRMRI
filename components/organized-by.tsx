export default function OrganizedBy() {
  return (
    <section id="committee" className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
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
                <p className="text-sm">Chairman, Lokmanya Tilak Jankalyan Shikshan Sanstha</p>
                <p className="mt-2 font-semibold">Smt. Abha Chaturvedi</p>
                <p className="text-sm">Secretary, Lokmanya Tilak Jankalyan Shikshan Sanstha</p>
              </div>

              {/* Patron section */}
              <div>
                <p className="text-foreground mb-2 text-base font-bold">Patron</p>
                <p className="font-semibold">Shree Dushyant Chaturvedi</p>
                <p className="text-sm">Director (GB), Lokmanya Tilak Jankalyan Shikshan Sanstha</p>
                <p className="mt-2 font-semibold">Smt. Sheetal Chaturvedi</p>
                <p className="text-sm">Director, Lokmanya Tilak Jankalyan Shikshan Sanstha</p>
              </div>

              {/* Conference Chair */}
              <div>
                <p className="text-foreground mb-2 text-base font-bold">Conference Chair</p>
                <p className="font-semibold">Dr. Subhash K. Shinde</p>
                <p className="text-sm">Principal, Lokmanya Tilak College of Engineering, Navi Mumbai</p>
              </div>

              {/* Conference Convenors */}
              <div>
                <p className="text-foreground mb-2 text-base font-bold">Conference Convenors</p>
                <p className="font-semibold">Dr. Sheeba P.S.</p>
                <p className="text-sm">Head, Department of Computer Engineering, Lokmanya Tilak College of Engineering, Navi Mumbai</p>
                <p className="mt-2 font-semibold">Dr. Rakhi Akhare</p>
                <p className="text-sm">Assistant Professor, Department of Computer Engineering, Lokmanya Tilak College of Engineering, Navi Mumbai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
