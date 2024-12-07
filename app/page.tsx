"use client";
import './globals.css'
import {useState} from 'react';
import SearchBar from './components/searchbar';
import Image from "next/image";
import styles from "./page.module.css";

 const handleSearch = () => {

    };



export default function Page() {
  return (

    <div className={styles.page}>
    <header className={styles.header}>
      <h1>Hello, Next.js!</h1>
      <SearchBar onSearch={handleSearch}></SearchBar>
    </header>
    <main className={styles.main}>
        <img src="https://media2.giphy.com/media/xnFN6mWrj7JGTqRj70/giphy.webp?cid=82a1493b0gcbbsrgbl1x5suduewiosj760n6vs9ef0tzk0lf&ep=v1_gifs_trending&rid=giphy.webp&ct=g"></img>
    </main>



    <footer className={styles.footer}>
       <a href="https://google.com"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />

          Google

          </a>
      </footer>


    </div>


  )
}
