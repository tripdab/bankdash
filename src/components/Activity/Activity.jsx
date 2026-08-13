import './Activity.scss';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const CHART_HEIGHT_PX = 186; // Высота от линии 0 до 500 в пикселях
const MAX_CHART_VALUE = 500; // Максимальное значение шкалы Y

const yAxisTicks = [0, 100, 200, 300, 400, 500];
const rawChartData = [
  { day: 'Sat', withdraw: 178, deposit: 91 },
  { day: 'Sun', withdraw: 130, deposit: 49 },
  { day: 'Mon', withdraw: 122, deposit: 98 },
  { day: 'Tue', withdraw: 178, deposit: 138 },
  { day: 'Wed', withdraw: 57, deposit: 91 },
  { day: 'Thu', withdraw: 145, deposit: 91 },
  { day: 'Fri', withdraw: 147, deposit: 126 },
];
const axisTickStyles = {
  fill: 'var(--color-muted)',
  fontFamily: 'var(--font-main-svg-text)',
  fontWeight: '400',
  fontSize: 13,
};

const Activity = () => {
  const chartData = rawChartData.map((item) => ({
    day: item.day,
    withdraw: Math.round(
      (item.withdraw / CHART_HEIGHT_PX) * MAX_CHART_VALUE,
    ),
    deposit: Math.round(
      (item.deposit / CHART_HEIGHT_PX) * MAX_CHART_VALUE,
    ),
  }));
  return (
    <section className='activity'>
      <h2 className='section-title'>Weekly Activity</h2>

      <figure className='activity__card widget-block'>
        <figcaption className='visually-hidden'>
          Диаграмма недельной активности депозитов и выводов средств
        </figcaption>
        {/* Legend */}
        <ul className='activity__legend-list'>
          <li className='activity__legend-item'>
            <span className='activity__dot activity__dot--withdraw'></span>
            Withdraw
          </li>
          <li className='activity__legend-item'>
            <span className='activity__dot activity__dot--deposit'></span>
            Deposit
          </li>
        </ul>
        {/* Chart */}
        <div className='activity__chart'>
          <ResponsiveContainer width='100%' height={226}>
            <BarChart
              className='bar-chart'
              responsive
              data={chartData}
              barGap={12}>
              <CartesianGrid
                vertical={false}
                strokeWidth={1}
                syncWithTicks={true}
              />
              {/* X-value */}
              <XAxis
                dataKey='day'
                tick={axisTickStyles}
                axisLine={false}
                tickLine={false}
                dy={17}
              />
              {/* Y-value */}
              <YAxis
                width={27} // 26
                domain={[0, 500]}
                ticks={yAxisTicks}
                tick={axisTickStyles}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                cursor={{ fill: 'var(--active-bar-hover-bg)' }}
              />
              {/* withdraw bar */}
              <Bar
                barSize={15}
                dataKey='withdraw'
                fill='var(--chart-withdraw-color)'
                activeBar={{
                  fill: 'var(--bg-color)',
                  stroke: 'var(--chart-withdraw-color)',
                }}
                radius={[30, 30, 30, 30]}
              />
              {/* deposit bar */}
              <Bar
                barSize={15}
                dataKey='deposit'
                fill='var(--chart-deposit-color)'
                activeBar={{
                  fill: 'var(--bg-color)',
                  stroke: 'var(--chart-deposit-color)',
                }}
                radius={[30, 30, 30, 30]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </figure>
    </section>
  );
};

export default Activity;
