import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";
import WeOffer from "@/components/service-page/WeOffer";

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
     <main className="min-h-screen overflow-hidden bg-[#111111] text-[#e9e9e7]">

    {/* NAVBAR */}
    <Navbar />

      {/* =====================================================
          01 — HERO
      ===================================================== */}

      <section className="relative h-[100svh] min-h-[650px] w-full overflow-hidden bg-black">

        <Image
          src={service.image}
          alt={service.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-x-0 bottom-[7vh] z-10 px-6">

          <h1
  className="
    whitespace-nowrap
    text-center
    text-[10vw]
    font-normal
    uppercase
    leading-[0.82]
    tracking-[-0.07em]
    text-white
    sm:text-[9vw]
    lg:text-[8.5vw]
  "
>
            {service.title}
          </h1>

        </div>

      </section>


      {/* =====================================================
          02 — WORK PROCESS
      ===================================================== */}

      <section className="relative min-h-[600px] w-full overflow-hidden bg-[#111111]">

        {/* FLOATING CIRCLE */}

        <div
          className="
            absolute
            left-[4vw]
            top-0
            h-14
            w-14
            rounded-full
            border
            border-white/30
            animate-floating-circle
          "
        />

        <div
          className="
            flex
            min-h-[600px]
            w-full
            flex-col
            items-center
            justify-center
            px-6
            py-16
            text-center
          "
        >

          {/* HEADING */}

          <Reveal>
            <h2
              className="
                text-[15vw]
                font-semibold
                uppercase
                leading-[0.76]
                tracking-[-0.085em]
                text-[#e9e9e7]
                sm:text-[12vw]
                lg:text-[8.5vw]
              "
            >
              WORK
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <h2
              className="
                text-[15vw]
                font-semibold
                uppercase
                leading-[0.76]
                tracking-[-0.085em]
                text-[#e9e9e7]
                sm:text-[12vw]
                lg:text-[8.5vw]
              "
            >
              PROCESS
            </h2>
          </Reveal>


          {/* DESCRIPTION */}

          <Reveal delay={180}>
            <p
              className="
                mt-7
                max-w-[390px]
                text-[13px]
                font-normal
                leading-[1.2]
                tracking-[-0.02em]
                text-white/55
                sm:text-[14px]
              "
            >
              Where architecture meets emotion—we design hotel
              experiences that guests remember long after checkout.
            </p>
          </Reveal>


          {/* SCROLL */}

          <Reveal delay={280}>
            <div className="mt-9 flex flex-col items-center">

              <span
                className="
                  mb-4
                  h-10
                  w-px
                  origin-top
                  bg-white/25
                  animate-scroll-line
                "
              />

              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.4em]
                  text-white/40
                "
              >
                Scroll to explore
              </span>

              <span
                className="
                  mt-2
                  text-xs
                  text-white/50
                  animate-scroll-arrow
                "
              >
                ↓
              </span>

            </div>
          </Reveal>

        </div>

      </section>


      {/* =====================================================
          03 — SERVICE IMAGE + PROCESS
      ===================================================== */}

      <section className="relative w-full bg-[#111111]">

        <div className="grid lg:grid-cols-[minmax(0,2.25fr)_minmax(320px,0.75fr)]">

          {/* =================================================
              LEFT — IMAGE / MAP
          ================================================= */}

          <div className="relative h-[72vh] min-h-[560px] overflow-hidden bg-black">

            {/* IMAGE */}

            <div className="absolute inset-0">

              <Image
                src={service.heroImage}
                alt={`${service.title} design`}
                fill
                sizes="(max-width: 1024px) 100vw, 75vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/10" />

              <div
                className="
                  absolute
                  left-[14%]
                  top-[8%]
                  z-10
                  h-14
                  w-14
                  rounded-full
                  border
                  border-white/60
                "
              />

            </div>


            {/* WORLDWIDE REACH */}

            <details className="group absolute inset-0 z-20">

              <summary
                className="
                  absolute
                  bottom-6
                  left-6
                  z-30
                  cursor-pointer
                  list-none
                  text-[9px]
                  uppercase
                  tracking-[0.22em]
                  text-white
                  sm:bottom-8
                  sm:left-8
                "
              >

                <span className="flex items-center gap-3">

                  <span
                    className="
                      flex
                      h-7
                      w-7
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/50
                      text-sm
                      transition-transform
                      duration-500
                      group-open:rotate-45
                    "
                  >
                    +
                  </span>

                  <span>Worldwide Reach</span>

                </span>

              </summary>


              {/* MAP */}

              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  bg-[#151515]
                  opacity-0
                  transition-opacity
                  duration-700
                  group-open:opacity-100
                "
              >

                <iframe
                  title="Worldwide Studio Reach"
                  src="https://www.google.com/maps?q=World&output=embed"
                  className="h-full w-full border-0 grayscale"
                  loading="lazy"
                  allowFullScreen
                />

                <div className="pointer-events-none absolute inset-0 bg-black/20" />

                <div
                  className="
                    absolute
                    left-6
                    top-6
                    z-10
                    text-white
                    mix-blend-difference
                    sm:left-8
                    sm:top-8
                  "
                >

                  <p
                    className="
                      text-[8px]
                      uppercase
                      tracking-[0.3em]
                    "
                  >
                    Worldwide Reach
                  </p>

                  <p
                    className="
                      mt-2
                      text-[clamp(1.8rem,3.5vw,3.5rem)]
                      font-normal
                      uppercase
                      leading-[0.85]
                      tracking-[-0.05em]
                    "
                  >
                    Global
                    <br />
                    Perspective
                  </p>

                </div>

              </div>

            </details>

          </div>


          {/* =================================================
              RIGHT — PROCESS
          ================================================= */}

          <div
            className="
              flex
              min-h-[560px]
              flex-col
              justify-between
              bg-[#111111]
              px-7
              py-8
              sm:px-9
              lg:px-10
              lg:py-8
            "
          >

            <div className="space-y-4">

              {/* FADED */}

              <div
                className="
                  text-[17px]
                  font-medium
                  uppercase
                  leading-[0.92]
                  tracking-[-0.045em]
                  text-white/15
                "
              >
                Architectural Concept
                <br />
                Interior Design Concept
              </div>


              {/* ACTIVE */}

              <div className="border-t border-white/10 pt-4">

                <div className="flex items-start gap-3">

                  <span
                    className="
                      mt-0.5
                      h-5
                      w-5
                      shrink-0
                      rounded-full
                      border
                      border-white/70
                    "
                  />

                  <div>

                    <h3
                      className="
                        text-[17px]
                        font-medium
                        uppercase
                        leading-[0.92]
                        tracking-[-0.045em]
                      "
                    >
                      FF&E and Budgeting
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-[340px]
                        text-[13px]
                        font-normal
                        leading-[1.25]
                        tracking-[-0.015em]
                        text-white/50
                      "
                    >
                      Furniture, lighting, and decorative elements
                      are selected for both visual impact and
                      long-term performance. We coordinate with
                      global suppliers, optimizing costs without
                      compromising quality.
                    </p>

                  </div>

                </div>

              </div>


              {/* FADED */}

              <div
                className="
                  pt-2
                  text-[17px]
                  font-medium
                  uppercase
                  leading-[0.92]
                  tracking-[-0.045em]
                  text-white/15
                "
              >
                Design & Build Supervision
              </div>


              {/* WORLDWIDE */}

              <div className="pt-1">

                <details className="group">

                  <summary
                    className="
                      flex
                      cursor-pointer
                      list-none
                      items-center
                      gap-3
                      text-[17px]
                      font-medium
                      uppercase
                      leading-[0.92]
                      tracking-[-0.045em]
                    "
                  >

                    <span
                      className="
                        flex
                        h-5
                        w-5
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/70
                        text-sm
                        font-normal
                        transition-transform
                        duration-500
                        group-open:rotate-45
                      "
                    >
                      +
                    </span>

                    <span>Worldwide Reach</span>

                  </summary>

                  <p
                    className="
                      mt-3
                      max-w-[340px]
                      pl-8
                      text-[13px]
                      font-normal
                      leading-[1.25]
                      tracking-[-0.015em]
                      text-white/45
                    "
                  >
                    Our studio works across international markets,
                    coordinating design, sourcing, consultants,
                    and project execution across different regions.
                  </p>

                </details>

              </div>

            </div>


            {/* BOTTOM LABEL */}

            <div
              className="
                mt-8
                flex
                items-center
                justify-between
                border-t
                border-white/10
                pt-4
                text-[8px]
                uppercase
                tracking-[0.22em]
                text-white/25
              "
            >
              <span>Hotel & Resort Design</span>
              <span>03 / 07</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          04 — FINAL CTA
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#111111]
          px-6
          py-[11vh]
          sm:px-10
          lg:px-16
        "
      >

        <div
          className="
            mx-auto
            flex
            min-h-[500px]
            max-w-[1350px]
            flex-col
            items-center
            justify-center
            text-center
          "
        >

          {/* LABEL */}

          <Reveal>
            <p
              className="
                mb-7
                text-[8px]
                uppercase
                tracking-[0.32em]
                text-white/30
              "
            >
              Let&apos;s Talk
            </p>
          </Reveal>

{/* MAIN TEXT */}

<Reveal delay={100}>
  <h2
    className="
      w-full
      max-w-[1100px]
      text-[7vw]
      font-medium
      uppercase
      leading-[0.9]
      tracking-[-0.065em]
      text-[#e9e9e7]
      [word-spacing:0.15em]
      sm:text-6xl
      lg:text-[5.3vw]
    "
  >
    <span className="cta-line block">
      <span className="cta-line-inner">
        LET US HELP YOU DESIGN
      </span>
    </span>

    <span className="cta-line block">
      <span className="cta-line-inner">
        A SPACE THAT TRULY
      </span>
    </span>

    <span className="cta-line block">
      <span className="cta-line-inner">
        REFLECTS YOUR UNIQUE
      </span>
    </span>

    <span className="cta-line block">
      <span className="cta-line-inner">
        STYLE AND NEEDS
      </span>
    </span>
  </h2>
</Reveal>


          {/* BUTTON */}

          <Reveal delay={220}>

            <Link
              href="/contact"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-6
                py-2.5
                text-[9px]
                uppercase
                tracking-[0.08em]
                text-white/80
                transition-all
                duration-500
                hover:bg-white
                hover:text-black
              "
            >

              <span>Send Request</span>

              <span
                className="
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                  transition-transform
                  duration-500
                  group-hover:translate-x-1
                "
              >
                ↗
              </span>

            </Link>

          </Reveal>

        </div>

      </section>


       {/* =====================================================
          05 — WE OFFER
      ===================================================== */}

      <div className="bg-[#111111]">
        <WeOffer />
      </div>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </main>
  );
}