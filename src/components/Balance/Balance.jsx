import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'; //
// =====================
import './Balance.scss';
import { BALANCE_DATA } from '../../data/balance';
const Balance = () => {
  return (
    <section className='balance'>
      <h2 className='section-title'>Balance History</h2>

      <figure className='balance__card widget-block'>
        <figcaption className='visually-hidden'>
          График истории балаанса
        </figcaption>
        {/* Balance History Chart */}
        <AreaChart
          className='balance__area-chart'
          responsive
          data={BALANCE_DATA}>
          <defs>
            <linearGradient
              id='colorUv'
              x1='273.5'
              y1='0'
              x2='273.5'
              y2='177'>
              <stop
                offset='5%'
                stopColor='#2D60FF'
                stopOpacity={0.5}
              />
              <stop
                offset='95%'
                stopColor='#2D60FF'
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid />
          <XAxis
            dataKey='month'
            axisLine={false}
            tick={{ fill: '#64748b', fontSize: 14 }}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: '#64748b', fontSize: 14 }}
          />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='value'
            stroke='#1814f3'
            activeDot={{ stroke: '#1814f3' }}
            fillOpacity={1}
            fill='url(#colorUv)'
            animationBegin={200}
            animationDuration={1300}
          />
        </AreaChart>
      </figure>
    </section>
  );
};

export default Balance;
