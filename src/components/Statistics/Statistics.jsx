import './Statistics.scss';
import {
  Pie,
  PieChart,
  Sector,
  useActiveTooltipDataPoints,
  useIsTooltipActive,
} from 'recharts';

const data = [
  // К радиусу каждого сектора добавлен strokeWidth={9}
  {
    name: 'Entertainment',
    value: 25,
    color: 'var(--chart-entertainment)',
    r: 131 + 9,
  },
  {
    name: 'Bill Expense',
    value: 12.5,
    color: 'var(--chart-bill)',
    r: 145 + 9,
  },
  {
    name: 'Others',
    value: 25,
    color: 'var(--chart-others)',
    r: 120 + 9,
  },
  {
    name: 'Investment',
    value: 37.5,
    color: 'var(--chart-investment)',
    r: 111 + 9,
  },
];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  payload,
  index,
}) => {
  if (
    cx == null ||
    cy == null ||
    innerRadius == null ||
    outerRadius == null ||
    index == null
  ) {
    return null;
  }
  const currentSectorRadius = data[index % data.length].r;
  let k = 0.55; // k — коэф. удаления текста от центра (0 — в центре, 1 — на краю)
  // Дополнительные смещения по осям для центровки текста в секторах
  let offsetX = 0;
  let offsetY = 0;

  // Индивидуальные корректировки для каждого сектора
  switch (payload.name) {
    case 'Entertainment':
      k = 0.52;
      offsetY = -16;
      offsetX = 0;
      break;
    case 'Bill Expense':
      k = 0.58;
      offsetX = 5;
      offsetY = 2;
      break;
    case 'Others':
      k = 0.53;
      offsetX = 4;
      offsetY = -4;
      break;
    case 'Investment':
      k = 0.55;
      offsetX = 0;
      offsetY = -10;
      break;
    default:
      break;
  }

  const radius =
    innerRadius + (currentSectorRadius - innerRadius) * k;
  const ncx = Number(cx);
  const x =
    ncx + radius * Math.cos(-(midAngle ?? 0) * RADIAN) + offsetX;
  const ncy = Number(cy);
  const y =
    ncy + radius * Math.sin(-(midAngle ?? 0) * RADIAN) + offsetY;

  return (
    <text
      x={x}
      y={y}
      fill='var( --pie-chart-text-color)'
      textAnchor={'middle'}
      dominantBaseline='central'
      style={{
        fontSize: '16px',
        fontFamily: 'var(--font-main-svg-text)',
      }}>
      <tspan x={x} dy='-6'>
        {payload.value}%
      </tspan>
      <tspan
        x={x}
        dy='16'
        style={{ fontSize: '13px', fontWeight: '500' }}>
        {payload.name}
      </tspan>
    </text>
  );
};
const MyCustomPie = (props) => {
  const { index } = props;
  const customRadius = data[index % data.length].r;
  const activePoints = useActiveTooltipDataPoints();
  const isAnyPieActive = useIsTooltipActive();
  const isThisPieActive =
    isAnyPieActive && props.payload === activePoints?.[0];
  const currentOpacity = isAnyPieActive && !isThisPieActive ? 0.6 : 1;

  return (
    <Sector
      {...props}
      outerRadius={customRadius}
      fill={data[index % data.length].color}
      stroke='var(--pie-chart-stroke-color)'
      strokeWidth={9}
      fillOpacity={currentOpacity}
      style={{ transition: 'fill-opacity 0.3s ease' }}
    />
  );
};

const Statistics = () => {
  return (
    <section className='statistics'>
      <h2 className='section-title'>Expense Statistics</h2>
      <figure className='statistics__card widget-block'>
        <figcaption className='visually-hidden'>
          Круговая диаграмма cтатистики расходов
        </figcaption>
        <PieChart className='pie-chart' width={270} height={261}>
          <Pie
            className='pie'
            data={data}
            dataKey='value'
            cx='43.5%'
            cy='52%'
            outerRadius={120}
            startAngle={135}
            endAngle={-225}
            label={renderCustomizedLabel}
            labelLine={false}
            isAnimationActive={true}
            shape={MyCustomPie}
          />
        </PieChart>
      </figure>
    </section>
  );
};

export default Statistics;
