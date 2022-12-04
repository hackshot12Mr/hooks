import React from 'react'
import { useParams } from 'react-router-dom'

const Details = ({list}) => {
  const {id} = useParams()
  const item = list.find(el=>el.id==id)
  return (
      <div>
          <h1>{item.name}</h1>
          <iframe  width="560" height="315" src={item.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h3>{`the ${item.name} cost ${item.data}`}</h3>
      </div>
    )
  
}

export default Details