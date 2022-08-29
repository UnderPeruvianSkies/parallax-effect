import { Parallax } from 'react-parallax';
import Tokyo3 from '../img/tokyo4.jpg'

const ImageTwo = () => (
	<Parallax  className='image' bgImage={Tokyo3} bgImageAlt="Tokyo" strength={900}>
		<div className='content'>
			<span className='img-txt'>A trip to Tokyo</span>
		</div>
	</Parallax>
);

export default ImageTwo