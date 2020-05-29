import React from 'react';
import Popup from 'reactjs-popup';

interface ModalProps {
  open: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, open }) => (
  <Popup
    open={open}
    modal
    position="center center"
    contentStyle={{
      borderRadius: '4px',
      width: 'auto',
      padding: '60px 120px',
      background: '#f2f4f7',
    }}
    overlayStyle={{
      background: 'rgb(0, 0, 0, 0.6)',
    }}
  >
    <>{children}</>
  </Popup>
);

export default Modal;
