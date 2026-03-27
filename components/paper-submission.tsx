import { FileText, Upload } from "lucide-react"

export default function PaperSubmission() {
  return (
    <section id="submission" className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
          Paper <span className="text-primary">Submission</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Ready to submit your research? Download the official template and submit your paper through our secure portal.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="/submit-paper"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-105 w-full sm:w-auto text-lg"
          >
            <Upload className="w-5 h-5" />
            Submit Paper
          </a>
          
          <a
            href="/template.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card text-foreground border-2 border-primary font-bold rounded-lg shadow-lg hover:bg-primary/10 transition-all hover:scale-105 w-full sm:w-auto text-lg"
          >
            <FileText className="w-5 h-5" />
            Download PDF Template
          </a>
        </div>
      </div>
    </section>
  )
}
