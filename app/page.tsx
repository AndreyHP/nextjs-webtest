"use client";
import './globals.css'
import {useState} from 'react';
import SearchBar from './components/searchbar';



 const handleSearch = () => {

    };



export default function Page() {
  return (

    <div className="container">

    <h1>Hello, Next.js!</h1>
    <SearchBar onSearch={handleSearch}></SearchBar>
    <img src="https://media2.giphy.com/media/xnFN6mWrj7JGTqRj70/giphy.webp?cid=82a1493b0gcbbsrgbl1x5suduewiosj760n6vs9ef0tzk0lf&ep=v1_gifs_trending&rid=giphy.webp&ct=g"></img>

    </div>


  )
}
