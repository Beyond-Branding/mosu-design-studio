import { notFound } from "next/navigation";
import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { services } from "../services";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#e9e9e7] text-[#171717]">
      <Navbar />

      <main>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative h-screen min-h-[650px] overflow-hidden">

          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* LIGHT OVERLAY */}
          <div className="absolute inset-0 bg-black/10" />

          {/* TITLE */}
          <div className="absolute inset-x-0 bottom-10 z-10 px-6 sm:bottom-14 sm:px-10 lg:bottom-20">

            <h1
              className="
                whitespace-nowrap
                text-[12vw]
                font-black
                uppercase
                leading-[0.8]
                tracking-[-0.07em]
                text-white
                sm:text-[11vw]
                lg:text-[10vw]
              "
            >
              {service.title}
            </h1>

          </div>
        </section>


        {/* =====================================================
            WORK PROCESS INTRO
        ===================================================== */}

        <section className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">

          <div className="mx-auto max-w-[1500px]">

            <div className="flex flex-col items-center text-center">

              <h2
                className="
                  max-w-[1000px]
                  text-[15vw]
                  font-black
                  uppercase
                  leading-[0.78]
                  tracking-[-0.07em]
                  sm:text-[12vw]
                  lg:text-[9vw]
                "
              >
                WORK
                <br />
                PROCESS
              </h2>

              <p
                className="
                  mt-10
                  max-w-[450px]
                  text-sm
                  leading-[1.2]
                  tracking-[-0.03em]
                  text-black/70
                  sm:text-base
                "
              >
                Where architecture meets emotion — we design
                experiences that guests remember long after
                checkout.
              </p>

            </div>

          </div>
        </section>


        {/* =====================================================
            PROCESS IMAGE + CONTENT
        ===================================================== */}

        <section className="relative overflow-hidden">

          <div
            className="
              grid
              lg:grid-cols-[minmax(0,2fr)_minmax(320px,0.8fr)]
            "
          >

            {/* IMAGE */}

            <div className="relative h-[65vh] min-h-[550px]">

              <Image
                src={service.heroImage}
                alt={`${service.title} design`}
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover"
              />

            </div>


            {/* PROCESS CONTENT */}

            <div className="bg-[#e9e9e7] px-8 py-12 sm:px-12 lg:px-10 lg:py-16">

              <div className="space-y-10">

                {service.process.map((step, index) => (

                  <div
                    key={step.title}
                    className="group"
                  >

                    {/* NUMBER */}

                    <div className="mb-2 flex items-center gap-3">

                      <span
                        className="
                          flex
                          h-5
                          w-5
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-black
                          text-[9px]
                        "
                      >
                        {index + 1}
                      </span>

                      <span
                        className="
                          text-[10px]
                          uppercase
                          tracking-[-0.02em]
                          text-black/25
                          transition-colors
                          duration-300
                          group-hover:text-black
                        "
                      >
                        {step.title}
                      </span>

                    </div>


                    {/* TITLE */}

                    <h3
                      className="
                        text-xl
                        font-medium
                        uppercase
                        leading-none
                        tracking-[-0.045em]
                        sm:text-2xl
                      "
                    >
                      {step.title}
                    </h3>


                    {/* DESCRIPTION */}

                    <p
                      className="
                        mt-3
                        max-w-[350px]
                        text-sm
                        leading-[1.25]
                        text-black/55
                      "
                    >
                      {step.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SECOND IMAGE / DESIGN PHILOSOPHY
        ===================================================== */}

        <section className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">

          <div className="mx-auto max-w-[1500px]">

            <div
              className="
                grid
                gap-16
                lg:grid-cols-[1.4fr_0.6fr]
              "
            >

              {/* IMAGE */}

              <div
                className="
                  relative
                  h-[600px]
                  overflow-hidden
                  lg:h-[800px]
                "
              >

                <Image
                  src={service.image}
                  alt={`${service.title} interior`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="
                    object-cover
                    transition-transform
                    duration-[1200ms]
                    hover:scale-105
                  "
                />

              </div>


              {/* TEXT */}

              <div className="flex flex-col justify-end">

                <p
                  className="
                    mb-4
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    text-black/30
                  "
                >
                  Design Philosophy
                </p>


                <h3
                  className="
                    text-4xl
                    font-medium
                    uppercase
                    leading-[0.88]
                    tracking-[-0.055em]
                    sm:text-5xl
                  "
                >
                  Spaces
                  <br />
                  that create
                  <br />
                  memories.
                </h3>


                <p
                  className="
                    mt-8
                    max-w-[350px]
                    text-sm
                    leading-[1.35]
                    text-black/55
                  "
                >
                  {service.description}
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
    LOCATIONS — MUMBAI / DELHI / BANGALORE
===================================================== */}

<section className="bg-black px-6 py-28 text-white sm:px-10 lg:px-16 lg:py-40">

  <div className="mx-auto max-w-[1500px]">

    <p
      className="
        text-[9px]
        uppercase
        tracking-[0.35em]
        text-white/30
      "
    >
      Studio Network
    </p>


    {/* CITIES — ONE LINE */}

    <div
      className="
        mt-16
        grid
        grid-cols-3
        border-t
        border-white/15
      "
    >

      {["Mumbai", "Delhi", "Bangalore"].map((city, index) => (

        <div
          key={city}
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/15
            px-3
            py-8
            sm:px-6
            sm:py-10
            border-r
            last:border-r-0
          "
        >

          <span
            className="
              text-xl
              font-light
              uppercase
              tracking-[-0.03em]
              sm:text-3xl
              lg:text-5xl
            "
          >
            {city}
          </span>

          <span
            className="
              text-[9px]
              text-white/25
            "
          >
            0{index + 1}
          </span>

        </div>

      ))}

    </div>

  </div>

</section>
       {/* =====================================================
    FINAL CTA
===================================================== */}

<section className="px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
  <div className="mx-auto max-w-[1100px] text-center">

    <p
      className="
        mb-8
        text-[9px]
        uppercase
        tracking-[0.35em]
        text-black/30
      "
    >
      Let's Talk
    </p>

    <h2
      className="
        text-4xl
        font-black
        uppercase
        leading-[0.85]
        tracking-[-0.06em]

        sm:text-5xl
        md:text-6xl
        lg:text-[5.5vw]
      "
    >
      LET US HELP YOU DESIGN
      <br />
      A SPACE THAT TRULY
      <br />
      REFLECTS YOUR STYLE
      <br />
      AND NEEDS
    </h2>

    <a
      href="/contact"
      className="
        mt-10
        inline-flex
        items-center
        rounded-full
        bg-black/5
        px-6
        py-3
        text-[9px]
        uppercase
        tracking-wide
        transition-all
        duration-300
        hover:bg-black
        hover:text-white
      "
    >
      SEND REQUEST
    </a>

  </div>
</section>

      </main>

      <Footer />
    </div>
  );
}