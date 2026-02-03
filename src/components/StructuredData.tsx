interface StructuredDataProps {
  type: "organization" | "website";
}

export default function StructuredData({ type }: StructuredDataProps) {
  const organizationData = {
    "@type": "Organization",
    name: "ChainLex",
    description: "The AI-Driven Compliance Infrastructure for Tokenized Assets",
    url: "https://chainlex.ai",
    logo: "https://chainlex.ai/icons/logo.svg",
    sameAs: [
      // Add your social media links here
      // "https://twitter.com/ChainLex",
      // "https://linkedin.com/company/chainlex",
    ],
  };

  const websiteData = {
    "@type": "WebSite",
    name: "ChainLex",
    url: "https://chainlex.ai",
    description: "The AI-Driven Compliance Infrastructure for Tokenized Assets",
  };

  const data = type === "organization" ? organizationData : websiteData;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  );
}
