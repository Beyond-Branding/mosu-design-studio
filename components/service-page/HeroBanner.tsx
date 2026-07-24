import Image from "next/image";

export default function HeroBanner({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <section className="relative h-screen">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute bottom-24 left-20 text-white">
        <h1 className="text-[140px] font-black uppercase">
          {title}
        </h1>
      </div>
    </section>
  );
}