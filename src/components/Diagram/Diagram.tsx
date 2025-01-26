import { FC, useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Connection,
  Controls,
  Edge,
  EdgeChange,
  MarkerType,
  Node,
  NodeChange,
  ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';

import { useTranslation } from 'react-i18next';
import { cardsData } from '../../data/cards';
import { MyEdgeData, MyNodeData } from '../../models/common';
import Card from '../Card/Card';
import { TFunction } from 'i18next';

const nodeTypes = {
  card: Card,
};

const Diagram: FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    setNodes(buildNodes(t));
  }, [t]);

  function buildNodes(t: TFunction): Node<MyNodeData>[] {
    return cardsData.map((card, index) => ({
      ...card,
      type: 'card',
      data: {
        ...card.data,
        index,
        label: t(card.data.labelKey),
        latinName: t(card.data.latinNameKey),
        dateOfOrigin: t(card.data.dateOfOriginKey),
        whoDidItComeFrom: t(card.data.whoDidItComeFromKey),
        whoAroseFromHim: t(card.data.whoAroseFromHimKey),
        didHeComeOutOfAfrica: t(card.data.didHeComeOutOfAfricaKey),
      },
    }));
  }
  
  // --- INITIAL EDGES ---
  // Again, use Edge<MyEdgeData>[] if you store extra data on edges.
  const initialEdges: Edge<MyEdgeData>[] = [
    { 
      id: 'e1-2', 
      source: '1', 
      target: '2',
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
      style: { strokeWidth: 4 },
    },
    { 
      id: 'e1-3', 
      source: '1', 
      target: '3',
      markerEnd: {
        type: MarkerType.ArrowClosed,
      },
      style: { strokeWidth: 4 },
    },
  ];

  // State for nodes & edges
  const [nodes, setNodes] = useState(() => buildNodes(t));
  const [edges, setEdges] = useState<Edge<MyEdgeData>[]>(initialEdges);

  // React Flow wants typed callbacks for changes and connections:

  const onNodesChange = useCallback((changes: NodeChange[]) => {
    setNodes((prevNodes) => applyNodeChanges(changes, prevNodes));
  }, []);

  const onEdgesChange = useCallback((changes: EdgeChange[]) => {
    setEdges((prevEdges) => applyEdgeChanges(changes, prevEdges));
  }, []);

  const onConnect = useCallback((connection: Connection) => {
    setEdges((prevEdges) => addEdge(connection, prevEdges));
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlowProvider>
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          nodesDraggable={false}
          nodesConnectable={false}
          style={{
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-color)',
          }}
        >
          <Controls />
          <Background />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default Diagram;
