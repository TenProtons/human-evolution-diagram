import { FC } from 'react';
import { Handle, NodeProps, Position } from 'reactflow';
import { MyNodeData } from '../../models/common';
import './Card.scss';
import { useTranslation } from 'react-i18next';

const Card: FC<NodeProps<MyNodeData>> = ({ data }) => {
    const { t } = useTranslation();
    
  return (
    <div className="card">
      <div className="card__content">
        <h4>{data.label}</h4>
        <p><b>{ t('latin_name') }:</b> {data.latinName}</p>
        <p><b>{ t('date_of_origin') }:</b> {data.dateOfOrigin}</p>
        <p><b>{ t('who_did_it_come_from') }:</b> {data.whoDidItComeFrom}</p>
        <p><b>{ t('who_arose_from_him') }:</b> {data.whoAroseFromHim}</p>
        <p><b>{ t('did_he_come_out_of_Africa') }:</b> {data.didHeComeOutOfAfrica}</p>
      </div>
      {data.imgUrl && <img src={data.imgUrl} alt={data.label} className="card__image" />}
      
      {data.id !== '1' && <Handle type="target" position={Position.Top} />}
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default Card;
