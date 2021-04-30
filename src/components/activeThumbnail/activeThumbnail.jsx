import React from 'react';
import styles from './activeThumbnail.module.css'

 const ActiveThumbnail = ({ activeThumbnail }) => {
 console.log(activeThumbnail)
  return (
    
    <div className={styles.active}>
      <img 
      src={activeThumbnail} alt="current photograph"
      style={{
        width:"100%",
        height: "100%" }}/>
      </div>
    
  );

}
export default ActiveThumbnail;