export default function RegistrationFee() {
  return (
    <section id="registration" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Registration <span className="text-primary">Fees</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Registration fee includes conference presentation and publication.
          </p>
        </div>

        {/* Fee Tables */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Online Presentation */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
            <div className="bg-primary/10 px-6 py-4 border-b border-border">
              <h3 className="text-xl font-bold text-foreground">Online Presentation <span className="text-sm font-normal text-muted-foreground">(Single Author*)</span></h3>
            </div>
            <div className="divide-y divide-border">
              {[
                { category: "Students", fee: "₹ 1,000" },
                { category: "Research Scholars", fee: "₹ 1,200" },
                { category: "Academicians", fee: "₹ 1,500" },
                { category: "Industry Persons", fee: "₹ 1,800" },
                { category: "International Participant", fee: "$ 25" },
                { category: "Additional Author", fee: "₹ 250" },
              ].map((item) => (
                <div key={item.category} className="flex justify-between items-center px-6 py-4 hover:bg-primary/5 transition-colors">
                  <span className="text-foreground font-medium">{item.category}</span>
                  <span className="text-primary font-bold">{item.fee}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Offline Presentation */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
            <div className="bg-primary/10 px-6 py-4 border-b border-border">
              <h3 className="text-xl font-bold text-foreground">Offline Presentation <span className="text-sm font-normal text-muted-foreground">(Single Author*)</span></h3>
            </div>
            <div className="divide-y divide-border">
              {[
                { category: "Students", fee: "₹ 1,200" },
                { category: "Research Scholars", fee: "₹ 1,500" },
                { category: "Academicians", fee: "₹ 1,800" },
                { category: "Industry Persons", fee: "₹ 2,000" },
                { category: "International Participant", fee: "$ 50" },
                { category: "Additional Author", fee: "₹ 250" },
              ].map((item) => (
                <div key={item.category} className="flex justify-between items-center px-6 py-4 hover:bg-primary/5 transition-colors">
                  <span className="text-foreground font-medium">{item.category}</span>
                  <span className="text-primary font-bold">{item.fee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>



        {/* Payment Details */}
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
          <div className="bg-primary/10 px-6 py-4 border-b border-border">
            <h3 className="text-xl font-bold text-foreground">Payment Details</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Payment Mode", value: "Online Transfer / Bank Transfer" },
                { label: "Account Name", value: "Lokmanya Tilak College Of Engineering" },
                { label: "Bank Name", value: "Indian Bank" },
                { label: "Account Number", value: "50070855247" },
                { label: "IFSC Code", value: "IDIB000V514" },
                { label: "MICR Code", value: "400019101" },
                { label: "Branch", value: "Vashi Branch, Navi Mumbai 400 703" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 p-3 bg-background rounded-lg border border-border">
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">{item.label}</span>
                  <span className="text-foreground font-medium">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">Note:</span> After payment, kindly send the payment screenshot / transaction ID to the conference Email ID.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
