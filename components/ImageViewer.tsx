import { StyleSheet, Image } from 'react-native';

interface Props {
  placeholderImageSource?: any,
}

export default function ImageViewer(props: Props) {
	return (
		<Image source={props.placeholderImageSource} style={styles.image} />
	);
}

const styles = StyleSheet.create({
	image: {
		width: 320,
		height: 440,
		borderRadius: 18,
	},
});