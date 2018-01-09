import reducer from './galleryReducer';
import { imageClicked, imageClosed } from './galleryActions';

it('should pin an image after clicking it', () => {
  const previousState = { isImagePinned: false };
  const fakeUrl = 'url';

  const stateAfterClick = reducer(previousState, imageClicked(fakeUrl));
  expect(stateAfterClick).toEqual({ isImagePinned: true, pinnedImageUrl: fakeUrl });
});

it('should unpin an image after closing the pinned image', () => {
  const previousState = { isImagePinned: true };
  const stateAfterClosing = reducer(previousState, imageClosed());
  expect(stateAfterClosing).toEqual({ isImagePinned: false, pinnedImageUrl: null });
});

