import { useViewport } from "reactflow";
import { timelineLines } from "../../data/timelineLines";
import { t } from "i18next";

export default function TimeLinesOverlay() {
  const { x, y, zoom } = useViewport();
  const timelineEntries = Object.entries(timelineLines).sort(
    ([, a], [, b]) => a.y - b.y
  );

  return (
    <svg
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    >
      <g transform={`translate(${x}, ${y}) scale(${zoom})`}>
        {timelineEntries.map(([key, line]) => (
          <g key={key}>
            <line
              x1={-5000}
              x2={5000}
              y1={line.y}
              y2={line.y}
              stroke="var(--lines-color)"
              strokeWidth={4}
              strokeDasharray="20,20"
            />
            <text
              x={-2000}
              y={line.y - -75}
              fontSize={72}
              fill="var(--text-color)"
            >
              {t(line.label)}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
