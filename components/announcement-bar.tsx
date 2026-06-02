export default function AnnouncementBar() {
  const message = "📢  Paper Submission Deadline is Extended  —  Submit Your Research Paper Now!"

  return (
    <div className="w-full bg-primary/10 border-b border-primary/20 overflow-hidden z-[60] relative">
      <div className="flex w-max animate-marquee">
        {/* Repeat message many times for seamless continuous scroll */}
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="shrink-0 px-12 py-2 text-sm font-medium tracking-wide text-primary whitespace-nowrap"
          >
            {message}
          </span>
        ))}
      </div>
    </div>
  )
}
