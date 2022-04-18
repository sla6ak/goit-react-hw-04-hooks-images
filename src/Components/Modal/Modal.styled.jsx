import styled from "@emotion/styled";

export const OverlayModal = styled.div`  position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: rgba(0, 0, 0, 0.8);
z-index: 99;`
export const ModalBox = styled.div`  position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
max-width: 800px;
width: 100%;
background-color: rgba(255, 255, 255, 0.1);
border-radius: 10px;
overflow: hidden;`
export const BigMpeg = styled.img`  width: 100%;
height: 100%;`