// O sea, donde deberia estar alejado md, para evitar errores de CORS
const target = 'MD_URL';

const PROXY_CONFIG = [
  {
    context: ['/v1'],
    target: target,
    secure: false,
    changeOrigin: true,
    pathRewrite: {
       '^/md': '/md/',
     },
  },
];
console.log('-------> ' + PROXY_CONFIG[0].target);

module.exports = PROXY_CONFIG;
