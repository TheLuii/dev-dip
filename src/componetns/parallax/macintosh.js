import { Parallax } from 'react-parallax';
import AirPodsParallax from '../pic/airpods_main.jpg'

const AirPodsPar = () => (
    <Parallax className="image" bgImage={AirPodsParallax} strength={-600}>
        <div className="content">
            <span className="img-txt"> Aхуенно! </span>
        </div>
    </Parallax>
);

export default AirPodsPar;