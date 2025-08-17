import Layout from "@/components/Layout";
import ProductMatrix from "@/components/ProductMatrix";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProductMatrix } from "@/lib/data";
import { Code, Shield, Settings } from "lucide-react";

export default function Project() {
  const productMatrix = getProductMatrix();

  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Проект и услуги</h2>
            <p className="text-muted-foreground text-lg">
              Консалтинг и внедрение кастомных AI-решений для МСБ на базе n8n
            </p>
          </div>

          {/* Product Matrix */}
          <div className="mb-12">
            <ProductMatrix data={productMatrix} />
          </div>

          {/* Technology Advantages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-lg font-semibold">n8n платформа</h3>
                </div>
                <p className="text-muted-foreground">
                  Мощная open-source платформа для создания кастомных автоматизаций с возможностью self-hosting
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-lg font-semibold">Безопасность данных</h3>
                </div>
                <p className="text-muted-foreground">
                  Возможность размещения на собственных серверах клиента для максимального контроля данных
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Settings className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-lg font-semibold">Гибкость решений</h3>
                </div>
                <p className="text-muted-foreground">
                  Возможность написания кастомных нод и интеграций под специфические задачи бизнеса
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
