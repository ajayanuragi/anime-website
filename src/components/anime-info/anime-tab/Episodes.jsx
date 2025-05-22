import React from 'react'

const Episodes = ({episodes}) => {
  if (!episodes || episodes.length === 0) {
    return <p className="text-white"> No episodes found</p>;
  }
    console.log(episodes)
  return (
    <div>Episodes</div>
  )
}

export default Episodes