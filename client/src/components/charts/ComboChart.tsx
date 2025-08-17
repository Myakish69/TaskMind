import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ComboChartProps {
  data: any[];
  xAxisKey: string;
  barKey: string;
  lineKey: string;
  barTitle?: string;
  lineTitle?: string;
  barColor?: string;
  lineColor?: string;
  barUnit?: string;
  lineUnit?: string;
}

export default function ComboChart({
  data,
  xAxisKey,
  barKey,
  lineKey,
  barTitle,
  lineTitle,
  barColor = "hsl(var(--primary))",
  lineColor = "hsl(var(--chart-2))",
  barUnit = "",
  lineUnit = ""
}: ComboChartProps) {
  const formatValue = (value: any, unit: string) => {
    if (typeof value === 'number') {
      return `${value.toLocaleString('ru-RU')} ${unit}`.trim();
    }
    return value;
  };

  return (
    <div className="chart-container rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
            formatter={(value: any, name: string) => {
              const unit = name === barTitle ? barUnit : lineUnit;
              return [formatValue(value, unit), name];
            }}
          />
          <Legend />
          <Bar 
            dataKey={barKey} 
            fill={barColor}
            name={barTitle}
          />
          <Line 
            type="monotone" 
            dataKey={lineKey} 
            stroke={lineColor}
            strokeWidth={2}
            dot={{ fill: lineColor, strokeWidth: 2, r: 4 }}
            name={lineTitle}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
