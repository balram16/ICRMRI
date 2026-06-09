import Image from "next/image"

const timeline = [
  { date: <>11<sup>th</sup> June 2026</>, event: "Paper Submission Deadline(Extended)", status: "upcoming" },
  { date: <>27<sup>th</sup> July 2026</>, event: "Acceptance Notification", status: "upcoming" },
  { date: <>17<sup>th</sup> August 2026</>, event: "Camera Ready Paper & Registration Deadline", status: "upcoming" },
  { date: <>30<sup>th</sup> to 31<sup>st</sup> October 2026</>, event: "Conference Dates", status: "highlight" },
]

export default function Timeline() {
  return (
    <section id="timeline" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
             <span className="text-foreground">Dates</span>
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

        <div className="mt-12 p-8 bg-card border border-border rounded-xl relative">
          <div className="absolute top-4 right-4 md:top-8 md:right-8">
            <Image 
              src="/Research_Public_Society.png" 
              alt="Research Public Society Logo" 
              width={100} 
              height={100} 
              className="object-contain w-16 h-16 md:w-24 md:h-24"
            />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-6 pr-20 md:pr-32">Paper Submission & Publication</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-primary font-semibold mb-3">Submission Process</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>•	Authors are invited to submit original and unpublished research papers</li>
                <li>•	Papers should follow the standard conference paper format</li>
                <li>•	All submitted papers will undergo peer review by experts</li>
                <li>•	Accepted and Registered papers will be presented during the conference</li>
              </ul>
            </div>
            <div>
              <p className="text-primary font-semibold mb-3">Publication Opportunities</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>●	All accepted and presented papers will be forwarded to the Research Culture Society’s peer‑reviewed Journal adhering to UGC CARE guidelines.
 </li>
 <li>●	 Selected papers will be published in Scopus/ Springer/Web of Science journals with additional fees, subjected to condition.</li>
 
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
