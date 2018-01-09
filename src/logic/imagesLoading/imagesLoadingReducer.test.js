import reducer from './imagesLoadingReducer';
import { loadImages, loadMoreImages, setOrderByFilter, setFromFilter, setSearchTerm }  from './imagesLoadingActions';

it('should set loading indicator when intially loading images', () => {
  const previousState = { isLoading: false, images: [] }

  const stateAfterImagesLoadingTriggered = reducer(previousState, loadImages())
  expect(stateAfterImagesLoadingTriggered.isLoading).toEqual(true)
})

it('should set loading indicator when loading more images', () => {
  const previousState = { isLoading: false, images: ['url'] }
  
  const stateAfterMoreImagesLoadingTriggered = reducer(previousState, loadMoreImages())
  expect(stateAfterMoreImagesLoadingTriggered.isLoading).toEqual(true)
})

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