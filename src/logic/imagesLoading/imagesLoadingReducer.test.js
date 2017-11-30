import reducer from './imagesLoadingReducer';
import { fetchImages, setOrderByFilter, setFromFilter, setSearchTerm }  from './imagesLoadingActions';

it('should set order-by filter', () => {
  const previousState = { orderBy: 'top' };
  const orderBy = 'new'

  const stateAfterSearch = reducer(previousState, setOrderByFilter(orderBy));
  expect(stateAfterSearch).toEqual({ orderBy })
});

it('should set from filter', () => {
  const previousState = { from: 'month' };
  const from = 'day'

  const stateAfterSearch = reducer(previousState, setFromFilter(from));
  expect(stateAfterSearch).toEqual({ from })
});

it('should set search term', () => {
  const previousState = { subreddit: 'pics' };
  const searchTerm = 'cats'

  const stateAfterSearch = reducer(previousState, setSearchTerm(searchTerm));
  expect(stateAfterSearch).toEqual({ subreddit: searchTerm })
});