import React from 'react';

const ListImage = ({ img }) => {
  return (
    <>
      {img.map((picture) => {
        const { id, name, image } = picture;
        return (
          <article className='picture'>
            <img src={image} alt={name} />
            <div>
              <h4>
                <a href={image}>{name}</a>
              </h4>
              <hr></hr>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default ListImage;
