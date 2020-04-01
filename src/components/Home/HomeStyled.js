import styled from 'styled-components'

const HomeStyled = styled.h1`
  @import url("https://fonts.googleapis.com/css?family=Kaushan+Script");
  height: 1.5em;
  line-height: 1.5em;
  font-size: 48px;
  font-size: 10vw;
  font-family: 'Kaushan Script';
  text-align: center;
  text-overflow: ellipsis;
  overflow: visible;
  white-space: nowrap;
  color: ${({ theme: { color } }) => color};
`

export default HomeStyled
