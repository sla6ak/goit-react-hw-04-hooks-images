import { OverlayModal, ModalBox, BigMpeg } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import propTypes from 'prop-types';

export const Modal =({onModalClouse,imgFull})=> {
  const keyDownClouse = e => {
    if (e.code === 'Escape') {
      this.props.onModalClouse();
    }
  };

  useEffect(()=>{
    window.addEventListener('keydown', keyDownClouse);
  },[])

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', keyDownClouse);
  // }

  return createPortal(
    <OverlayModal onClick={onModalClouse}>
      <ModalBox>
        <BigMpeg  src={imgFull} alt="" />
      </ModalBox>
    </OverlayModal>,
    document.querySelector('#modal')
  );
}

Modal.propTypes = { onModalClouse: propTypes.func, imgFull: propTypes.string };
