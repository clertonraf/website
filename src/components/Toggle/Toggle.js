import React from "react"
import light from '../../images/icons8-baby-yoda.svg'
import dark from '../../images/icons8-darth-vader.svg'
import { Switch } from 'antd'

const Toggle = ({ className, isChecked, onChange }) => {
  return <Switch
    className={className}
    checked={isChecked}
    onChange={onChange}
    defaultChecked
    checkedChildren={(
      <img alt="sith mode" src={light} height="42" width="42" />
    )}
    unCheckedChildren={(
      <img alt="jedi mode" src={dark} height="42" width="42" />
    )}
  />
}

export default Toggle