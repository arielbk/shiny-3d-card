import { Tooltip } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { BsGithub } from 'react-icons/bs';

const Container = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  padding: 1rem 2rem;
  border: 1px solid rgba(200 200 200 / 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 52px;
  text-align: center;
  color: #eee;
  text-shadow: 0 1px 0 #999;
  color: rgba(255 255 255 / 0.7);

  a {
    font-size: 3rem;
  }
`;

const Card: React.FC = () => {
  return (
    <Container>
      <p>3D card effect with react and framer motion</p>
      <Tooltip
        hasArrow
        label="See the code on GitHub"
        my={4}
        placement="bottom"
      >
        <a href="https://github.com/arielbk/shiny-3d-card">
          <BsGithub />
        </a>
      </Tooltip>
    </Container>
  );
};

export default Card;
