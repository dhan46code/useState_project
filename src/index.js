import React, { useState } from 'react';
import ReactDom from 'react-dom';
import data from './data';
import ListImage from './ListImage';
import './style.css';

function Main() {
  const [image, setImage] = useState(data);
  console.log(data);
  return (
    <>
      <main>
        <section className='container'>
          <h3>{image.length} picture from pexels</h3>
          <ListImage img={image} />
          <button onClick={() => setImage([])}>clear all picture</button>
        </section>
      </main>
    </>
  );
}

ReactDom.render(<Main />, document.getElementById('root'));
