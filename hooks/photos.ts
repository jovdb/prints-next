import create from "zustand";
import shallow from "zustand/shallow";
import { photosStore, IPhotosStore, getPhoto, getPhotos } from "../store/photos";
import { Photos } from "../types";

export const usePhotosStore = create(photosStore);

const photosSelector = (state: IPhotosStore) => state.photos;
const resetSelector = (state: IPhotosStore) => state.reset;

export function usePhotos() {
	const photos = usePhotosStore(photosSelector, shallow);
	const reset = usePhotosStore(resetSelector);
	return [photos,	reset] as [photos: Photos, setPhotos: (photos: Photos) => void];
}

export function usePhoto(photoId: string | undefined) {
	const photos = usePhotosStore(photosSelector);
	return getPhoto(photos, photoId);
}

const photosActionsSelector = (state: IPhotosStore) => ({
	reset: state.reset,
	addPhoto: state.addPhoto,
	updatePhoto: state.updatePhoto,
	removePhoto: state.removePhoto,
});

export function usePhotosActions() {
	return usePhotosStore(photosActionsSelector, shallow);
}
