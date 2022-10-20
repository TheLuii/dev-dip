import { Parallax } from 'react-parallax';
import IphoneParallax from '../pic/iphone.jpg'

const IphonePar = () => (
    <Parallax className="image" bgImage={IphoneParallax} strength={-600}>
        <div className="content">
            <span className="img-txt"> Долго! </span>
        </div>
    </Parallax>
);

export default IphonePar