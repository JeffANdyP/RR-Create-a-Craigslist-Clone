import React from 'react'
import Posting from './Posting'
const craigPost = require('./postings')

function Gallery(){
    return (
        <div>
            {
                craigPost.postings.map((data, i) => {
                    return <Posting data={data} key={1} />
                })
            }
        </div>
        )
  }

  export default Gallery;