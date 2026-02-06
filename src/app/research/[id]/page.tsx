import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import fs from "fs/promises";
import path from "path";
import dynamic from "next/dynamic";

// Research data types
export interface ResearchData {
  id: string;
  title: string;
  subtitle?: string;
  date: string;
  category?: string;
  heroImage: string;
  component?: string; // 组件名称（如 ResearchReport001）
}

// Read JSON data
async function getResearchData(id: string): Promise<ResearchData> {
  try {
    const fileName = `research-${id.padStart(3, '0')}.json`;
    const filePath = path.join(process.cwd(), 'research-data', fileName);
    const fileContent = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContent);
  } catch (error) {
    // Fallback to default data if file not found
    console.error(`Research data not found for id: ${id}`, error);
    return {
      id: "1",
      title: "Research Not Found",
      date: "",
      heroImage: "/images/research-bg.webp",
    };
  }
}

// Generate static params - 在 output: export 模式下需要同步返回
export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
    { id: '6' }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const research = await getResearchData(id);

  return {
    title: `${research.title} | ChainLex Research`,
    description: research.subtitle || research.title,
  };
}

export default async function ResearchDetail({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const research = await getResearchData(id);

  // 动态加载报告组件
  const ResearchComponent = research.component
    ? dynamic(
        () => import(`@/components/research/${research.component}`).catch(() => null),
        { ssr: true }
      )
    : null;

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Background */}
      <section className="relative h-[360px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={research.heroImage}
            alt={research.title}
            fill
            className="object-cover"
          />
          {/* Mask Overlay */}
          <Image
            src="/images/mask.webp"
            alt="mask"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full px-[12%] pt-32">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-white hover:opacity-80 transition-opacity mb-6"
          >
            <Image src="/icons/back.svg" alt="Back" width={24} height={24} />
            <span className="font-inter text-[16px] font-medium weight-[500]">
              Back
            </span>
          </Link>

          <div className="mb-6 w-full h-px bg-[#FFFFFF1F]" />

          {/* Category & Date */}
          <div className="flex items-center gap-3 mb-4">
            {research.category && (
              <span className="bg-brand-navy text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">
                {research.category}
              </span>
            )}
            <span className="text-gray-500 text-xs font-serif italic">{research.date}</span>
          </div>

          {/* Title */}
          <h1 className="font-bodoni text-[48px] text-white mb-4 font-regular leading-tight">
            {research.title}
          </h1>

          {/* Subtitle */}
          {research.subtitle && (
            <p className="font-serif text-white/80 text-[18px] italic max-w-3xl">
              {research.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="flex-1 bg-white py-16">
        <div className="px-[12%]">
          {ResearchComponent ? (
            <ResearchComponent />
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Research content not available.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
