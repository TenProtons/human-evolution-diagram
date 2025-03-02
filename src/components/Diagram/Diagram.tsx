import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ReactFlow, {
  Background,
  Controls,
  Node,
  ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';

import { cardsData } from '../../data/cards';
import { initialEdges } from '../../data/eges';
import { MyNodeData } from '../../models/common';
import Card from '../Card/Card';
import TimeLinesOverlay from '../TimeLinesOverlay/TimeLinesOverlay';
import './Diagram.scss';

const nodeTypes = {
  card: Card,
};

const Diagram: FC = () => {
  const { t } = useTranslation();
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
        whoDidItComeFrom: t(card.data.whoDidItComeFromKey || ''),
        whoAroseFromHim: t(card.data.whoAroseFromHimKey || ''),
        didHeComeOutOfAfrica: t(card.data.didHeComeOutOfAfricaKey || ''),
      } as MyNodeData,
    }));
  }, [t]);

  return (
    <div className='diagram' style={{ width: '100%', height: '100%' }}>
      <ReactFlowProvider>
        <ReactFlow
          nodeTypes={nodeTypes}
          nodes={nodes}
          edges={initialEdges}
          fitView
          minZoom={0.05}
          nodesDraggable={false}
          nodesConnectable={false}
          style={{
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-color)',
          }}
        >
          <Controls />
          <TimeLinesOverlay />
          <Background />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default Diagram;
