import React from 'react'

function Card({username}) {
    // console.log("props", props);
    console.log(username);
  return (
    <>
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/28535500/pexels-photo-28535500/free-photo-of-scenic-view-of-positano-coastline-with-ocean.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It's easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div >
        Sudhanhsu
      </div>
      <div>
        Full Stack Engineer,India
      </div>
    </figcaption>
  </div>
      </figure>
    </>
  )
}

export default Card