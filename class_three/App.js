/**
 * HMR - hot module reloading
 * File Watcher algorithm
 * Bundling
 * Minifying
 * Cleaning our code
 * Dev and production build
 * Super fast build algorithm
 * Image optimization
 * Caching while development
 * Compression
 * compartible with older version of browser
 * HTTPS on dev
 * port number
 * consistent hashing algorithm
 * Zero Config
 * Tree Shaking - Remove un-wanted code
 * 
 * Transitive dependency
 * 
 */
import React from 'react';
import ReactDOM from 'react-dom/client';

const h1 = React.createElement("h1",{className:"title", id:"name",style:{color:"red"}},"Hello Rahul");
const h2 = React.createElement("h2",{className:"sub-title",id:"address"},"I am from Noida");
const parent = React.createElement("div", {id:"parent"},[h1,h2])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);