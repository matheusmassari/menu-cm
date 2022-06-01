import { Global } from "@emotion/react";

export const Fonts = () => (
    <Global
        styles={`
      @font-face {
        font-family: 'Allura';
        font-style: normal;        
        font-display: swap;
        src: local('Allura'), url(./fonts/Allura-Regular.ttf) format('truetype');
        
      }
      
      @font-face {
        font-family: 'Poppins';
        font-style: normal;        
        font-display: swap;
        src: local('Poppins'), url(./fonts/Poppins-Medium.ttf) format('truetype');
       
      }
      `}
    />
);
