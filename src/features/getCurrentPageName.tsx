import UI from '../data/UI';

function getCurrentPageName() {
  let currentPageName = window.location.pathname.split('/').pop();
  if (currentPageName === '') {
    currentPageName = UI.mainPageName;
  } else {
    currentPageName = UI.aboutPageName;
  }
  return currentPageName;
}

export default getCurrentPageName;
