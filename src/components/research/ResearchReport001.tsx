"use client";

export default function ResearchReport001() {
  return (
    <div className="w-full bg-white">
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-12">
        {/* Header */}
        <header className="border-b-4 border-[#0F172A] pb-6 mb-8 flex justify-between items-end">
          <div className="w-3/4">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-[#0F172A] text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">
                Global Research
              </span>
              <span className="text-gray-600 text-xs italic font-serif">January 6, 2026</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
              2026 Global Crypto Asset<br />Regulation Outlook
            </h1>
            <p className="text-lg font-serif text-[#1E40AF] italic mt-2">
              Institutional Reconstruction & The Establishment of the Compliance Cycle
            </p>
          </div>
          <div className="w-1/4 text-right">
            <div className="font-bold text-[#0F172A] text-xl tracking-tight">ChainLex</div>
            <div className="text-[9px] text-gray-500 uppercase tracking-widest">Insight Series</div>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="bg-slate-50 border-l-4 border-[#0F172A] p-6 mb-8 rounded-r">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
            Executive Summary
          </h3>
          <p className="font-serif text-base md:text-lg text-gray-900 leading-relaxed text-justify">
            2026 marks a historic turning point for global crypto asset regulation. The industry has officially transitioned from early &quot;wild growth&quot; to <strong>comprehensive institutionalization</strong>. With the implementation of the U.S. <em>GENIUS Act</em> and the EU&apos;s <em>MiCA</em>, major economies have begun to vie for pricing power in digital finance. The regulatory environment has shifted from &quot;uncertain enforcement&quot; to &quot;legislative certainty.&quot; The exponential rise in compliance costs is squeezing small-to-medium enterprises, pushing the industry into an era of &quot;Great Consolidation&quot; dominated by TradFi (Traditional Finance).
          </p>
        </section>

        {/* Dashboard */}
        <section className="grid grid-cols-2 gap-6 mb-8">
          <DashboardCard
            label="2025 Industry M&A Volume"
            value="$86"
            valueSuffix="B"
            note="▲ Driven by Compliance Costs"
            noteColor="text-[#B45309]"
          />
          <DashboardCard
            label="US Stablecoin Reserve Req."
            value="1:1"
            note="Cash or Short-term Treasuries (GENIUS Act)"
          />
          <DashboardCard
            label="Japan Crypto Tax Reform"
            value="20%"
            oldValue="55%"
            note="(Separate Self-Assessment)"
            valueColor="text-green-700"
          />
          <DashboardCard
            label="Global Compliance (CARF)"
            value="48+"
            note="Jurisdictions Initiating Exchange"
          />
        </section>

        {/* Section 1 */}
        <h3 className="font-serif text-gray-900 border-b-2 border-gray-200 pb-2 mb-6 md:mb-8 text-xl md:text-2xl font-bold">
          1. Macro Overview: From Siege to Integration
        </h3>
        <p className="text-base md:text-lg leading-relaxed text-justify mb-8 text-gray-900">
          Following the implementation of policies by the Trump administration, U.S. regulation has shifted from &quot;enforcement-first&quot; to a &quot;legislative orientation.&quot; The core logic of this shift lies in integrating crypto assets into existing financial prudential frameworks rather than simple prohibition. Globally, the room for regulatory arbitrage is rapidly shrinking, with G7 policy convergence significantly strengthening.
        </p>

        <SectionTitle>2. USA: Dual-Track System &amp; Wall Street&apos;s Advance</SectionTitle>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <SubSectionTitle>2.1 The GENIUS Act: Stablecoin Federalization</SubSectionTitle>
            <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-900">
              Effective July 2025, the GENIUS Act has completely reshaped the stablecoin market. The act mandates a 1:1 reserve requirement (cash or U.S. Treasuries) for payment stablecoins and <strong>explicitly prohibits paying interest to users</strong> to prevent shadow banking risks.
            </p>
            <SubSectionTitle>2.2 The CLARITY Act & SEC Pivot</SubSectionTitle>
            <p className="text-base md:text-lg leading-relaxed text-gray-900">
              This act established dual regulatory jurisdiction between the CFTC and SEC. SEC Chairman Paul Atkins repealed <strong>SAB 121</strong>, allowing banks to engage in crypto custody at scale, directly facilitating the entry of giants like BNY Mellon.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-slate-50 p-4 border border-slate-200 rounded">
            <h4 className="font-bold text-center text-xs text-gray-600 uppercase mb-4">
              US Regulatory Dual-Track Architecture
            </h4>
            <div className="space-y-3">
              <RegulatoryCard
                title="CFTC Jurisdiction"
                subtitle="Digital Commodities (BTC, ETH)"
                description="Exclusive jurisdiction over spot market anti-fraud &amp; manipulation."
                color="border-blue-600"
              />
              <RegulatoryCard
                title="SEC Jurisdiction"
                subtitle="Investment Contracts"
                description="Focus on fundraising stages &amp; centralized projects; emphasizes disclosure."
                color="border-yellow-500"
              />
              <RegulatoryCard
                title="OCC / Fed"
                subtitle="Stablecoins"
                description="Reserve audits & issuer solvency supervision."
                color="border-green-600"
              />
            </div>
          </div>
        </div>

        <SectionTitle>3. Europe: MiCA Cleansing & Tax Transparency</SectionTitle>
        <p className="text-base md:text-lg leading-relaxed text-justify mb-4 text-gray-900">
          The EU market is showing significant &quot;bifurcation.&quot; Following full MiCA implementation, USD stablecoins lacking EMI (Electronic Money Institution) licenses have been delisted en masse, while the market share of compliant Euro stablecoins (e.g., EURC) has surged.
        </p>
        <div className="bg-slate-50 border-l-4 border-[#1E40AF] p-4 rounded mb-8">
          <strong className="text-[#1E40AF] block mb-2 text-base">DAC8 Tax Directive (Effective 2026)</strong>
          <ul className="list-disc pl-4 space-y-1 text-base text-gray-900">
            <li><strong>Comprehensive Data Collection:</strong> All Crypto-Asset Service Providers (CASPs) serving EU clients must collect user identity and Tax Identification Numbers (TIN).</li>
            <li><strong>Automatic Exchange:</strong> Data collected in 2026 will be automatically exchanged between member state tax authorities in 2027, ending the era of &quot;anonymous tax evasion.&quot;</li>
          </ul>
        </div>

        <SectionTitle>4. UK: Independent Path & Market Abuse</SectionTitle>
        <p className="text-base md:text-lg leading-relaxed text-justify mb-4 text-gray-900">
          Post-Brexit, the UK has charted an independent regulatory path, focusing heavily on <strong>Market Abuse</strong>. The FCA requires all trading platforms to possess real-time surveillance systems capable of identifying insider trading and wash trading.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoCard
            title="Statutory Trust"
            description="New UK rules require stablecoin issuer reserve assets to be held in statutory trusts. This ensures reserves are bankruptcy-remote from company assets and prioritized for token holder redemption."
          />
          <InfoCard
            title="Zero Tolerance Enforcement"
            description="The FCA has taken a hard line on unauthorized Financial Promotions. In late 2025, multiple unregistered overseas exchanges were blacklisted for illegally marketing to UK retail investors."
          />
        </div>

        <SectionTitle>5. APAC: Tax Incentives & The Battle for Web3</SectionTitle>
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="w-full md:w-1/2">
            <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-900">
              Unlike the defensive posture of the West, the APAC region (Japan, Hong Kong, Singapore) has pivoted to &quot;industry promotion.&quot;
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-900">
              <strong>Japan&apos;s FY2026 Tax Reform</strong> is a major highlight: reducing the crypto asset gains tax rate from a maximum of 55% (miscellaneous income) to <strong>20% (separate self-assessment taxation)</strong>, and allowing loss carryovers for three years. Additionally, the &quot;unrealized gains tax&quot; on corporate holdings has been abolished, expected to trigger a significant return of Web3 firms to Japan.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-900">
              Hong Kong and Singapore continue to advance stablecoin licensing regimes, competing for status as cross-border payment hubs.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white border border-gray-200 p-2 rounded flex flex-col justify-center">
            <h4 className="text-xs font-bold text-gray-500 uppercase mb-2 text-center">Top Marginal Tax Rates (2026)</h4>
            <TaxChart />
          </div>
        </div>

        <SectionTitle>6. Industry M&amp;A &amp; The Global Compliance Net</SectionTitle>
        <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-900">
          The OECD&apos;s CARF (Crypto-Asset Reporting Framework) has been signed by over 48 jurisdictions. Surging compliance costs are reshaping the industry landscape.
        </p>

        <div className="flex flex-col md:flex-row gap-6 md:items-start mb-8">
          <div className="w-full md:w-1/2 bg-white border border-gray-200 p-6 rounded flex flex-col justify-center">
            <h4 className="text-xs font-bold text-gray-500 uppercase mb-4 text-center">Industry M&A Volume ($ Billion)</h4>
            <MAChart />
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-900">
              <strong>M&A Boom:</strong> Due to prohibitive compliance infrastructure costs (legal & tech compliance alone exceeding $5M annually), small-to-mid-sized exchanges and wallet providers are seeking exits.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-900">
              TradFi giants (e.g., BlackRock, Fidelity) are rapidly completing infrastructure layouts by acquiring licensed crypto-native firms.
            </p>
          </div>
        </div>

        {/* Risk Box */}
        <div className="bg-red-50 border-l-4 border-red-600 p-5 mb-8 rounded relative mt-12">
          <div className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 shadow">
            RISK ALERT
          </div>
          <h3 className="font-bold text-red-900 mb-2 text-sm uppercase">
            7. The Legal Existential Crisis for DAOs
          </h3>
          <p className="text-sm text-red-900 mb-4 leading-relaxed">
            Based on the <em>Samuels v. Lido DAO</em> precedent, pure DAO structures in the US face the risk of being classified as <strong>&quot;General Partnerships.&quot;</strong>
          </p>
          <div className="grid grid-cols-2 gap-4">
            <RiskItem>Unlimited Liability: Governance token holders may be held jointly and severally liable for DAO debts.</RiskItem>
            <RiskItem>Institutional Exit: Top VCs like Paradigm and a16z have paused direct governance participation.</RiskItem>
            <RiskItem>Restructuring: DAOs are forced to pivot to Cayman Foundation or Swiss Association entities for &quot;legal wrapping.&quot;</RiskItem>
            <RiskItem>Decentralization Regression: Decision-making power may concentrate in centralized entities for compliance.</RiskItem>
          </div>
        </div>

        {/* Appendix Table */}
        <div className="mb-8">
          <SectionTitle>Appendix: Global Stablecoin Regulatory Framework Comparison (2026)</SectionTitle>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-2 border-b-2 border-gray-200 bg-gray-50 text-xs font-semibold text-gray-600 uppercase">Dimension</th>
                <th className="p-2 border-b-2 border-gray-200 bg-gray-50 text-xs font-semibold text-[#1E40AF]">USA (GENIUS)</th>
                <th className="p-2 border-b-2 border-gray-200 bg-gray-50 text-xs font-semibold text-gray-600">EU (MiCA)</th>
                <th className="p-2 border-b-2 border-gray-200 bg-gray-50 text-xs font-semibold text-gray-600">Hong Kong</th>
              </tr>
            </thead>
            <tbody>
              <TableRow cells={["Reserve Req.", "1:1 Cash/T-Bills", "High Liquidity Assets", "Held at Licensed Banks"]} firstColBold />
              <TableRow cells={["Interest Payment", "Explicitly Prohibited", "Prohibited", "Discouraged"]} redRow />
              <TableRow cells={["Primary Goal", "USD Dominance / Anti-Shadow Banking", "Consumer Protection", "Financial Hub Status"]} firstColBold />
            </tbody>
          </table>
        </div>

        {/* Conclusion */}
        <div className="bg-gray-900 text-white p-8 rounded-lg">
          <h3 className="font-serif font-bold mb-4 text-xl">Conclusion: The New Cycle Embedded with Compliance</h3>
          <p className="text-sm text-gray-300 leading-relaxed text-justify">
            In 2026, global crypto asset regulation has bid farewell to the early exploration phase. Through the global web woven by the GENIUS Act, MiCA, and CARF, sovereign states have completed the fencing of on-chain finance. Future competitive advantages belong to the &quot;regular forces&quot; capable of navigating complex global compliance networks and transforming them into defensive moats.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-xs text-gray-400">
          <span>© 2026 ChainLex Global Research</span>
        </div>
      </div>
    </div>
  );
}

// Helper Components
function DashboardCard({ label, value, valueSuffix = "", note, oldValue, valueColor = "text-[#0F172A]", noteColor }: {
  label: string;
  value: string;
  valueSuffix?: string;
  note: string;
  oldValue?: string;
  valueColor?: string;
  noteColor?: string;
}) {
  return (
    <div className="border border-gray-200 p-5 rounded shadow-sm bg-white">
      <div className="text-xs text-gray-600 uppercase font-bold tracking-wider">{label}</div>
      <div className={`text-3xl md:text-4xl font-serif font-bold mt-1 ${valueColor}`}>
        {value}<span className="text-lg text-gray-700">{valueSuffix}</span>
      </div>
      <div className={`text-sm mt-1 ${noteColor || "text-gray-700"}`}>
        {oldValue && <span className="line-through mr-1 text-gray-500">{oldValue}</span>}
        {note}
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-['Georgia'] text-gray-900 border-b-2 border-gray-200 pb-2 mt-12 mb-6 md:mb-8 text-xl md:text-2xl font-bold">
      {children}
    </h3>
  );
}

function SubSectionTitle({ children }: { children: string }) {
  return (
    <h4 className="font-bold text-[#0F172A] text-sm md:text-base mb-2 md:mb-3">{children}</h4>
  );
}

function RegulatoryCard({ title, subtitle, description, color }: {
  title: string;
  subtitle: string;
  description: string;
  color: string;
}) {
  return (
    <div className={`flex items-start p-3 md:p-4 bg-white shadow-sm border-l-4 ${color}`}>
      <div>
        <div className="font-bold text-[#0F172A] text-sm md:text-base">{title}</div>
        <div className="text-xs text-gray-600">{subtitle}</div>
        <div className="text-sm leading-tight mt-1 text-gray-800">{description}</div>
      </div>
    </div>
  );
}

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-gray-50 p-4 md:p-6 border border-gray-200">
      <h5 className="font-bold text-[#0F172A] mb-2 md:mb-3 text-sm md:text-base">{title}</h5>
      <p className="text-sm text-gray-800 leading-relaxed">{description}</p>
    </div>
  );
}

function RiskItem({ children }: { children: string }) {
  return (
    <div className="flex items-start">
      <span className="text-red-600 mr-2">•</span>
      <span className="text-sm text-red-900 leading-relaxed">{children}</span>
    </div>
  );
}

function TableRow({ cells, firstColBold, redRow }: { cells: string[]; firstColBold?: boolean; redRow?: boolean }) {
  return (
    <tr className="border-b border-gray-100">
      {cells.map((cell, i) => {
        const isFirstCol = i === 0;
        const isSecondCol = i === 1;
        const isThirdCol = i === 2;

        let cellClass = "p-3 text-sm ";

        if (firstColBold && isFirstCol) {
          cellClass += "font-medium text-gray-700 ";
        } else if (redRow) {
          // 第二行：只有第2、3列是红色
          if (isSecondCol) {
            cellClass += "text-red-600 font-bold ";
          } else if (isThirdCol) {
            cellClass += "text-red-600 ";
          } else {
            cellClass += "text-gray-900 ";
          }
        } else {
          cellClass += "text-gray-900 ";
        }

        return <td key={i} className={cellClass}>{cell}</td>;
      })}
    </tr>
  );
}

// Tax Chart Component - Bar chart showing tax rates (matching original Chart.js design)
function TaxChart() {
  const data = [
    { label: "Japan (Old)", value: 55, color: "#EF4444" },
    { label: "Japan (New)", value: 20, color: "#22C55E" },
    { label: "USA", value: 20, color: "#3B82F6" },
    { label: "UK", value: 20, color: "#94A3B8" },
  ];

  const maxY = 60;
  const barPercentage = 0.6;
  const xLabelHeight = 20; // Space for X-axis labels

  return (
    <div className="h-80 relative px-2">
      {/* Y-axis grid lines and labels */}
      <div className="absolute inset-0 flex flex-col justify-between text-xs font-medium text-gray-700 pointer-events-none" style={{ paddingBottom: xLabelHeight }}>
        <div className="flex items-center">
          <span className="w-8 text-right pr-1">60%</span>
          <div className="flex-1 border-t border-gray-200 border-dashed" />
        </div>
        <div className="flex items-center">
          <span className="w-8 text-right pr-1">40%</span>
          <div className="flex-1 border-t border-gray-200 border-dashed" />
        </div>
        <div className="flex items-center">
          <span className="w-8 text-right pr-1">20%</span>
          <div className="flex-1 border-t border-gray-200 border-dashed" />
        </div>
        <div className="flex items-end">
          <span className="w-8 text-right pr-1 pb-[1px]">0%</span>
          <div className="flex-1 border-t border-gray-300" />
        </div>
      </div>

      {/* Bars container */}
      <div className="absolute inset-0 pl-10" style={{ paddingBottom: xLabelHeight }}>
        <div className="w-full h-full flex items-end justify-around">
          {data.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-end flex-1 max-w-[50px] relative"
              style={{ height: "100%" }}
            >
              {/* Value label on top */}
              <div className="text-xs font-bold text-gray-700 mb-1">
                {item.value}%
              </div>
              {/* Bar */}
              <div
                className="w-full rounded-t-sm shadow-sm min-h-[2px]"
                style={{
                  backgroundColor: item.color,
                  height: `${Math.max((item.value / maxY) * 100, 2)}%`,
                  width: `${barPercentage * 100}%`
                }}
              />
              {/* X-axis line at bottom */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-gray-300" style={{ top: '100%' }} />
            </div>
          ))}
        </div>
      </div>

      {/* X-axis labels (outside the bars container) */}
      <div className="absolute bottom-0 left-10 right-0 flex justify-around text-xs font-medium text-gray-700" style={{ height: xLabelHeight }}>
        {data.map((item) => (
          <div key={item.label} className="flex-1 max-w-[50px] text-center leading-tight">
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}

// M&A Chart Component - Line chart showing M&A volume growth (pure CSS implementation)
function MAChart() {
  const data = [
    { year: "23", value: 18 },
    { year: "24", value: 35 },
    { year: "25", value: 86 },
    { year: "26E", value: 112 },
  ];

  const maxY = 120;

  // Calculate point positions (percentage)
  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * 100;
    const y = ((maxY - d.value) / maxY) * 100;
    return { x, y, value: d.value, year: d.year };
  });

  // Generate smooth bezier curve for SVG path
  const getSmoothPath = (pts: typeof points) => {
    if (pts.length < 2) return "";

    const tension = 0.4;
    let path = `M ${pts[0].x} ${pts[0].y}`;

    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[Math.max(0, i - 1)];
      const p1 = pts[i];
      const p2 = pts[i + 1];
      const p3 = pts[Math.min(pts.length - 1, i + 2)];

      const cp1x = p1.x + (p2.x - p0.x) * tension;
      const cp1y = p1.y + (p2.y - p0.y) * tension;
      const cp2x = p2.x - (p3.x - p1.x) * tension;
      const cp2y = p2.y - (p3.y - p1.y) * tension;

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }

    return path;
  };

  const linePath = getSmoothPath(points);
  const areaPath = `${linePath} L 100 100 L 0 100 Z`;

  const yAxisLabels = ["120", "100", "80", "60", "40", "20", "0"];
  const gridCount = yAxisLabels.length - 1; // 6 intervals

  return (
    <div className="relative flex" style={{ height: '240px' }}>
      {/* Y-axis labels */}
      <div className="flex flex-col" style={{ width: '25px' }}>
        {yAxisLabels.map((tick, i) => (
          <div key={i} className="flex items-end justify-end w-full" style={{ height: `${100 / gridCount}%` }}>
            <span className="text-[10px] text-gray-500 text-right pr-1 shrink-0 leading-none">{tick}</span>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="flex-1 relative">
        {/* Y-axis grid lines */}
        <div className="absolute inset-0 flex flex-col" style={{ paddingTop: 0 }}>
          {yAxisLabels.map((tick, i) => (
            <div key={i} className="w-full border-t border-gray-200 border-dashed" style={{ height: `${100 / gridCount}%` }} />
          ))}
        </div>

        {/* X-axis line */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-300" style={{ top: '100%' }} />

        {/* Area fill */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d={areaPath}
            fill="rgba(0, 0, 0, 0.08)"
            stroke="none"
          />
          {/* Smooth line */}
          <path
            d={linePath}
            fill="none"
            stroke="black"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Data points */}
        {points.map((p) => (
          <div
            key={p.year}
            className="absolute rounded-full border-2 border-white bg-black transform -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: '14px',
              height: '14px'
            }}
          />
        ))}

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 right-0 text-[10px] text-gray-500">
          {data.map((d, i) => {
            const x = (i / (data.length - 1)) * 100;
            return (
              <span
                key={d.year}
                className="absolute transform -translate-x-1/2"
                style={{ left: `${x}%` }}
              >
                {d.year}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
