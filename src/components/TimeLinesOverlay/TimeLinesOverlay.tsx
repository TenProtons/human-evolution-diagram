import { t } from 'i18next';
import { useViewport } from 'reactflow';

const lines = [
  { y: 0, label: '8 million years' },
  { y: 200, label: '7 million years' },
  { y: 300, label: '4 million years' },
  { y: 1000, label: t('labels.fireDiscovery') },
];

export default function TimeLinesOverlay() {
  const { x, y, zoom } = useViewport();

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <g transform={`translate(${x}, ${y}) scale(${zoom})`}>
        {lines.map((line, i) => (
          <g key={i}>
            <line
              x1={-5000}
              x2={5000}
              y1={line.y}
              y2={line.y}
              stroke="var(--lines-color)"
              strokeWidth={4}
              strokeDasharray="20,20"
            />
            <text x={-1300} y={line.y - 15} fontSize={48} fill="var(--text-color)">
              {line.label}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
