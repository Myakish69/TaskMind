import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BrainCircuit, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Рынок", href: "/market" },
  { name: "Проект", href: "/project" },
  { name: "Финансы", href: "/financials" },
  { name: "Маркетинг", href: "/marketing" },
  { name: "Риски", href: "/risks" },
  { name: "Инвестиции", href: "/investment" },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BrainCircuit className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">AI МСБ Консалтинг</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground",
                    location === item.href
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <Button className="bg-primary hover:bg-primary/90">
                Связаться
              </Button>
            </div>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block py-2 text-sm font-medium transition-colors",
                    location === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="mt-4 w-full bg-primary hover:bg-primary/90">
                Связаться
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-semibold">AI МСБ Консалтинг</span>
              </div>
              <p className="text-muted-foreground">
                Внедрение AI решений для малого и среднего бизнеса в России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>hello@aimsb.ru</p>
                <p>+7 (495) 123-45-67</p>
                <p>@aimsb_invest</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                <Link href="/market" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Анализ рынка
                </Link>
                <Link href="/financials" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Финансовая модель
                </Link>
                <Link href="/investment" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Инвестиции
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-muted-foreground">© 2024 AI МСБ Консалтинг. Все права защищены.</p>
              <p className="text-muted-foreground text-sm mt-2 md:mt-0">
                Для инвесторов и аккредитованных участников
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
