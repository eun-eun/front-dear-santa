import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const StyledBox = styled.div`
  display: flex;
  align-items: end;
  width: 400px;
  height: 400px;
  background: url('/image/santa-main.png') no-repeat;
  background-size: contain;
`;
export const MessageWrap = styled.div`
  padding: 20px;
  background: rgba(255, 255, 255, 1);
  border-radius: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
