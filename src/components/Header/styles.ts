import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1e1e1e;
  padding: 1rem;

  nav {
    display: flex;
    gap: 0.5rem;
    background: #e1e1e1;

    span {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      padding: 0.5rem;
      border-radius: 6px;
    }

    a {
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['yellow-dark']};
      background-color: ${(props) => props.theme['yellow-light']};
      border-radius: 6px;

      &:hover {
        background-color: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.background};
        border-radius: 50%;
      }

      &.active {
        border: solid 1px ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`
