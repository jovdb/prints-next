import create from "zustand/vanilla";

import type { IPhoto, Photos } from "../types";

export interface IPhotosStore {
	photos: Photos;
	reset(photos?: Photos): void;
	addPhoto(photo: IPhoto): void;
	removePhoto(photoId: string): void;
	updatePhoto(photoId: string, newPhoto: IPhoto): void;
}

// Vanilla zustand store
export let photosStore = create<IPhotosStore>(
	(set) => ({
		photos: {},

		reset(photos = {}) {
			set({ photos });
		},

		addPhoto(photo) {
			set(({photos}) => ({
				photos: {
					...photos,
					[photo.id]: photo,
				}
			}));
		},

		removePhoto(photoId) {
			set(({photos}) => {
				const { [photoId]: _, ...rest } = photos;
				return {
					photos: rest,
				};
			});
		},

		updatePhoto(photoId, newPhoto) {
			set(({photos}) => ({
				photos: {
					...photos,
					[photoId]: newPhoto,
				},
			}));
		},
	})
);

export function getPhotos(photos: Photos) {
	return Object.values(photos); // could be later sorted
};

export function getPhoto(photos: Photos, photoId: string | undefined) {
	if (!photoId) return undefined;
	return photos[photoId];
};
