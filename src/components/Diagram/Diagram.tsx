// Diagram.tsx

import { FC, useCallback, useState } from 'react';
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Connection,
  Controls,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';

import { useTranslation } from 'react-i18next';
import { MyEdgeData, MyNodeData } from '../../models/common';
import Card from '../Card/Card'; // <-- your custom node component

// Then specify your custom nodeTypes:
const nodeTypes = {
  card: Card,
};

const Diagram: FC = () => {
  const { t } = useTranslation();

  // --- INITIAL NODES ---
  // We specify Node<MyNodeData>[] so TypeScript knows how these nodes are shaped.
  const initialNodes: Node<MyNodeData>[] = [
    {
      id: '1',
      type: 'card',
      position: { x: 0, y: 50 },
      data: {
        id: '1',
        label: t('chlca.title'),
        latinName: t('chlca.latin_name'),
        dateOfOrigin: t('chlca.date_of_origin'),
        whoDidItComeFrom: t('chlca.who_did_it_come_from'),
        whoAroseFromHim: t('chlca.who_arose_from_him'),
        didHeComeOutOfAfrica: t('chlca.did_he_come_out_of_Africa'),
        imgUrl: './src/assets/img/chlca.jpg',
      }
    },
    {
      id: '2',
      type: 'card',
      position: { x: -300, y: 650 },
      data: {
        label: t('chlca.title'),
        latinName: t('chlca.latin_name'),
        dateOfOrigin: t('chlca.date_of_origin'),
        whoDidItComeFrom: t('chlca.who_did_it_come_from'),
        whoAroseFromHim: t('chlca.who_arose_from_him'),
        didHeComeOutOfAfrica: t('chlca.did_he_come_out_of_Africa'),
        imgUrl: './src/assets/img/chlca.jpg',
      }
    },
    {
      id: '3',
      type: 'card',
      position: { x: 300, y: 650 },
      data: {
        label: t('chlca.title'),
        latinName: t('chlca.latin_name'),
        dateOfOrigin: t('chlca.date_of_origin'),
        whoDidItComeFrom: t('chlca.who_did_it_come_from'),
        whoAroseFromHim: t('chlca.who_arose_from_him'),
        didHeComeOutOfAfrica: t('chlca.did_he_come_out_of_Africa'),
        imgUrl: './src/assets/img/chlca.jpg',
      }
    },
  ];

  // --- INITIAL EDGES ---
  // Again, use Edge<MyEdgeData>[] if you store extra data on edges.
  const initialEdges: Edge<MyEdgeData>[] = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3' },
  ];

  // State for nodes & edges
  const [nodes, setNodes] = useState<Node<MyNodeData>[]>(initialNodes);
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
          fitViewOptions={{ padding: 0.1 }}
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
