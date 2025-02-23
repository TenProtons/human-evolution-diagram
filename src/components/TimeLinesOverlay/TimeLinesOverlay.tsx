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
              x={-2100}
              y={line.y - 25}
              fontSize={72}
              fontWeight={700}
              fill="var(--text-color)"
            >
              {t(line.label)} {t("labels.time_ago")}
            </text>
            <foreignObject
              x={-2100}
              y={line.y - 10}
              width={1400}
              height={1000}
            >
              <p style={{
                  fontSize: "64px",
                  color: "var(--text-color)",
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                }}
              >
                {t(line.text)}
              </p>
            </foreignObject>
          </g>
        ))}
      </g>
    </svg>
  );
}
