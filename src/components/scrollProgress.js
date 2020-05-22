import React from 'react'

import {useScrollTrigger, Slide} from '@material-ui/core'


export const ScrollProgress = (props) => {
  const trigger = useScrollTrigger()

  return (
    <Slide in={!trigger}>
      <div>Hello</div>
    </Slide>
  )
}