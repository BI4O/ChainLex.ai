import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Generate static params for all research pages
export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" }
  ];
}

// Mock data - in real app this would come from API/database
const researchData: Record<
  string,
  {
    title: string;
    date: string;
    image: string;
    content: string[];
  }
> = {
  "1": {
    title: "The 2026 Crypto Regulation outlook",
    date: "Dec 9, 2025",
    image: "/images/agent-matrix.webp",
    content: [
      "Miami, FL - Securitize, the leader in tokenizing real-world assets (RWAs), today announced the appointment of Jerome Roche as its new General Counsel. Roche joins Securitize from PayPal, where he served as Head of Legal for Digital Assets and played a central role in the development,launch, and regulatory strategy for some of the company's most significant financial-technology initiatives, including PayPal USD (PYUSD), a U.S. dollar denominated stablecoin.",
      "Roche's hiring represents a meaningful step in Securitize's continued elevation as the company scales regulated tokenization infrastructure across the U.S. and Europe. With more than 20 years of combined experience across fintech, banking, big law, and government, including securities trading, stablecoin development, and crypto regulatory strategy, Roche brings the rare blend of deep regulatory fluency and modern technology expertise essential for the next stage of compliant, global tokenization.",
      "Roche's hiring represents a meaningful step in Securitize's continued elevation as the company scales regulated tokenization infrastructure across the U.S. and Europe. With more than 20 years of combined experience across fintech, banking, big law, and government, including securities trading, stablecoin development, and crypto regulatory strategy, Roche brings the rare blend of deep regulatory fluency and modern technology expertise essential for the next stage of compliant, global tokenization.",
      "Roche's hiring represents a meaningful step in Securitize's continued elevation as the company scales regulated tokenization infrastructure across the U.S. and Europe. With more than 20 years of combined experience across fintech, banking, big law, and government, including securities trading, stablecoin development, and crypto regulatory strategy, Roche brings the rare blend of deep regulatory fluency and modern technology expertise essential for the next stage of compliant, global tokenization."
    ]
  },
  "2": {
    title: "The 2026 Crypto Regulation outlook",
    date: "Dec 9, 2025",
    image: "/images/agent-matrix.webp",
    content: [
      "Miami, FL - Securitize, the leader in tokenizing real-world assets (RWAs), today announced the appointment of Jerome Roche as its new General Counsel. Roche joins Securitize from PayPal, where he served as Head of Legal for Digital Assets and played a central role in the development, launch, and regulatory strategy for some of the company's most significant financial-technology initiatives, including PayPal USD (PYUSD), a U.S. dollar denominated stablecoin.",
      "Roche's hiring represents a meaningful step in Securitize's continued elevation as the company scales regulated tokenization infrastructure across the U.S. and Europe. With more than 20 years of combined experience across fintech, banking, big law, and government, including securities trading, stablecoin development, and crypto regulatory strategy, Roche brings the rare blend of deep regulatory fluency and modern technology expertise essential for the next stage of compliant, global tokenization.",
      "Roche's hiring represents a meaningful step in Securitize's continued elevation as the company scales regulated tokenization infrastructure across the U.S. and Europe. With more than 20 years of combined experience across fintech, banking, big law, and government, including securities trading, stablecoin development, and crypto regulatory strategy, Roche brings the rare blend of deep regulatory fluency and modern technology expertise essential for the next stage of compliant, global tokenization.",
      "Roche's hiring represents a meaningful step in Securitize's continued elevation as the company scales regulated tokenization infrastructure across the U.S. and Europe. With more than 20 years of combined experience across fintech, banking, big law, and government, including securities trading, stablecoin development, and crypto regulatory strategy, Roche brings the rare blend of deep regulatory fluency and modern technology expertise essential for the next stage of compliant, global tokenization."
    ]
  },
  "3": {
    title: "The 2026 Crypto Regulation outlook",
    date: "Dec 9, 2025",
    image: "/images/agent-matrix.webp",
    content: [
      "Miami, FL - Securitize, the leader in tokenizing real-world assets (RWAs), today announced the appointment of Jerome Roche as its new General Counsel. Roche joins Securitize from PayPal, where he served as Head of Legal for Digital Assets and played a central role in the development, launch, and regulatory strategy for some of the company's most significant financial-technology initiatives, including PayPal USD (PYUSD), a U.S. dollar denominated stablecoin.",
      "Roche's hiring represents a meaningful step in Securitize's continued elevation as the company scales regulated tokenization infrastructure across the U.S. and Europe. With more than 20 years of combined experience across fintech, banking, big law, and government, including securities trading, stablecoin development, and crypto regulatory strategy, Roche brings the rare blend of deep regulatory fluency and modern technology expertise essential for the next stage of compliant, global tokenization.",
      "Roche's hiring represents a meaningful step in Securitize's continued elevation as the company scales regulated tokenization infrastructure across the U.S. and Europe. With more than 20 years of combined experience across fintech, banking, big law, and government, including securities trading, stablecoin development, and crypto regulatory strategy, Roche brings the rare blend of deep regulatory fluency and modern technology expertise essential for the next stage of compliant, global tokenization.",
      "Roche's hiring represents a meaningful step in Securitize's continued elevation as the company scales regulated tokenization infrastructure across the U.S. and Europe. With more than 20 years of combined experience across fintech, banking, big law, and government, including securities trading, stablecoin development, and crypto regulatory strategy, Roche brings the rare blend of deep regulatory fluency and modern technology expertise essential for the next stage of compliant, global tokenization."
    ]
  }
};

export default async function ResearchDetail({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const research = researchData[id] || researchData["1"];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section with Background */}
      <section className="relative h-[480px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/research-bg.webp"
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
        <div className="relative z-10 h-full px-[12%] pt-[160px]">
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

          <div className="mb-6 w-full h-[1px] bg-[#FFFFFF1F]" />

          {/* Title */}
          <h1 className="font-bodoni text-[60px] text-white mb-4 font-regular">
            {research.title}
          </h1>

          {/* Date */}
          <p className="font-inter text-white/80 text-[18px] font-regular">
            {research.date}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex-1 bg-white py-16">
        <div className="px-[12%]">
          {research.content.map((paragraph, index) => (
            <p
              key={index}
              className="font-inter text-[20px] text-black/80 leading-relaxed mb-6 last:mb-0 font-regular"
            >
              {index === 0 && (
                <span className="font-semibold weight-[600] text-black/80">
                  Miami, FL
                </span>
              )}
              {index === 0 ? paragraph.replace("Miami, FL", " -") : paragraph}
            </p>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
