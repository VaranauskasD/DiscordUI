import * as React from 'react'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'
import { SideBarIcon } from '../components'

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col dark:bg-gray-900 shadow-lg dark:text-white">
      <SideBarIcon icon={FaFire} text={'tooltip'} />
      <SideBarIcon icon={BsPlus} text={'tooltip'} />
      <SideBarIcon icon={BsFillLightningFill} text={'tooltip'} />
      <SideBarIcon icon={BsGearFill} text={'tooltip'} />
      <SideBarIcon icon={FaPoo} text={'tooltip'} />
    </div>
  )
}

export default SideBar
