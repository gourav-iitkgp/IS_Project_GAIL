
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        {/* <nav>
          <Logo />
        </nav> */}
        <div className='container page'>
          {/* info */}
          <div className='info'>
            <h1>
              Electric Motor <span>tracking</span> Dashboard
            </h1>
            <p>
              This Web Application shows Real-Time Status of Electric Motors.
              <br>
              </br>
              Project under Gas Authority of India. (GAIL)

            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
          </div>
          <img src={"https://cdn-icons-png.flaticon.com/512/6821/6821002.png"} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
