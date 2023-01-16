import React from 'react';
import '../css/Banner.css';

const Banner = () => {
  const truncate = (text, len) => {
    const retText = text?.length > len ? `${text.substr(0, len - 1)} ...` : text;
    return retText;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/000/696/278/small/textured-black-background.jpg')",
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Title</h1>
        <div className="banner__buttons">
          <button type="button" className="banner__button">Play</button>
          <button type="button" className="banner__button">My List</button>
        </div>
        <h2 className="banner__description">
          {truncate(`Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Cum soluta reiciendis inventore dignissimos saepe distinctio 
          facilis odio ratione illum rerum, repellat consequatur 
          nesciunt est ab odit sunt deleniti maiores accusantium commodi 
          voluptatem impedit ex reprehenderit cumque. Cumque dignissimos 
          facere dolore ducimus est doloremque aspernatur modi sapiente 
          amet. Reiciendis, eveniet pariatur enim omnis excepturi neque 
          deserunt, vitae quae voluptatem dolor tempore, alias illo qui? 
          Expedita itaque rerum nisi quidem eos dicta blanditiis natus ipsum 
          molestias provident. Quos aliquid neque cumque enim accusamus, 
          veniam laboriosam esse quae aut explicabo nihil possimus 
          voluptatibus, facilis exercitationem nisi nobis reprehenderit! 
          Modi dolorum quibusdam similique rem vel ipsum animi excepturi, 
          beatae nisi pariatur ipsa fuga praesentium nihil, labore sint 
          suscipit adipisci unde? Voluptatum quae laborum nisi beatae sit 
          reprehenderit tempora et, iste quod odit. Esse quia itaque maiores 
          qui animi voluptatum. Quo culpa quisquam laudantium sit, quasi 
          consequatur ea reprehenderit soluta sunt. Non consequuntur 
          inventore quam eaque ipsam esse repellat. Animi harum esse illum. 
          Ut ipsa quibusdam veritatis hic ex, laboriosam a expedita deserunt 
          suscipit! Architecto explicabo atque id repellendus unde quis 
          praesentium a corporis consequuntur laborum culpa repudiandae, 
          libero doloribus deserunt cupiditate illo? Provident deleniti odio 
          pariatur nihil suscipit quia eveniet nulla omnis repellendus 
          nesciunt?`, 150)}
        </h2>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
