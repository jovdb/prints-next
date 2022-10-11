export const PlaceholderImage = ({
    aspectRatio,
    style,
    ...rest
}: {
    aspectRatio?: number;
    loading?: string;
} & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => (
	// eslint-disable-next-line jsx-a11y/alt-text
	<img style={{ aspectRatio,  background: "#f8f8f8", ...style}} {...rest} />
);
