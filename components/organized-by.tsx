export default function OrganizedBy() {
  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 bg-card border border-border rounded-xl">
          <h3 className="text-2xl font-bold text-foreground mb-4">Organized by</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left side - College info */}
            <div>
              <p className="text-lg text-muted-foreground">
                <span className="text-foreground font-semibold">Lokmanya Tilak College of Engineering</span>, Navi Mumbai
              </p>
            </div>

            {/* Right side - Contact info */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-4">Contact Us</h4>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <p className="text-foreground font-semibold">Dr. Rakhi Akhare</p>
                  <p className="text-sm">Email: <a href="mailto:abc@gmail.com" className="text-primary hover:underline">abc@gmail.com</a></p>
                </div>
                <div>
                  <p className="text-foreground font-semibold">Dr. Sheeba.P.S</p>
                  <p className="text-sm">Email: <a href="mailto:abc@gmail.com" className="text-primary hover:underline">abc@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
