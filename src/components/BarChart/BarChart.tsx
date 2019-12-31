import React from 'react';
import {
  BarChart as RechartBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
} from 'recharts';

type Props = {
  data: any
  domain?: [number, number];
  isWhite?: boolean;
  isMoney?: boolean;
}

class BarChart extends React.Component<Props> {
  render(){
    const { data, domain, isWhite, isMoney } = this.props;

    return (
      <RechartBarChart 
        width={800} 
        height={400} 
        data={data}
      >

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
    )
  }
}

export default BarChart;