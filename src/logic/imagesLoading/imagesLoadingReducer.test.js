import reducer from './imagesLoadingReducer';
import { fetchImages } from './imagesLoadingActions';

it('should set the subreddit after calling search', () => {
  const previousState = { isLoading: false, subreddit: null };
  const subreddit = 'pics';

  const stateAfterSearch = reducer(previousState, fetchImages(subreddit));
  expect(stateAfterSearch).toEqual({ isLoading: true, subreddit });
});
