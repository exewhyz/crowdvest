"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "Christopher Martinez",
    role: "",
    image: "",
    quote:
      '"Working with this investment company has been a game-changer for me. They have a deep understanding of the commercial real estate market and have helped me identify and invest in high-quality properties that have generated significant returns."',
    rating: 5,
  },
  {
    name: "Sarah Lee",
    role: "",
    image: "",
    quote:
      '"I have invested with the managing partners for several years now, and they continue to impress me with their exceptional service, attention to detail, and investment performance. They have helped me achieve my financial goals and build a secure financial future for myself and my family."',
    rating: 5,
  },
  {
    name: "Daniel Edwards",
    role: "",
    image: "",
    quote:
      '"Crowdvest truly exceeded my expectations. They have an outstanding team of professionals who are knowledgeable, experienced, and genuinely care about their clients\' success. I highly recommend them to anyone interested in commercial real estate investing."',
    rating: 5,
  },
  {
    name: "James L.",
    role: "",
    image: "",
    quote:
      '"I like that they focus on stable, income-producing centers rather than risky projects. The reporting is transparent and I always know how my investment is performing."',
    rating: 5,
  },
  {
    name: "Alicia Rodriguez",
    role: "",
    image: "",
    quote:
      '"I’ve been in several real estate deals, but what stood out here is that the team actually invests alongside us. The communication and quarterly updates have been reliable every time."',
    rating: 5,
  },
];
