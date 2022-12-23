import styled from 'styled-components';

import BgImageWithChildren from '../src/components/layout/bgImageWithChildren/BgImageWithChildren';

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.white};
  min-width: 500px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
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