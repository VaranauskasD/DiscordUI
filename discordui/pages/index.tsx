import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { SideBar } from '../components'

const Home: NextPage = () => {
  return (
    <div className="flex">
      <SideBar />
    </div>
  )
}

export default Home
