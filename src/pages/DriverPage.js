import React from 'react';
import { useParams, Link } from 'react-router-dom'

import { DriverContext } from '../context/DriverContext'

import Loader from '../components/Loader'


const DriverPage = () => {

  const { name } = useParams()

  const { driversInfo, loading } = React.useContext(DriverContext)

  console.log(driversInfo)

  const driver = driversInfo.find(one => `${one.name}${one.secondName}` === name)
  console.log(driver)

  if (loading || typeof driver === 'undefined') {
    return <Loader />
  }

  if (typeof driver !== 'undefined') {
    const { name, secondName, image, imagePng, number, f1Debut, birth, homeCity, video, info, socialMedia } = driver


    let randomId1 = Math.floor(Math.random() * socialMedia.length) - 1
    let randomId2 = Math.floor(Math.random() * socialMedia.length) - 1

    const paragraphs = info.map((par, id) => {
      return (
        <div key={id} className='text-cont-flex'>
          <p >{par}</p>
          {randomId1 === id && <div className="photos"><img src={image[0]} alt={`${name} ${secondName}`} className="full-img" /></div>}
          {randomId2 === id && <div className="photos"><img src={image[1]} alt={`${name} ${secondName}`} className="full-img" /></div>}
        </div>
      )
    })

    const socials = socialMedia.map((social, id) => (
      <div key={id}>
        {social.name}
      </div>
    )
    )


    return (
      <div className="driver-page">

        <div className="driver-full-info">
          <div className="img-cont">
            <img className={`full-img`} src={imagePng} alt={`${name} ${secondName}`} />
          </div>

          <h2 className="name-full">{name} {secondName}</h2>
          <h3>About</h3>
          <p>Number: <span>{number}</span></p>
          <p>Home City: <span>{homeCity}</span></p>
          <p>Birth: <span>{birth}</span></p>
          <p>F1 debut: <span>{f1Debut}</span></p>

        </div>
        <div className="video">
          <img className='full-img' src={video} alt={`${name} ${secondName}`} />
        </div>

        {/* <div className="photos">
          <img src={image[0]} alt={`${name} ${secondName}`} className="full-img" />
          <img src={image[1]} alt={`${name} ${secondName}`} className="full-img" />
        </div> */}

        <div className="info-page">
          {paragraphs}
        </div>

        <div className="social-media">
          {socials}
        </div>

        <div className='link-back'>
          <Link className={'btn-link'} to="/drivers">Go back to drivers</Link>
        </div>
      </div>
    );
  }

}

export default DriverPage;