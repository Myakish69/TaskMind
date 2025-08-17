import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FinancialMonth } from "@shared/schema";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";

interface FinancialTableProps {
  data: FinancialMonth[];
}

export default function FinancialTable({ data }: FinancialTableProps) {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Детализация по месяцам</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="text-muted-foreground">Месяц</TableHead>
                <TableHead className="text-right text-muted-foreground">Доходы</TableHead>
                <TableHead className="text-right text-muted-foreground">Расходы</TableHead>
                <TableHead className="text-right text-muted-foreground">Прибыль</TableHead>
                <TableHead className="text-right text-muted-foreground">Cash Flow</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row) => (
                <TableRow 
                  key={row.month} 
                  className={cn(
                    "table-hover border-border",
                    (row.month === 7 || row.month === 9) && "bg-primary/10"
                  )}
                >
                  <TableCell className="font-medium">{row.month}</TableCell>
                  <TableCell className="text-right font-mono">
                    {formatCurrency(row.revenue)}
                  </TableCell>
                  <TableCell className="text-right font-mono">
                    {formatCurrency(row.expenses)}
                  </TableCell>
                  <TableCell className={cn(
                    "text-right font-mono",
                    row.net_profit > 0 ? "text-primary" : "text-destructive"
                  )}>
                    {formatCurrency(row.net_profit)}
                  </TableCell>
                  <TableCell className={cn(
                    "text-right font-mono",
                    row.cumulative_cash_flow > 0 ? "text-primary" : "text-destructive"
                  )}>
                    {formatCurrency(row.cumulative_cash_flow)}
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
