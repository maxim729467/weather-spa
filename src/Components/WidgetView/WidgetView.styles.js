import styled from "styled-components";
export const Section = styled.li`
  width: 250px;
  min-height: auto;
  margin-bottom: 20px;
  margin-right: 45px;
  padding: 10px;
  position: relative;

  border-radius: 5px;
  overflow: hidden;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);
  opacity: 0.8;

  transition: all 250ms ease;

  &:nth-child(4n) {
    margin-right: 0;
  }

  &:hover {
    transform: scale(1.04);
    opacity: 1;
  }
`;

export const City = styled.h3`
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  min-height: 30px;
  min-width: 80px;
  margin-right: 10px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: white;
  background-color: darkgrey;

  border-radius: 5px;
  overflow: hidden;
  border: none;
  outline: none;

  transition: all 250ms ease;

  &:focus,
  &:hover {
    background-color: rgb(255, 94, 0);
  }
`;
