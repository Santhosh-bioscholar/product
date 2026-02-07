
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const benefits  = [
    {
        title: "Real-time Insight",
        description: "Gain immediate visibility into your data with live dashboards that update instantly.",
        icon: "insights",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXQIRUHT4jwUMsE5vXycKWOqVmGz9ZLJbOMC_a_RkK-EevAJddjb7NTM_8N3VqA32avn5akdiCKgTXFjNNK6AotnhpP_S9XfLfZf3gjoXP469vdGBUWMABsrFazp70tG4kJgAEWO3IcfXJ8bxc3p_dNFSOsr2zlQxPDFhiHIwxSYzYMseznBK5D8k3FfUKDnHMf1PDhZP7RH2lHQhEySn4mgZhrupDsykzPbkfPrcIp6IoHbbwLEoawCaeEZZm85WN7m4Wf1-iKTB6",
    },
    {
        title: "Seamless Sync",
        description: "Collaborate effortlessly across teams. Your changes reflect everywhere, instantly.",
        icon: "sync_alt",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWHk47q1jI7Thl9KVFnThM6OJ2IMdX-IgS-PBU7SW-xlug7N88it8N1-U9YbJ5F5fKlCfOl9HJgGr9pjNjylpAKSgLhOh3AaS09CzC3jeZNbErnkWPJka5KctpVUYkmUIhkQtpPy61M17iDwV1z1agaZ783j0DPpiaCUOC2ZrfHILUL62qWwP9M0ugWdpbyNwDeXdN_W_mOtTU98pQliiJ-QGh2sezh0sjYrxcNr97SS443aTry73W6yS-sSavRc9bc6us2uybuCoa",
    },
    {
        title: "Enterprise Security",
        description: "Bank-grade encryption for your peace of mind. We protect your data like it's our own.",
        icon: "verified_user",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdK_KQ-QWCmzKoW3KIXq2H6txcqbDLrMZMu6PB4C9FWPg4UJm9VTiY3H1BiMePE_ORnJNIlEw3dEd573Yt8raVTHblD3TFC6b63xz2trAR6i5xn6F8b3FjVvHBDgPrkRoKedluYperMdmOlHFSSMGdRno6VkZSkPjhNdlFiPXtvYMEU0cILiFbSf9so-9u9fPEqn_rJdJxhOe8rvXepHhh-Q_pcFPv9PYaI465a9otsPgRu-U68UUus3cS4MVSnfknYBpR02IgpqVc",
    },
    {
        title: "Developer First",
        description: "Built with an API-first approach. Flexible documentation and robust SDKs ready to go.",
        icon: "terminal",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQPyMQtptIRbhQweyvGxKHpOWuUfv5NH_FYZTBznrfW4DH8_xL-RpapglCaA_OGEhiVbp7nmb1PSOY_J1tjjVCi_rECazBOjm2rrumK92F0uUzUO7YhKbRqbad2E_7lomCt_mdfHbb05ZTxGlH8MSIUh4crzp-4_D5xeEhMVlu5a8j05aYdQvIxHQ617F6U_03sAX9nyy0nmFrEp_j-KZzCbDSKsBMC2twY3gCNmIW6MB_IteTr6eCagb8E0O0UOh2zj4ekJDKF5AO",
    },
    {
        title: "Mobile Ready",
        description: "Fully responsive design for any device. Work from anywhere without compromise.",
        icon: "smartphone",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3QmZTIVHvjG9rXOMH7GBxZ3ByerHXor5QewApRGvnEVQZD_g8hgJi4hVmS2f_4Z7xpD4CVb--wLkaEd2tHPYzxqF0U8T53IXLCFa57PbAW4_x4qaBDHV1nvSITYta82UkstLdGM9b5L6gMjUI0OdWrfHKsaL8qqD0z1-psBLZU5SZlIw9IPmyS6nJ9NexX4o3ri26As4Cu_bUfVrBLvU53PReqsNTGCORVaEHFZOyTOg0-FXr7FeJFsv2l25lKPcEYcLiHT-fLJ2w",
    },
    {
        title: "24/7 Support",
        description: "Round-the-clock assistance whenever you need it. We are always here for you.",
        icon: "support_agent",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN7-RLqVxHDalg1aa8WxQ3AkRkYceomEAsGBlyhokBZCu4rTWepsdkVRGljUNU7t8100KKbo8531mFB4BwoYx8evsL5rzz22qjYC7Lhz-GEAjKKGf1Lrf0fK-dlJT4-t7L80yIrTMsJ2NauLAzxWniDFhin7YbXsIAPFPSgOiHQEIAjSTXyNmJ_6eV1BPSsY6CPcKM4G6ZWa0Y-VUxUADfizJ8M4NObuEPRNa7azsQhcwV9aU8VbQOqlNdVX3F6tKrSCQ4bFY8Rchi",
    },
];

export const BenefitsSection: React.FC = () => {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = React.useState(0);
  const [progress, setProgress] = React.useState(0);

  const CARD_WIDTH = 400; // matches md:min-w-[400px]
const INTERVAL = 5000;

const scrollToIndex = (index: number) => {
  if (!scrollContainerRef.current) return;

  scrollContainerRef.current.scrollTo({
    left: index * CARD_WIDTH,
    behavior: "smooth",
  });

  setActiveIndex(index);
  setProgress(0);
};

// Manual arrows (looping)
const scroll = (direction: "left" | "right") => {
  const nextIndex =
    direction === "left"
      ? (activeIndex - 1 + benefits.length) % benefits.length
      : (activeIndex + 1) % benefits.length;

  scrollToIndex(nextIndex);
};

  // ✅ AUTO SWIPE
  React.useEffect(() => {
  const interval = setInterval(() => {
    const nextIndex = (activeIndex + 1) % benefits.length;
    scrollToIndex(nextIndex);
  }, INTERVAL);

  return () => clearInterval(interval);
}, [activeIndex]);

  // ✅ PROGRESS ANIMATION
  React.useEffect(() => {
    let start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / INTERVAL) * 100, 100));
    }, 50);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <section className="relative w-full py-12 md:py-24 bg-background dark:bg-background-dark overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 h-auto lg:h-[650px] items-stretch">

          {/* LEFT SIDE — UNCHANGED */}
          <div className="lg:w-1/3 flex flex-col justify-center shrink-0 lg:sticky lg:top-24 z-10 h-fit">
            <div className="max-w-md">
              <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground dark:text-white leading-tight">
                Key Benefits
              </h2>
              <p className="text-lg text-muted-foreground dark:text-gray-300 mb-10 leading-relaxed font-sans">
                Explore how our platform transforms your workflow through speed,
                efficiency, and clarity. Scroll to see the pillars of our technology.
              </p>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => scroll("left")}
                  className="size-12 rounded-full border border-border dark:border-gray-600 flex items-center justify-center hover:bg-muted dark:hover:bg-gray-800 transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 text-foreground dark:text-white group-hover:text-primary" />
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="size-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
                >
                  <ArrowRight className="w-5 h-5 text-foreground dark:text-white group-hover:text-primary" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SCROLLER — UNCHANGED */}
          <div
            ref={scrollContainerRef}
            className="lg:w-2/3 w-full overflow-x-auto no-scrollbar flex gap-6 snap-x snap-mandatory lg:pl-4 pb-4 items-center"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative min-w-[300px] md:min-w-[400px] h-[500px] lg:h-[600px] rounded-2xl overflow-hidden snap-center bg-muted dark:bg-gray-800 group shadow-lg cursor-pointer transition-transform duration-500 hover:scale-[1.02] flex-shrink-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${benefit.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="inline-block p-2 bg-primary/20 backdrop-blur-sm rounded mb-4 text-primary">
                    <span className="material-symbols-outlined text-primary text-2xl">
                      {benefit.icon}
                    </span>
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-200 text-lg font-light leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ PROGRESS BAR (overlay – does NOT affect UI) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-1 bg-muted/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </section>
  );
};
