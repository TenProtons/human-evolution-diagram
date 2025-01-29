import { MarkerType } from "reactflow";

const labelOptions = {
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
}

export const initialEdges = [
  {
    id: 'e100-101',
    source: '100',
    target: '101',
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { strokeWidth: 6 },
    labelKey: 'labels.fireDiscovery',
    labelStyle: labelOptions.labelStyle,
    labelShowBg: labelOptions.labelShowBg,
    labelBgStyle: labelOptions.labelBgStyle,
    labelBgPadding: labelOptions.labelBgPadding,
    labelBgBorderRadius: labelOptions.labelBgBorderRadius,
  },
  {
    id: 'e100-102',
    source: '100',
    target: '102',
    markerEnd: { type: MarkerType.ArrowClosed },
    style: { strokeWidth: 6 },
    labelKey: null,
    labelStyle: labelOptions.labelStyle,
    labelShowBg: labelOptions.labelShowBg,
    labelBgStyle: labelOptions.labelBgStyle,
    labelBgPadding: labelOptions.labelBgPadding,
    labelBgBorderRadius: labelOptions.labelBgBorderRadius,
  },
];