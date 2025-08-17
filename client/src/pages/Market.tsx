import Layout from "@/components/Layout";
import LineChart from "@/components/charts/LineChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMarketGrowth, getMSPAdoption } from "@/lib/data";
import { Zap, ShieldCheck, TrendingUp } from "lucide-react";

export default function Market() {
  const marketGrowthData = getMarketGrowth();
  const mspAdoptionData = getMSPAdoption();

  return (
    <Layout>
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Рынок AI для МСБ в России</h2>
            <p className="text-muted-foreground text-lg">
              Динамично растущий рынок с высоким потенциалом проникновения
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Market Size Chart */}
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle>Размер рынка AI (млрд ₽)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <LineChart
                    data={marketGrowthData}
                    xAxisKey="year"
                    yAxisKey="value"
                    title="Рынок AI"
                    unit="млрд ₽"
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-4">
                  <span>2021: 85 млрд</span>
                  <span>2030: 1,200 млрд</span>
                </div>
              </CardContent>
            </Card>

            {/* MSP Penetration Chart */}
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle>Проникновение в МСБ (%)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <LineChart
                    data={mspAdoptionData}
                    xAxisKey="year"
                    yAxisKey="percentage"
                    title="Проникновение МСБ"
                    color="hsl(var(--chart-2))"
                    unit="%"
                  />
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-4">
                  <span>2021: 10%</span>
                  <span>2030: 75%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Market Drivers */}
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle>Драйверы роста</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Автоматизация процессов</h4>
                    <p className="text-muted-foreground text-sm">Снижение операционных расходов на 15-20%</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <ShieldCheck className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Импортозамещение</h4>
                    <p className="text-muted-foreground text-sm">Переход на отечественные AI-платформы</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium mb-2">Господдержка</h4>
                    <p className="text-muted-foreground text-sm">Гранты и льготы на внедрение ИИ</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
