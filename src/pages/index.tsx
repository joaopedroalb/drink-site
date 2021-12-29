import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { DrinkContext } from '../contexts/DrinkContext'
import UserModel from '../model/User'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  const {lstUsers} = useContext(DrinkContext)
  console.log(lstUsers)

  const getDrinks = (user:UserModel) => {
    const result = user.lstDrinks.filter(drink=>!drink.drinked).length
    return result
  }

  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.content}>
        {lstUsers.map(user=>{
          return (<Card name={user.name} idPerson={user.id} drinks={getDrinks(user)} pathImg={user.path} key={user.id}/>)
          
        })}
      </div>
    </div>
  )
}

export default Home
