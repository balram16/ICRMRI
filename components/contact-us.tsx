export default function ContactUs() {
  return (
    <section id="support" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Get in touch with us for any queries or support regarding the conference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card border border-border p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Conference Coordinators</h3>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border pb-6">
                <div>
                  <p className="text-lg font-semibold text-foreground">Dr. Sheeba.P.S</p>
                </div>
                <div>
                  <a href="mailto:sheebaps@ltce.in" className="text-primary hover:underline flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    sheebaps@ltce.in
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
                <div>
                  <p className="text-lg font-semibold text-foreground">Dr. Rakhi Akhare</p>
                </div>
                <div>
                  <a href="mailto:rakhi.akhare@ltce.in" className="text-primary hover:underline flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    rakhi.akhare@ltce.in
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card border border-border p-8 rounded-xl shadow-lg">
             <h3 className="text-2xl font-bold text-foreground mb-6">Venue Location</h3>
             <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Lokmanya Tilak College of Engineering</span><br/>
                Sector 4, Vikas Nagar, Kopar Khairane,<br/>
                Navi Mumbai - 400 079
             </p>
          </div>
        </div>
      </div>
    </section>
  )
}
