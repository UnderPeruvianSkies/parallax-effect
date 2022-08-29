import { Parallax } from 'react-parallax';
import Tokyo2 from '../img/tokyo2.jpg'

const ImageThree = () => (
	<Parallax  className='image' bgImage={Tokyo2} bgImageAlt="Tokyo" strength={800}>
		<div className='content'>
			<span className='img-txt'>A trip to Tokyo</span>
		</div>
	</Parallax>
);

export default ImageThree