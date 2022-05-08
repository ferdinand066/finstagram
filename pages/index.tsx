import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import HomeHeader from '../components/home/HomeHeader';
import ItemPost from '../components/home/ItemPost';
import ItemStory from '../components/home/ItemStory';
import styles from '../styles/Home.module.scss'

let x : number[] = [];

for (let i = 0; i < 100; i++) {
  x.push(i);
}

const Home: NextPage = () => {

  const [data, setData] = useState([] as number[]);
  
  useEffect(() => {
    setData(x);
  }, [data])

  return (
    <div>
      <HomeHeader />
      <div className={styles.story}>
        {
          data.map((value, index) => {
            return (
              <ItemStory key={ `story${index}` } />
            )
          })
        }
        <ItemStory />
      </div>
      <div className={styles.posts}>
        <div className={styles.container}>
          {
            data.map((value, index) => {
              return (
              <ItemPost key={ `post${index}` }/>
              )
            })
          }
        </div>
      </div>
    </div >
  )
}

export default Home
