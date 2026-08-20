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
        className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-md"
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
          border
          border-white/10
          bg-black

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

            text-white/40
            transition-colors
            hover:text-white
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

            text-white
          "
        >
          {city.name}
        </h2>

        <p className="mt-2 mb-6 text-base text-white/60">
          Tell us about your project.
        </p>

        <form className="space-y-4">

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="
              w-full
              rounded-2xl
              border
              border-white/20
              bg-white/[0.06]

              px-6
              py-4

              text-base
              text-white
              placeholder:text-white/40

              outline-none
              transition

              focus:border-white
              focus:bg-white/[0.09]
            "
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="
              w-full
              rounded-2xl
              border
              border-white/20
              bg-white/[0.06]

              px-6
              py-4

              text-base
              text-white
              placeholder:text-white/40

              outline-none
              transition

              focus:border-white
              focus:bg-white/[0.09]
            "
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="
              w-full
              rounded-2xl
              border
              border-white/20
              bg-white/[0.06]

              px-6
              py-4

              text-base
              text-white
              placeholder:text-white/40

              outline-none
              transition

              focus:border-white
              focus:bg-white/[0.09]
            "
          />

          {/* Service */}
          <select
            defaultValue=""
            className="
              w-full
              rounded-2xl
              border
              border-white/20
              bg-white/[0.06]

              px-6
              py-4

              text-base
              text-white

              outline-none
              transition

              focus:border-white
            "
          >
            <option
              value=""
              disabled
              className="bg-black text-white"
            >
              Select Service
            </option>

            <option className="bg-black">Hotels & Resorts</option>
            <option className="bg-black">Luxury Residences</option>
            <option className="bg-black">Art Installations</option>
            <option className="bg-black">Sculptures</option>
            <option className="bg-black">Lighting</option>
            <option className="bg-black">Mirrors & Chandeliers</option>
            <option className="bg-black">Doors & Partitions</option>
            <option className="bg-black">Metal Finishes</option>
          </select>

          {/* Message */}
          <textarea
            rows={4}
            placeholder="Tell us about your project..."
            className="
              w-full
              rounded-2xl
              border
              border-white/20
              bg-white/[0.06]

              px-4
              py-3

              sm:px-6
              sm:py-4

              text-sm
              sm:text-base

              text-white
              placeholder:text-white/40

              outline-none
              transition

              focus:border-white
              focus:bg-white/[0.09]
            "
          />

          {/* Submit */}
          <button
            type="submit"
            className="
              mt-2
              w-full
              rounded-full

              bg-white
              py-4

              text-base
              font-semibold
              uppercase
              tracking-[0.2em]

              text-black

              transition
              duration-300

              hover:bg-white/80
            "
          >
            SEND MESSAGE
          </button>

        </form>
      </div>
    </>
  );
}