import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({ theme }) => theme.COLORS.BLUE_LIGHT};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: 0px;
  padding: 0 1rem;
  margin-top: 1rem;
  border-radius: 10px;
  font-weight: 500;

  &:disabled{
    opacity: 0.5;
  }
`