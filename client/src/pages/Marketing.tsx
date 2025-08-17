import Layout from "@/components/Layout";
import ComboChart from "@/components/charts/ComboChart";
import LineChart from "@/components/charts/LineChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMarketingData } from "@/lib/data";
import { Search, Users, MessageCircle, Mail } from "lucide-react";

export default function Marketing() {
  const marketingData = getMarketingData();

  // Calculate totals for KPIs
  const totalBudget = marketingData.reduce((sum, month) => sum + month.budget, 0);
  const totalClients = Math.max(...marketingData.map(m => m.clients));
  const avgCPL = marketingData.reduce((sum, month) => sum + month.cpl, 0) / marketingData.filter(m => m.cpl > 0).length;
  const avgCAC = marketingData.reduce((sum, month) => sum + month.cac, 0) / marketingData.filter(m => m.cac > 0).length;
  const avgROMI = marketingData.reduce((sum, month) => sum + month.romi, 0) / marketingData.filter(m => m.romi > 0).length;

  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Маркетинг и продажи</h2>
            <p className="text-muted-foreground text-lg">
              {Math.round(totalBudget / 1000)} тыс ₽ в маркетинг → {totalClients} клиентов → 6.3 млн ₽ выручки → ROMI {Math.round(avgROMI * 100)}%
            </p>
          </div>

          {/* Marketing KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">
                  {Math.round(avgCPL).toLocaleString('ru-RU')} ₽
                </div>
                <div className="text-sm text-muted-foreground">Средний CPL</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {Math.round(avgCAC).toLocaleString('ru-RU')} ₽
                </div>
                <div className="text-sm text-muted-foreground">Средний CAC</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-foreground mb-1">{totalClients}</div>
                <div className="text-sm text-muted-foreground">Клиентов за год</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-1">
                  {Math.round(avgROMI * 100)}%
                </div>
                <div className="text-sm text-muted-foreground">ROMI</div>
              </CardContent>
            </Card>
          </div>

          {/* Marketing Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Бюджет и лиды по месяцам</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ComboChart
                    data={marketingData}
                    xAxisKey="month"
                    barKey="budget"
                    lineKey="leads"
                    barTitle="Бюджет"
                    lineTitle="Лиды"
                    barUnit="₽"
                    lineUnit="шт"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>ROMI по месяцам</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <LineChart
                    data={marketingData.filter(m => m.romi > 0)}
                    xAxisKey="month"
                    yAxisKey="romi"
                    title="ROMI"
                    color="hsl(var(--chart-3))"
                    unit="x"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Marketing Channels */}
          <Card className="bg-background border-border">
            <CardHeader>
              <CardTitle>Каналы привлечения</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <Search className="w-5 h-5 text-primary mr-3" />
                      <h4 className="font-medium">Поиск Яндекс/Google</h4>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">Горячий спрос</p>
                    <div className="text-primary font-mono">CPL: 1,200-1,800 ₽</div>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <Users className="w-5 h-5 text-primary mr-3" />
                      <h4 className="font-medium">ВКонтакте Ads</h4>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">Лид-формы</p>
                    <div className="text-primary font-mono">CPL: 1,800-2,500 ₽</div>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <MessageCircle className="w-5 h-5 text-primary mr-3" />
                      <h4 className="font-medium">Telegram</h4>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">Нативная реклама</p>
                    <div className="text-primary font-mono">CPL: 2,000-3,000 ₽</div>
                  </CardContent>
                </Card>
                <Card className="bg-card">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-3">
                      <Mail className="w-5 h-5 text-primary mr-3" />
                      <h4 className="font-medium">Email/мессенджеры</h4>
                    </div>
                    <p className="text-muted-foreground text-sm mb-2">Дожим лидов</p>
                    <div className="text-primary font-mono">Автоматизация</div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
