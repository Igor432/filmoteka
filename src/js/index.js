import debounce from 'lodash.debounce';
import { pageState } from './state';
import { moviesFetcher } from './api';
import { rootRefs } from './root-refs';
import { setGlobalLocale, changeLocale } from './locale';
import { setPageMode, changePageMode } from './page-mode';
import { searchMovies } from './search';

setPageMode(pageState.mode);
setGlobalLocale(pageState.locale);

moviesFetcher.renderTrending();

rootRefs.localeSwitch.addEventListener('click', changeLocale);
rootRefs.modeSwitch.addEventListener('change', changePageMode);
rootRefs.searchField.addEventListener('input', debounce(searchMovies, 200));