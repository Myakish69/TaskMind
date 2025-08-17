import Layout from "@/components/Layout";
import RiskMatrix from "@/components/RiskMatrix";
import { getRiskData } from "@/lib/data";

export default function Risks() {
  const riskData = getRiskData();

  return (
    <Layout>
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Риски и митигация</h2>
            <p className="text-muted-foreground text-lg">
              Проактивное управление основными рисками проекта
            </p>
          </div>

          <RiskMatrix data={riskData} />
        </div>
      </section>
    </Layout>
  );
}
