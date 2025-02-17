import { MarkerType } from "reactflow";

const sharedEdgeProps = {
  labelKey: '',
  markerEnd: { type: MarkerType.ArrowClosed, color: 'var(--lines-color)', },
  style: { 
    strokeWidth: 6, 
    stroke: 'var(--lines-color)',
  },
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
    id: 'e114-101',
    source: '114',
    sourceHandle: 'right',
    target: '101',
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
  {
    ...sharedEdgeProps,
    id: 'e102-104',
    source: '102',
    target: '104',
  },
  {
    ...sharedEdgeProps,
    id: 'e114-105',
    source: '114',
    target: '105',
  },
  {
    ...sharedEdgeProps,
    id: 'e105-106',
    source: '105',
    target: '106',
  },
  {
    ...sharedEdgeProps,
    id: 'e106-107',
    source: '106',
    target: '107',
  },
  {
    ...sharedEdgeProps,
    id: 'e107-108',
    source: '107',
    target: '108',
  },
  {
    ...sharedEdgeProps,
    id: 'e108-109',
    source: '108',
    target: '109',
  },
  {
    ...sharedEdgeProps,
    id: 'e108-110',
    source: '108',
    target: '110',
  },
  {
    ...sharedEdgeProps,
    id: 'e110-111',
    source: '110',
    target: '111',
  },
  {
    ...sharedEdgeProps,
    id: 'e110-112',
    source: '110',
    target: '112',
  },
  {
    ...sharedEdgeProps,
    id: 'e110-113',
    source: '110',
    target: '113',
  },
  {
    ...sharedEdgeProps,
    id: 'e100-114',
    source: '100',
    sourceHandle: 'left',
    target: '114',
  },
];