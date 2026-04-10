"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import {
  AGENDA_CAROUSEL_AUTOPLAY_DELAY,
  AGENDA_CAROUSEL_DESKTOP_THUMBS_OPTIONS,
  AGENDA_CAROUSEL_MOBILE_THUMBS_OPTIONS,
  AGENDA_CAROUSEL_OPTIONS,
  type AgendaCarouselSlide,
} from "@/app/constants/agenda-page";

type AgendaCarouselProps = {
  slides: AgendaCarouselSlide[];
};

const AgendaCarousel = ({ slides }: AgendaCarouselProps) => {
  const isMobile = useIsMobile();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [mainRef, mainApi] = useEmblaCarousel(AGENDA_CAROUSEL_OPTIONS, [
    Autoplay({ delay: AGENDA_CAROUSEL_AUTOPLAY_DELAY, stopOnInteraction: false }),
  ]);
  const [thumbsRef, thumbsApi] = useEmblaCarousel(
    isMobile
      ? AGENDA_CAROUSEL_MOBILE_THUMBS_OPTIONS
      : AGENDA_CAROUSEL_DESKTOP_THUMBS_OPTIONS,
  );

  const onSelect = useCallback(() => {
    if (!mainApi) return;
    setSelectedIndex(mainApi.selectedScrollSnap());
  }, [mainApi]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbsApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi, thumbsApi],
  );

  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);

    return () => {
      mainApi.off("select", onSelect);
      mainApi.off("reInit", onSelect);
    };
  }, [mainApi, onSelect]);

  const selectedSlide = slides[selectedIndex];

  return (
    <section className="w-full py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="overflow-hidden" ref={mainRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div key={`${slide.image}-${index}`} className="flex-[0_0_100%] min-w-0">
                  <div className="relative h-[240px] sm:h-[300px] md:h-[360px] lg:h-[420px]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
          <div className="absolute inset-0 z-10 flex items-center">
            <div className="px-5 md:px-8 lg:px-10 max-w-3xl">
              <div className="relative mb-3 h-12 w-32 md:h-16 md:w-44">
                <Image
                  src={selectedSlide.logo}
                  alt={`Logo ${selectedSlide.title}`}
                  fill
                  className="object-contain object-left"
                />
              </div>
              <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold leading-tight">
                {selectedSlide.title}
              </h1>
              <p className="mt-2 text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
                {selectedSlide.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div
          className={`overflow-hidden mt-4 ${isMobile ? "" : "flex justify-center"}`}
          ref={thumbsRef}
        >
          <div className="flex gap-2 md:gap-3">
            {slides.map((slide, index) => (
              <button
                key={`thumb-${slide.image}-${index}`}
                type="button"
                onClick={() => onThumbClick(index)}
                className={`relative h-16 w-24 sm:h-20 sm:w-32 md:h-24 md:w-40 rounded-lg overflow-hidden border-2 transition-all ${
                  index === selectedIndex
                    ? "border-primary opacity-100 -translate-y-1"
                    : "border-transparent opacity-70 hover:opacity-100 hover:border-primary"
                }`}
                aria-label={`Selecionar slide ${index + 1}`}
              >
                <Image src={slide.image} alt={slide.title} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaCarousel;
