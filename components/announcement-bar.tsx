export default function AnnouncementBar() {
  const message = "📢  Paper Submission Deadline is Extended  —  Submit Your Research Paper Now!"

  return (
    <div className="w-full bg-gradient-to-r from-red-900 via-red-700 to-red-900 border-b border-red-500/30 overflow-hidden z-[60] relative shadow-lg">
      <div className="flex w-max animate-marquee">
        {/* Repeat message many times for seamless continuous scroll */}
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className="shrink-0 px-10 py-2.5 text-sm sm:text-base font-semibold tracking-widest text-white/95 drop-shadow-md whitespace-nowrap"
          >
            {message}
          </span>
        ))}
      </div>
    </div>
  )
}
