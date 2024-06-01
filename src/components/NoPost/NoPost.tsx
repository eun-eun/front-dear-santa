import * as React from 'react';
import SendIcon from '@mui/icons-material/Send';
import ButtonDefault from 'src/components/common/button/ButtonDefault';
import * as Styled from './style';

export const NoPost = () => {
  return (
    <Styled.Wrapper>
      <Styled.StyledBox>
        <Styled.MessageWrap>
          <ButtonDefault variant='contained'>
            받고싶은 선물을 말해봐!
          </ButtonDefault>
        </Styled.MessageWrap>
      </Styled.StyledBox>
    </Styled.Wrapper>
  );
};
