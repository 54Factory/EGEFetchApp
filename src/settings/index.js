export default {
  apiUrl: 'http://yoursite.com/api/',
};

const siteConfig = {
  siteName: 'ISOMORPHIC',
  siteIcon: 'ion-flash',
  footerText: 'Isomorphic ©2018 Created by RedQ, Inc',
};
const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault',
};
const language = 'english';

const jwtConfig = {
  fetchUrl: '/api/',
  secretKey: 'secretKey',
};

const firebaseConfig = {
  apiKey: "AIzaSyAvcV_EpgXh43F6NHDSAqvTyo_ii7nltO4",
  authDomain: "fetch-fa6c9.firebaseapp.com",
  databaseURL: "https://fetch-fa6c9.firebaseio.com",
  projectId: "fetch-fa6c9",
  storageBucket: "fetch-fa6c9.appspot.com",
  messagingSenderId: "109753455164"
};
const googleConfig = {
  apiKey: 'AIzaSyDXxVaYUsyLRtok2GdPxTmDeogOZpQcVMo' //
};

export { siteConfig, language, themeConfig, jwtConfig, firebaseConfig, googleConfig };
