import React from "react";
import styled from "styled-components";
import PreLoader from "./PreLoader";
import illustration from "../../../assets/illustration1.png";

const LandingPageContent = () => {
  return (
    <Container>
      {/* <PreLoader /> */}
      <Navbar>
        <NavLinks>
          <NavLink href="#">Gmail</NavLink>
          <NavLink href="#">Contact</NavLink>
          <NavLink href="#">LinkedIn</NavLink>
          <NavLink href="#">WhatsApp</NavLink>
        </NavLinks>
      </Navbar>
      <MainContent>
        <LeftSection>
          <Greeting>Hello! I am</Greeting>
          <Name>Aditya Vardhan</Name>
          <Role>Graphic Designer</Role>
          <Description>
            <p>
              Each design in my portfolio reflects a combination of creativity, strategy, and attention to detail. I focus on delivering visually striking designs that effectively communicate the intended message while maintaining a strong aesthetic appeal.
            </p>
            <p>
              From concept to execution, every project demonstrates my ability to balance design principles with innovative thinking, resulting in work that is both functional and visually engaging.
            </p>
          </Description>
          <ActionButtons>
            <Button href="https://drive.google.com/file/d/1aPeHVyaXaAML1fnZLJDfeeIeqm9cfGv_/preview" target="_blank">Resume</Button>
            <Button href="https://drive.google.com/file/d/1QzasVGAUr5wfPv_6Gv9mmHGcan3sKFL0/preview" target="_blank">Portfolio</Button>
          </ActionButtons>
        </LeftSection>
        <RightSection>
          <Illustration src={illustration} alt="Workspace Illustration" />
        </RightSection>
      </MainContent>
    </Container>
  );
};

export default LandingPageContent;

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #071a5c 0%, #153c9b 50%, #207be5 100%);
  font-family: 'Inter', sans-serif !important;
  * {
    font-family: 'Inter', sans-serif !important;
    color: white;
  }
  color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const Navbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 2rem 4rem;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    justify-content: center;
    padding: 1rem 0.25rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap:0.5rem
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.4rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 25px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: white;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.75rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
  margin: 0 auto;
  width: 100%;
  padding: 0 4rem;
  box-sizing: border-box;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0.5rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 650px;

  
`;

const Greeting = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
  letter-spacing: 0.5px;
  text-align: left;
  
  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -1px;
  text-align: left;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

const Role = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  margin: 0 0 2.5rem 0;
  text-align: right;
  padding-right: 2rem;

  @media (max-width: 1024px) {
    text-align: center;
    padding-right: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.div`
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 3.5rem;
  color: rgba(255, 255, 255, 0.95);
  text-align: justify;

  @media (max-width: 1024px) {
    text-align: center;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
`;

const Button = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.6rem 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  transition: all 0.3s ease;
  background: transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: white;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1024px) {
    justify-content: center;
    margin-top: 3rem;
  }
`;

const Illustration = styled.img`
  max-width: 90%;
  height: auto;
  object-fit: contain;
  margin-right: -2rem;

  @media (max-width: 1024px) {
    max-width: 80%;
    margin-right: 0;
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;
