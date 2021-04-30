import React, { Component } from 'react';
import styles from './thumbnailGallery.module.css'; 
import ActiveThumbnail from '../activeThumbnail/activeThumbnail'
import ThumbnailGrid from '../thumbnailGrid/thumbnailGrid'
import axios from 'axios';


export default class ThumbnailGallery extends Component {

  state = {
    thumbnails : [],
    activeIndex: 0,
  }


   componentDidMount() {
       axios({
      'method': 'GET',
      'url': "https://api.imgur.com/3/account/hnorthcote/images",
      'headers' : {
        'Authorization': 'Bearer a08c179ac8e05721d2ef5f7dc512bd1d1bef91bd',
        'content-type': 'application/json',
      }}).then(res => {
        this.setState({thumbnails : res.data.data})
      })};
    
renderThumbnails = () => {
  const { thumbnails, activeIndex } = this.state;
  console.log(thumbnails);
  if(thumbnails.length) {
    return (
     <> 
      <ActiveThumbnail 
      activeThumbnail={`${thumbnails[activeIndex].link}`}
      />
      <ThumbnailGrid 
      thumbnails= {thumbnails}
      handleClick={this.handleClick}
      />
      </>
    )
  }
  return null;
}

handleClick = (e) => {

 const activeIndex = e.target.getAttribute('data-index')
this.setState({activeIndex})
  
}
    
  render(){
  const { thumbnails } = this.state;
  console.log(thumbnails)
  return (
    <div style={thumbnailGalleryStyles}>
     

    <div className={styles.flex}>
      {this.renderThumbnails()}

    </div>

    <div className={styles.div}> 
    

    </div>

    </div>
  );
}
}


const thumbnailGalleryStyles = {
  display: 'flex',
  background: '#ddd',
  maxHeight: '500px',
  maxWidth: '1024px',
  margin: '40px auto',
}

