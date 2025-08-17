import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  data: any[];
  xAxisKey: string;
  yAxisKey: string;
  title?: string;
  color?: string;
  unit?: string;
}

export default function BarChart({ data, xAxisKey, yAxisKey, title, color = "hsl(var(--primary))", unit = "" }: BarChartProps) {
  const formatValue = (value: any) => {
    if (typeof value === 'number') {
      return `${value.toLocaleString('ru-RU')} ${unit}`.trim();
    }
    return value;
  };

  return (
    <div className="chart-container rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey={xAxisKey} 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              color: 'hsl(var(--foreground))'
            }}
            formatter={[formatValue, title || yAxisKey]}
          />
          {title && <Legend />}
          <Bar 
            dataKey={yAxisKey} 
            fill={color}
            name={title}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
