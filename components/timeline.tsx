const timeline = [
  { date: "July 2026", event: "Call for Papers", status: "upcoming" },
  { date: "September 2026", event: "Paper Submission Deadline", status: "upcoming" },
  { date: "October 2026", event: "Review & Notification of Acceptance", status: "upcoming" },
  { date: "November 2026", event: "Camera-Ready Submission", status: "upcoming" },
  { date: "December 4-5, 2026", event: "Conference Dates", status: "highlight" },
]

export default function Timeline() {
  return (
    <section id="timeline" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Tentative <span className="text-foreground">Dates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Mark your calendars and stay updated with key milestones
          </p>
        </div>

        <div className="space-y-6">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-6 relative">
              {/* Timeline dot */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-4 h-4 rounded-full mt-2 ${
                    item.status === "highlight" ? "bg-primary scale-150" : "bg-primary/50"
                  }`}
                ></div>
                {index !== timeline.length - 1 && (
                  <div className="w-1 h-20 bg-gradient-to-b from-primary/50 to-transparent mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div
                className={`pb-6 flex-1 ${
                  item.status === "highlight"
                    ? "bg-primary/10 border border-primary/30 rounded-lg p-6"
                    : "border-b border-border pb-6"
                }`}
              >
                <p className="text-primary font-semibold text-sm mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-foreground">{item.event}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-card border border-border rounded-xl">
          <h3 className="text-xl font-bold text-foreground mb-4">Paper Submission & Publication</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-primary font-semibold mb-3">Submission Process</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ Original, unpublished research papers</li>
                <li>✓ Double-blind peer review by international experts</li>
                <li>✓ Evaluation: originality, technical quality, relevance, clarity</li>
              </ul>
            </div>
            <div>
              <p className="text-primary font-semibold mb-3">Publication Opportunities</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>✓ All accepted and presented papers will be published in the conference proceedings </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
