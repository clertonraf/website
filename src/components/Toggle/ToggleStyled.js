import styled from 'styled-components'
import Toggle from "./Toggle"

const ToggleStyled = styled(Toggle)`
  @import url("https://fonts.googleapis.com/css?family=Kaushan+Script");
  background-color: ${props => (props.isChecked ? "#006400" : "#00000040")};
  margin-top: 10px;
  height: 44px;
  align-self: flex-end;
  margin: 10px;
  &:after {
      top: 3px;
      height: 36px;
      width: 36px;
  };

  .ant-switch-inner {
    margin-right: ${props => (props.isChecked ? "24px" : "0px")};
    margin-left: ${props => (props.isChecked ? "0px" : "24px")};
    width: 72px;
  };
`

export default ToggleStyled
