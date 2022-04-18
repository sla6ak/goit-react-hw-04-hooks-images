import styled from "@emotion/styled";

export const Header = styled.header`
top: 0;
left: 0;
position: sticky;
z-index: 98;
background-color: rgb(123, 59, 207);
min-height: 70px;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 20px 30px;
`

export const SerchForm = styled.form`  display: flex;
align-items: center;
max-width: 600px;`

export const SerchButton = styled.button`
background-color: transparent;
width: 20px;
height: 20px;
border: none;
opacity: 0.7;
:hover {
    opacity: 1;
  }
`

export const InputWord = styled.input`
height: 30px;
display: flex;
margin-left: 10px;
padding: 2px 10px;
border-radius: 7px;
box-shadow: 1px 1px 10px rgb(220, 187, 228);
color: rgb(123, 59, 207);
font: inherit;`