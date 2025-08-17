import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductMatrixItem } from "@shared/schema";
import { formatCurrency } from "@/lib/format";

interface ProductMatrixProps {
  data: ProductMatrixItem[];
}

const getTypeColor = (type: string) => {
  switch (type) {
    case 'Аудит':
      return 'bg-blue-900/30 text-blue-300';
    case 'Внедрение':
      return 'bg-primary/30 text-primary-foreground';
    case 'Пакет':
      return 'bg-purple-900/30 text-purple-300';
    case 'Поддержка':
      return 'bg-orange-900/30 text-orange-300';
    default:
      return 'bg-gray-900/30 text-gray-300';
  }
};

export default function ProductMatrix({ data }: ProductMatrixProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Продуктовая матрица</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="text-muted-foreground">Тип услуги</TableHead>
                <TableHead className="text-muted-foreground">Название</TableHead>
                <TableHead className="text-right text-muted-foreground">Цена</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} className="table-hover border-border">
                  <TableCell>
                    <Badge className={getTypeColor(row.type)}>
                      {row.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{row.name}</TableCell>
                  <TableCell className="text-right font-mono">
                    {formatCurrency(row.price)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
