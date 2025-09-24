import Image from 'next/image'
import React from 'react'

export default function Background() {
  return (
     <div>
          <Image
            src="https://my.messagemind.ai/group-top.png" // local image in the public folder
            alt="Profile Picture"
            width={300} // required for layout
            height={300}
            className="fixed top-0 right-0" // required for layout
          />
          <Image
            src="https://my.messagemind.ai/group-bottom.png" // local image in the public folder
            alt="Profile Picture"
            width={300} // required for layout
            height={300} 
            className="fixed bottom-0 left-0" // required for layout
          />
        </div>
  )
}
