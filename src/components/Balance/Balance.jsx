import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
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
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              {' '}
              // 177
              <stop
                offset='0%'
                stopColor='var(--accent-color)'
                stopOpacity={0.25}
              />
              <stop
                offset='100%'
                stopColor='var(--accent-color)'
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray='4 4'
            className='balance__cartesian-grid'
          />
          <XAxis
            dataKey='month'
            axisLine={false}
            tickSize={5}
            tick={{ fill: 'var(--color-muted)', fontSize: 14 }}
          />
          <YAxis
            axisLine={false}
            tickSize={7}
            tick={{
              fill: 'var(--color-muted)',
              fontSize: 14,
            }}
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
            strokeWidth={3}
          />
        </AreaChart>
      </figure>
    </section>
  );
};

export default Balance;
