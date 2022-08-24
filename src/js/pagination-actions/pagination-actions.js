import { pageState } from '../state';
import { moviesFetcher } from '../api';

export const paginationAction = action => {
  if (action === 'prev') {
    pageState.currentMoviePage -= 1;
    moviesFetcher.reRenderByPagination();

    return;
  }

  if (action === 'next') {
    pageState.currentMoviePage += 1;
    moviesFetcher.reRenderByPagination();

    return;
  }

  const parsedPage = parseInt(action);

  if (!parsedPage) return;

  pageState.currentMoviePage = parsedPage;
  moviesFetcher.reRenderByPagination();
};
