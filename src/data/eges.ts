import { MarkerType } from "reactflow";

const sharedEdgeProps = {
  labelKey: '',
  markerEnd: { type: MarkerType.ArrowClosed },
  style: { strokeWidth: 6 },
  labelStyle: {
    fill: '#333',
    fontSize: 14,
    fontWeight: 600,
  },
  labelShowBg: true,
  labelBgStyle: {
    fill: '#ffffff',
    fillOpacity: 0.8,
    stroke: '#999999',
    strokeWidth: 1,
  },
  labelBgPadding: [8, 4] as [number, number],
  labelBgBorderRadius: 4,
};

export const initialEdges = [
  {
    ...sharedEdgeProps,
    id: 'e100-101',
    source: '100',
    target: '101',
    labelKey: 'labels.fireDiscovery',
  },
  {
    ...sharedEdgeProps,
    id: 'e100-102',
    source: '100',
    target: '102',
  },
  {
    ...sharedEdgeProps,
    id: 'e102-103',
    source: '102',
    target: '103',
  },
];