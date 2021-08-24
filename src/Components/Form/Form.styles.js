import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 0 20px;
  margin-right: 10px;

  border-radius: 5px;

  overflow: hidden;
  border: 2ps solid grey;
  outline: none;

  transition: all 250ms ease;

  &:hover,
  &:focus {
    border-color: orange;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 34px;
  padding: 0 20px;
  cursor: pointer;

  font-size: 15px;
  font-weight: 700;

  border-radius: 5px;
  overflow: hidden;
  border: 2ps solid grey;
  outline: none;

  transition: all 250ms ease;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    border-color: orange;
  }
`;
