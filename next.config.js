// next.config.js

  module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'image.aladin.co.kr',
        },
        {
          protocol: 'http',
          hostname: 'image.aladin.co.kr',
        },
        {
          protocol:'https',
          hostname:'bookthumb-phinf.pstatic.net'
        },
        {
          protocol:'https',
          hostname:'maps.google.com'
        },
        {
          protocol:'https',
          hostname:'lh5.googleusercontent.com'
        },
        

        
      ],
    },
  }
  