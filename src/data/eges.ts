import { MarkerType } from "reactflow";

export const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { strokeWidth: 4 },
    label: '🔥 1.5 млн років тому',
    labelStyle: {
      fill: '#333',    // text color
      fontSize: 14,
      fontWeight: 600,
    },
    labelShowBg: true,       // enable background rectangle
    labelBgStyle: {
      fill: '#ffffff',
      fillOpacity: 0.8,
      stroke: '#999999',
      strokeWidth: 1,
    },
    labelBgPadding: [8, 4] as [number, number],
    labelBgBorderRadius: 4,
  },
  {
    id: 'e1-3',
    source: '1',
    target: '3',
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { strokeWidth: 4 },
    label: '300k years',
  },
];