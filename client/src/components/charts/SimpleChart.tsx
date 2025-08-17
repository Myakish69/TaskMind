import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

interface ChartProps {
  data: any[];
  type: 'line' | 'bar' | 'pie';
  xKey?: string;
  yKey?: string;
  title?: string;
  height?: number;
}

const COLORS = ['#22c55e', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

const formatValue = (value: number, prefix = '', suffix = '') => {
  if (value >= 1000000) {
    return `${prefix}${(value / 1000000).toFixed(1)}М${suffix}`;
  }
  if (value >= 1000) {
    return `${prefix}${(value / 1000).toFixed(0)}К${suffix}`;
  }
  return `${prefix}${value.toLocaleString('ru-RU')}${suffix}`;
};

export default function SimpleChart({ data, type, xKey = 'month', yKey = 'value', title, height = 300 }: ChartProps) {
  const chartProps = {
    width: '100%',
    height,
    data,
    margin: { top: 20, right: 30, left: 20, bottom: 20 }
  };

  const tooltipStyle = {
    backgroundColor: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  };

  if (type === 'line') {
    return (
      <div className="w-full">
        {title && <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>}
        <ResponsiveContainer {...chartProps}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey={xKey} stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} tickFormatter={(value) => formatValue(value)} />
            <Tooltip 
              contentStyle={tooltipStyle}
              formatter={(value: number) => [formatValue(value, '', ' ₽'), yKey]}
              labelFormatter={(label) => `${xKey}: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey={yKey} 
              stroke="#22c55e" 
              strokeWidth={3}
              dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (type === 'bar') {
    return (
      <div className="w-full">
        {title && <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>}
        <ResponsiveContainer {...chartProps}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
            <XAxis dataKey={xKey} stroke="#6b7280" fontSize={12} />
            <YAxis stroke="#6b7280" fontSize={12} tickFormatter={(value) => formatValue(value)} />
            <Tooltip 
              contentStyle={tooltipStyle}
              formatter={(value: number) => [formatValue(value, '', ' ₽'), yKey]}
            />
            <Bar dataKey={yKey} fill="#22c55e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (type === 'pie') {
    return (
      <div className="w-full">
        {title && <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>}
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={tooltipStyle}
              formatter={(value: number) => [formatValue(value, '', ' ₽'), 'Сумма']}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return null;
}