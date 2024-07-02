import React from 'react'
import { team } from "../../dummydata"

const TeamCard = () => {
  return (
    <>
      {team.map((val) => (
        <div className='items shadow'>
          <div className='img'>
            <img src={val.cover} alt='' />
            <div className='overlay'>
              <a href='https://www.facebook.com/' target='_blank'><i className='fab fa-facebook-f icon'></i></a>
              <a href='https://twitter.com/' target='_blank'><i className='fab fa-twitter icon'></i></a>
              <a href='https://www.instagram.com/' target='_blank'><i className='fab fa-instagram icon'></i></a>
              <a href='https://www.snapchat.com/' target='_blank'> <i className='fab fa-snapchat icon'></i></a>
            </div>
          </div>
          <div className='details'>
            <h2>{val.name}</h2>
            <p>{val.work}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default TeamCard
