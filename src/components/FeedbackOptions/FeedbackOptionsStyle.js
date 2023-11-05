import styled from 'styled-components';

export const FeedbackBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
export const FeedbackButton = styled.button`
  background-color: darc-black;
  font-weight: 700;
  color: red;
  padding: 20px 20px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 128px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  text-transform: uppercase;
  &:hover {
    background-color: gray;
    color: black;
    cursor: pointer;
    border-radius: 50px;
  }
`;
