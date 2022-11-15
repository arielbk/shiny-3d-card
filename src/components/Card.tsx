import styled from '@emotion/styled';

const Container = styled.div`
  width: 300px;
  height: 400px;
  border-radius: 20px;
  padding: 1rem 2rem;
  border: 1px solid rgba(200 200 200 / 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #eee;
  text-shadow: 0 1px 0 #999;
`;

const Card: React.FC = () => {
  return <Container>3D card effect with react and framer motion</Container>;
};

export default Card;
