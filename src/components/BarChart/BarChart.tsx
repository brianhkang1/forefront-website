import React from 'react';
import {
  ResponsiveContainer,
  BarChart as RechartBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
} from 'recharts';
import useIsMobile from '../../hooks/useIsMobile';

type Props = {
  data: any
  domain?: [number, number];
  isWhite?: boolean;
  isMoney?: boolean;
}

const BarChart: React.FC<Props> = ({
  data, 
  domain, 
  isWhite, 
  isMoney
}) => {
  const isMobile = useIsMobile();

  return (
    <ResponsiveContainer 
      width={'100%'} 
      height={isMobile ? 200 : 400}
    >
      <RechartBarChart data={data}>
        <CartesianGrid 
          vertical={false}
          stroke={isWhite ? 'white' : 'lightgray'}
        />

        <XAxis 
          dataKey="name" 
          tickLine={false} 
          stroke={isWhite ? 'white' : 'gray'}
        />
        
        <YAxis 
          dataKey="value" 
          axisLine={false} 
          tickLine={false}
          width={isMoney ? 80 : 60}
          tickFormatter={(tick: number) => {
            return isMoney 
              ? `$${new Intl.NumberFormat('en').format(tick)}`
              : new Intl.NumberFormat('en').format(tick) 
          }}
          domain={domain || [0, 'auto']}
          interval={0}
          scale='linear'
          stroke={isWhite ? 'white' : 'gray'}
        />
        
        <Bar 
          barSize={50} 
          dataKey="value" 
          fill={isWhite ? '#ffffff' : '#8884d8'}
        />
      </RechartBarChart>

    </ResponsiveContainer>
  )
}

export default BarChart;