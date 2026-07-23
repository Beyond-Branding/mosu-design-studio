import { notFound } from "next/navigation";
import { services } from "../services";
import Hero from "@/components/service-detail/Hero";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <h1 className="text-7xl font-black">
        {service.title}
      </h1>
    </main>
  );
}