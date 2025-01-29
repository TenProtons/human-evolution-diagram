import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Handle, HandleType, NodeProps } from 'reactflow';
import { MyNodeData } from '../../models/common';
import './Card.scss';

const Card: FC<NodeProps<MyNodeData>> = ({ data }) => {
    const { t } = useTranslation();
    const image = data.imgUrl ? 
      <img src={data.imgUrl} alt={data.label} className="card__image" /> : 
      <span className="card__symbol-question-mark">?</span>;

  return (
    <div className="card">
      <div className="card__content">
        <h4>{data.label}</h4>
        <p><b>{ t('latin_name') }:</b> {data.latinName}</p>
        <p><b>{ t('date_of_origin') }:</b> {data.dateOfOrigin}</p>
        {data.whoDidItComeFrom && <p><b>{ t('who_did_it_come_from') }:</b> {data.whoDidItComeFrom}</p>}
        {data.whoAroseFromHim && <p><b>{ t('who_arose_from_him') }:</b> {data.whoAroseFromHim}</p>}
        {data.didHeComeOutOfAfrica && <p><b>{ t('did_he_come_out_of_Africa') }:</b> {data.didHeComeOutOfAfrica}</p>}
        {image}
        {data.imgSource && <p><b>{ t('img_source') }:</b> {data.imgSource}</p>}
        {data.imgAuthor && <p><b>{ t('img_author') }:</b> {data.imgAuthor}</p>}
      </div>
      
      {data.handleOptions?.top && <Handle type={data.handleOptions?.top.type as HandleType} position={data.handleOptions?.top.position} />}
      {data.handleOptions?.bottom && <Handle type={data.handleOptions?.bottom.type as HandleType} position={data.handleOptions?.bottom.position} />}
      {data.handleOptions?.right && <Handle type={data.handleOptions?.right.type as HandleType} position={data.handleOptions?.right.position} />}
      {data.handleOptions?.left && <Handle type={data.handleOptions?.left.type as HandleType} position={data.handleOptions?.left.position} />}
    </div>
  );
};

export default Card;
