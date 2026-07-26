"use client";

interface Props {
  city: any;
  onClose: () => void;
}

export default function ContactModal({ city, onClose }: Props) {
  if (!city) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-md"
      />

      {/* Modal */}
     <div
  className="
    fixed
    left-1/2
    top-1/2
    z-[1000]

    w-[94%]
    sm:w-[90%]
    md:w-[85%]
    lg:w-full

    max-w-2xl
    max-h-[90vh]

    -translate-x-1/2
    -translate-y-1/2

    overflow-y-auto

    rounded-3xl
    bg-[#f6f4f1]

    p-5
    sm:p-7
    md:p-10

    shadow-2xl
  "
>

        {/* Close Button */}
       <button
  onClick={onClose}
  className="
    absolute
    right-4
    top-4

    text-3xl
    md:text-4xl

    text-neutral-400
    hover:text-black
  "
>
  ×
</button>

        {/* Heading */}
       <h2
  className="
    text-3xl
    sm:text-4xl
    md:text-5xl

    font-black
    uppercase
    tracking-tight

    text-neutral-900
    opacity-100
  "
>
  {city.name}
</h2>

        <p className="mt-2 mb-6 text-base text-neutral-600">
          Tell us about your project.
        </p>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-2xl border border-neutral-300 bg-white px-6 py-4 text-base text-[#222] placeholder:text-neutral-500 outline-none transition focus:border-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-2xl border border-neutral-300 bg-white px-6 py-4 text-base text-[#222] placeholder:text-neutral-500 outline-none transition focus:border-black"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full rounded-2xl border border-neutral-300 bg-white px-6 py-4 text-base text-[#222] placeholder:text-neutral-500 outline-none transition focus:border-black"
          />

          <select
            defaultValue=""
            className="w-full rounded-2xl border border-neutral-300 bg-white px-6 py-4 text-base text-[#222] outline-none transition focus:border-black"
          >
            <option value="" disabled>
              Select Service
            </option>

            <option>Hotels & Resorts</option>
            <option>Luxury Residences</option>
            <option>Art Installations</option>
            <option>Sculptures</option>
            <option>Lighting</option>
            <option>Mirrors & Chandeliers</option>
            <option>Doors & Partitions</option>
            <option>Metal Finishes</option>
          </select>

          <textarea
            rows={4}
            placeholder="Tell us about your project..."
            className="
w-full
rounded-2xl
border
border-neutral-300
bg-white

px-4
py-3

sm:px-6
sm:py-4

text-sm
sm:text-base

outline-none
focus:border-black
transition
"
          />

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-black py-4 text-base font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-neutral-800"
          >
            SEND MESSAGE
          </button>

        </form>

      </div>
    </>
  );
}