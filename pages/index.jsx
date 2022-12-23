import styled from 'styled-components';

import BgImageWithChildren from '../src/components/layout/bgImageWithChildren/BgImageWithChildren';

const StyledDiv = styled.div`
  background-color: red;
`;

export default function HomePage() {
  return (
    <BgImageWithChildren>
      <StyledDiv>
        HomePage
      </StyledDiv>
    </BgImageWithChildren>
  );
};