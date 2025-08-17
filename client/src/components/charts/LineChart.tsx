import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LineChartProps {
  data: any[];
  xAxisKey: string;
  yAxisKey: string;
  title?: string;
  color?: string;
  unit?: string;
}

export default function LineChart({ data, xAxisKey, yAxisKey, title, color = "hsl(var(--primary))", unit = "" }: LineChartProps) {
  const formatValue = (value: any) => {
    if (typeof value === 'number') {
      return `${value.toLocaleString('ru-RU')} ${unit}`.trim();
    }
    return value;
  };

  return (
    <div className="chart-container rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
          <Line 
            type="monotone" 
            dataKey={yAxisKey} 
            stroke={color}
            strokeWidth={2}
            dot={{ fill: color, strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: color, strokeWidth: 2 }}
            name={title}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
}
