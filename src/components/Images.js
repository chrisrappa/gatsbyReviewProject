import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import '../styles/gallery.css';
import '../styles/global.css';

export const Images = () => {
  const data = useStaticQuery(graphql`
      query CloudinaryImages {
          allCloudinaryMedia {
            edges {
              node {
                secure_url
              }
            }
          }
        }
        `
  );
  const clImages = data.allCloudinaryMedia.edges;

  return (
      <div>
        <div className = "image-grid p-4 border-gray-200 border-2">
          {clImages.map((image, index) => (
                <div key={`${index}-cl`}>
                  <img src={image.node.secure_url} alt='' />
                </div>
              ))
          }
        </div>
      </div>
    )
};

