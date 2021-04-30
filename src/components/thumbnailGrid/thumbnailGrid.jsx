import React from 'react';
import Thumbnail from '../thumbnail/thumbnail'

 const ThumbnailGrid = ({thumbnails, handleClick}) => {

  return (
    
    <div style={styles}>
{ thumbnails.map((thumbnail, idx) => {
  return (
    <Thumbnail key={idx}
    imgUrl={thumbnail.link}
    index={idx}
    handleClick={handleClick}
    />
  )
})}

      </div>
    
  );
}

const styles = {
 display: "flex",
 flexWrap: 'wrap',
 backgroundColor: 'yellow',
 height: '35%',
 width: '100%',
}


export default ThumbnailGrid;