import { Parallax } from 'react-parallax';
import Tokyo from '../img/tokyo3.jpg'

const ImageOne = () => (
	<Parallax  className='image' bgImage={Tokyo} bgImageAlt="Tokyo" strength={800}>
		<div className='content'>
			<span className='img-txt'>A trip to Tokyo</span>
		</div>
	</Parallax>
);

export default ImageOne