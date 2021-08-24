import styled from "styled-components";

export const Section = styled.div`
  background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
  opacity: 0.8;
  width: 1000px;
  height: 500px;
  border: 3px solid black;
  border-radius: 5px;
  overflow: hidden;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const LeftBlock = styled.div`
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const City = styled.h3`
  text-align: center;
  font-size: 60px;
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Temperature = styled.p`
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Icon = styled.img`
  border: 2px solid grey;
  border-radius: 5px;
  background-color: #fff;
`;

export const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Info = styled.p`
  margin-bottom: 10px;
  font-size: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;
