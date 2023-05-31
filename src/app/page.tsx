"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  .container {
    width: 50%;
    height: 100vh;
    border: 1px solid #000;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    .items {
      border: 1px solid red;
      height: 100px;
      margin: 10px;
      border-radius: 10px;
    }
  }
`;
const Home = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="items">Item One</div>
        <div className="items">Item Two</div>
        <div className="items">Item Three</div>
        <div className="items">Item Four</div>
        <div className="items">Item Five</div>
        <div className="items">Item Six</div>
      </div>
    </Wrapper>
  );
};
export default Home;
