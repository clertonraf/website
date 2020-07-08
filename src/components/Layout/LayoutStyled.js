import styled from 'styled-components'

const LayoutStyled = styled.div`
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  height: ${window.innerHeight}px;
`

export default LayoutStyled