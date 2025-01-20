import { FC } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import './Card.css';

interface MyNodeData {
  label: string;
  description?: string;
  imgUrl?: string;
}

const Card: FC<NodeProps<MyNodeData>> = ({ data }) => {
  return (
    <div className="card">
      {data.imgUrl && <img src={data.imgUrl} alt={data.label} className="card-image" />}
      <div className="card-content">
        <h4>{data.label}</h4>
        <p>{data.description}</p>
      </div>

      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
};

export default Card;
