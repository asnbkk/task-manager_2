import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 1rem;
`;
