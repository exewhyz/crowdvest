import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          img={item.img}
          // tag={item.tag}
          className={item.className}
          transition={{ delay: i * 0.1 }} // Adds a cool stagger effect
        />
      ))}
    </BentoGrid>
  );
}

export const items = [
  {
    title: "Giant Eagle Anchor",
    description:
      "GLA: 39,390 SF (25.84% of total)\nRevenue: ~$231,000 annually(23.81% )\nRent PSF: $5.86\nTerm Remaining: One 5-Year Option",
    img: "https://storage.googleapis.com/msgsndr/6EVjFir36XAKpcrPyYBf/media/68e3f12bc994904e7c3cc3e9.png",
    // tag: "Anchor Tenant",
    className: "md:col-span-2",
  },
  {
    title: "Movement Fitness",
    description:
      "GLA: 65,000 SF (42.64% of total)\nRevenue: ~$230,125 annually(23.72% )\nRent PSF: $3.54\nTerm Remaining: One 5-Year Option",
    img: "https://storage.googleapis.com/msgsndr/6EVjFir36XAKpcrPyYBf/media/68e3f12bc9949008a43cc3e8.png",
    // tag: "Investment Grade",
    className: "md:col-span-1",
  },
  {
    title: "Dollar General",
    description:
      "Combined GLA: 16,250 SF (10.67%)\nCombined Revenue: ~$186,875 annually (19.26%)\nRent PSF: $11.50\nTerm Remaining: Two 5-Year Options",
    img: "https://storage.googleapis.com/msgsndr/6EVjFir36XAKpcrPyYBf/media/68e3f12bffcf3ff6b89a361d.png",
    // tag: "High Visibility",
    className: "md:col-span-1",
  },
  {
    title: "Memorial Hospital",
    description:
      "GLA: 8,425 SF (5.53%)\nRevenue: ~$82,874 annually (8.54%)\nRent PSF: $9.84\nTerm Remaining: One 5-Year Option",
    img: "/dollar.jpeg",
    // tag: "Growth Potential",
    className: "md:col-span-2",
  },
];
