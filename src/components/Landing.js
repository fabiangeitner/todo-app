import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(Link)`
  background: grey;
  text-decoration: none;
  color: #fff;
  padding: 12px 24px;
`;

const Landing = () => {
  return (
    <LandingWrapper>
      <Button to="/test">Erstelle dein erstes Todo</Button>
    </LandingWrapper>
  );
};

export default Landing;
