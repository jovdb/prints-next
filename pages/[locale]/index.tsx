import type { GetStaticPaths, GetStaticPathsResult, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import { Header, HeaderLeft, HeaderRight } from '../../components/header'
import { Logo } from '../../components/logo'
import styles from '../../styles/Home.module.css'

import initialState  from "../../public/data/state.json";
import { usePhotosActions } from '../../hooks/photos'
import { usePrintsActions } from '../../hooks/prints'
import { Price } from '../../components/price'
import { Prints } from '../../components/prints'
import { useEditPrintId } from '../../hooks/router'
import { PrintEdit } from '../../components/print-edit'
import { BottomMenu } from '../../components/bottom-menu'
import { QueryClient, QueryClientProvider } from 'react-query'
import labelsEn from "../../public/data/labels.en.json";
import labelsNl from "../../public/data/labels.nl.json";

const queryClient = new QueryClient()

// Generates static files on export
export const getStaticPaths: GetStaticPaths = () => {
  const locales = ["en", "nl"]; // Could not get next.config.json:i18n.locales to work with static generation

  return {
    // Render a page for each language configured in next.config.js:i18nlocales
    paths: locales.map((locale) => ({ params: { locale } })),
    fallback: false, // true not suported for SSG
  }
}

export const getStaticProps: GetStaticProps = (context) => {
  const locale = context?.params?.locale || "en";
  const serverLabels = locale === "nl"
    ? labelsNl
    : labelsEn;
  return {
    props: {
      ...context.params,
      serverLabels,
    },
  };
}

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
    <QueryClientProvider client={queryClient}>
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
        <div className={styles.app__content}>
          {!editPrintId && <Prints />}
          {editPrintId && <PrintEdit />}
        </div>
        <div className={styles.app__footer}>
          <BottomMenu />
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default Home
