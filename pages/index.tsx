import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { Header, HeaderLeft, HeaderRight } from '../components/header'
import { Logo } from '../components/logo'
import styles from '../styles/Home.module.css'

import initialState  from "../public/data/state.json";
import { usePhotosActions } from '../hooks/photos'
import { usePrintsActions } from '../hooks/prints'
import { Price } from '../components/price'
import { Prints } from '../components/prints'
import { useEditPrintId } from '../hooks/router'
import { PrintEdit } from '../components/print-edit'

const Home: NextPage = () => {
  const { reset: resetPhotos} = usePhotosActions();
  const { reset: resetPrints} = usePrintsActions();

  const [editPrintId] = useEditPrintId();

  // Initialize
  // TODO: Fill from server
  useEffect(() => {
    resetPhotos(initialState.photos);
    resetPrints(initialState.prints);
  }, [resetPhotos, resetPrints]);

  return (
    <>
      <Head>
        <title>Prints Editor: NextJs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, minimum-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.app}>
        <Header>
          <HeaderLeft><Logo/></HeaderLeft>
          <HeaderRight><Price /></HeaderRight>
        </Header>
        {!editPrintId && <Prints />}
        {editPrintId && <PrintEdit />}
      </div>
    </>
  )
}

export default Home
