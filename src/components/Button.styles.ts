import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: 0;
  border-radius: 4px;
  margin: 8px;
`
