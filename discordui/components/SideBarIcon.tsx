import * as React from 'react'
import { IconType } from 'react-icons'
import { BsFillLightbulbFill } from 'react-icons/bs'

interface SideBarIconProps {
  icon: IconType
  text: string
}

const SideBarIcon = (props: SideBarIconProps) => {
  return (
    <div className="sidebar-icon group">
      <props.icon />
      <span className="sidebar-tooltip group-hover:scale-100">
        {props.text}
        <BsFillLightbulbFill />
      </span>
    </div>
  )
}

export default SideBarIcon
