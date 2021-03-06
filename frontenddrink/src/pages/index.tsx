import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { DrinkContext } from '../contexts/DrinkContext'
import UserModel from '../model/User'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  const {lstUsers,loaded} = useContext(DrinkContext)
  
  const getDrinks = (user:UserModel) => {
    const result = user.lstDrinks.filter(drink=>!drink.drinked).length
    return result
  }

  function renderContent(){
    lstUsers.sort(function (a,b){
        if(a.lstDrinks.filter(x=>!x.drinked).length>b.lstDrinks.filter(x=>!x.drinked).length)
        return 1

        if(a.lstDrinks.filter(x=>!x.drinked).length<b.lstDrinks.filter(x=>!x.drinked).length)
        return -1

        return 0
    })
    
    if(lstUsers.length==0)
      return <h1>Não tem usuario</h1>

    return(
      lstUsers.sort(user=>user.lstDrinks.filter(x=>x.drinked==false).length).reverse().map(user=>{
        return (<Card name={user.name} idPerson={user.id} drinks={getDrinks(user)} pathImg={user.path} key={user.id}/>)
      })
    )
  }

  return (
    <div className={styles.container}>
      <Navbar/>
      <div className={styles.content}>
        {loaded?renderContent():<h1>Loading . . .</h1>}
      </div>
    </div>
  )
}

export default Home
