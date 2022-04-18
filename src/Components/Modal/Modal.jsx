import { OverlayModal, ModalBox, BigMpeg } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import propTypes from 'prop-types';

export const Modal =({onModalClouse, imgFull})=> {
  
  const mouseDownClouse = e => {
    if (e.target === e.currentTarget) {
      onModalClouse();
    }
  };

  useEffect(()=>{
    const keyDownClouse = e => {
      if (e.code === 'Escape') {
        onModalClouse();
      }
    };

    window.addEventListener('keydown', keyDownClouse);
    return () => {
      window.removeEventListener('keydown', keyDownClouse);
    };
  },[onModalClouse])

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', keyDownClouse);
  // }

  return createPortal(
    <OverlayModal onClick={mouseDownClouse}>
      <ModalBox>
        <BigMpeg  src={imgFull} alt="" />
      </ModalBox>
    </OverlayModal>,
    document.querySelector('#modal')
  );
}

Modal.propTypes = { onModalClouse: propTypes.func, imgFull: propTypes.string };
