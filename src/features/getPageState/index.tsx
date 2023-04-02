import getCurrentPageName from '../getCurrentPageName';

function getPageState(page: string) {
  if (page === getCurrentPageName()) {
    return 'active';
  } else {
    return '';
  }
}

export default getPageState;
