import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  padding: 0;
  justify-content: center;
  list-style: none;
`;

export const FeedbackItem = styled.li`
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const FeedbackBtn = styled.button`
  font-size: 18px;
  border: none;
  background-color: #8181e7;
  border-radius: 20px;
  height: 40px;
  width: 70px;
  cursor: pointer;
  :hover {
    background-color: white;
    transform: scale(1.2);
    transition: 500ms;
  }
`;
