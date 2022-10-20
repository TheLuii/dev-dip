import { Parallax } from 'react-parallax';
import MacParallax from '../pic/macbook.jpg'

const MacPar = () => (
    <Parallax className="image" bgImage={MacParallax} strength={-600}>
        <div className="content">
            <span className="img-txt"> Дорого! </span>
        </div>
    </Parallax>
);

export default MacPar;