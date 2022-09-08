import React from 'react'

function InfoCard({title, subtitle, description}) {
  return (
    <div className='infoCard'>
        <div className='infoTitle'> {title} </div>
        <div className='infoSubtitle'> {subtitle} </div>
        <div className='infoPara'> {description} </div>
    </div>
  )
}

export default InfoCard