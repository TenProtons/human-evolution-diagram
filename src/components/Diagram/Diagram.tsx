import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ReactFlow, {
  Background,
  Controls,
  Edge,
  Node,
  ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';

import { cardsData } from '../../data/cards';
import { initialEdges } from '../../data/eges';
import { MyEdgeData, MyNodeData } from '../../models/common';
import Card from '../Card/Card';
import './Diagram.scss';

const nodeTypes = {
  card: Card,
};

const Diagram: FC = () => {
  const { t } = useTranslation();
  const edges: Edge<MyEdgeData>[] = useMemo(() => initialEdges, []);
  const nodes: Node<MyNodeData>[] = useMemo(() => {
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
  }, [t]);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlowProvider>
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={edges}
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
