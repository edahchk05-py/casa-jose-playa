import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

const posts = [
  { src: "/images/spread-onto-table.jpg", alt: "Overhead spread of tapas and paella onto the table" },
  { src: "/images/dish-paella-caption.jpg", alt: "Close-up paella fruits de mer" },
  { src: "/images/beach-umbrellas-wide.jpg", alt: "Straw umbrellas along the beach club" },
  { src: "/images/spread-navy-table-2.jpg", alt: "Grilled fish and paella spread on navy linen" },
  { src: "/images/hero-beach-umbrellas.jpg", alt: "Beach club table facing the Atlantic" },
  { src: "/images/dish-shrimp-tapas.jpg", alt: "Garlic prawn tapas beside a glass of white wine" },
];

export function InstagramStrip() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-12 md:py-28">
      <Reveal className="mb-10 text-center">
        <p className="eyebrow mb-4 text-stone">Follow Along</p>
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-hover font-display text-2xl text-charcoal md:text-3xl"
        >
          {siteConfig.social.instagramHandle}
        </a>
      </Reveal>

      <div className="grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
        {posts.map((post, i) => (
          <a
            key={post.src}
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-square overflow-hidden"
          >
            <Image
              src={post.src}
              alt={post.alt}
              fill
              sizes="(min-width: 768px) 16vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ transitionDelay: `${i * 20}ms` }}
            />
            <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/20" />
          </a>
        ))}
      </div>
    </section>
  );
}
