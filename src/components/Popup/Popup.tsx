import React from 'react';
import { Icon, Popup as PopupSemantic } from 'semantic-ui-react';

type Props = {
  content: string;
};

const Popup: React.FC<Props> = ({ content }) => {
  return (
    <PopupSemantic
      position='top center'
      trigger={
        <span style={{ color: 'var(--main-color)', paddingLeft: '0.25rem' }}>
          <sup>
            <Icon name='comment alternate outline' />
          </sup>
        </span>
      }
      content={content}
    />
  );
};

export default Popup;
