import React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/arrow.svg';
import { ReactComponent as GamerImage } from '../../assets/gamer.svg';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => (
    <div className="home-container">
        <div className="home-text">
            <h1 className="home-text-title">
                Fique por dentro de todos os casos do COVID-19!
            </h1>
            <h3 className="home-text-subtitle">
                Clique no botão abaixo e saiba os números que o COVID-19 chegou!
            </h3>
            <Link to="/records">
                <div className="home-actions">
                    <button className="home-btn">
                        QUERO ESTAR POR DENTRO
                </button>
                    <div className="home-btn-icon">
                        <ArrowIcon />
                    </div>
                </div>
            </Link>
        </div>
    </div>
);

export default Home;