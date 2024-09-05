import { getHomePageData } from "@/data/loader";
import { FeatureSection } from "@/components/custom/FeaturesSection";
import { HeroSection } from "@/components/custom/HeroSection";

function blockRenderer(block: any) {
  switch (block.__component) {
    case "layout.her-o-section":
      return <HeroSection key={block.id} data={block} />;
    case "layout.features-section":
      return <FeatureSection key={block.id} data={block} />;
    default:
      return null;
  }
}
 
export default async function Home() {
  const { blocks } = await getHomePageData();
  if(!blocks) return <div>No Blocks found</div>;

  return (
    <main>
      {blocks.map((block: any) => blockRenderer(block))}
    </main>
  );
}
