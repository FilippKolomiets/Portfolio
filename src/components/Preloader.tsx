import type { FC } from 'react';
import './Preloader.module.css';

const Preloader: FC = () => (
  <div id="preloader" className="preloader-overlay">
    <div className="preloader-text">
      loading<span className="preloader-dot">.</span><span className="preloader-dot">.</span><span className="preloader-dot">.</span>
    </div>
    <div className="preloader-shape shape1"></div>
    <div className="preloader-shape shape2"></div>
    <div className="preloader-shape shape3"></div>
    <div className="preloader-shape shape4"></div>
  </div>
);

export default Preloader;
