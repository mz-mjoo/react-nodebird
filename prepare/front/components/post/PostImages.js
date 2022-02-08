import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from '../imagesZoom';

const ImageMoreWrapper = styled.div`
  display:'inline-block';
  width:50%;
  text-align: center;
  vertical-align: middle;
`;

const PostImages = ({ images }) => {
  const [showImagesZoom,setShowImagesZoom] = useState('');
  const onZoom = useCallback(()=> {
    setShowImagesZoom(true)
  },[]);
  const onClose = useCallback(()=> {
    setShowImagesZoom(false)
  },[])

  console.log('post images!',images);

  // 이미지가 하나일때
  if( images.length === 1 ) {
    return <>
      <img role="presentation" width="50%" src={images[0].src} alt={images[0].src} onClick={onZoom}/>
      {
        showImagesZoom && <ImagesZoom images={images} onclose={onClose}/>
      }
    </>
  }
  // 이미지가 두개일때
  if( images.length === 2 ) {
    return <>
      <img role="presentation" style={{width: '50%', display:'inline-block'}} src={images[0].src} alt={images[0].src} onClick={onZoom}/>
      <img role="presentation" style={{width: '50%', display:'inline-block'}} src={images[1].src} alt={images[1].src} onClick={onZoom}/>
      {
        showImagesZoom && <ImagesZoom images={images} onclose={onClose}/>
      }
    </>
  }

  return (
    <>
      {/* 이미지가 3개 이상일때 */}
      <div>
        <img role="presentation" style={{width: '50%'}} src={images[0].src} alt={images[0].src} onClick={onZoom}/>
        <ImageMoreWrapper
          role="presentation"
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {
            images.length - 1
          } 개의 사진 더보기
        </ImageMoreWrapper>
      </div>
      {
        showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>
      }
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostImages;
