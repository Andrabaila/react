import UI from '../data/UI';

function getCurrentPageName() {
  let currentPageName = window.location.pathname.split('/').pop();
  if (currentPageName === '') {
    currentPageName = UI.mainPageName;
  } else if (currentPageName === 'about') {
    currentPageName = UI.aboutPageName;
  } else {
    currentPageName = UI.pageNotFoundName;
  }
  return currentPageName;
}

export default getCurrentPageName;
