import React from 'react'
import { Rating as MantineRationg } from '@mantine/core';

const UserRate = ({value} : any) => {
  return (
    <MantineRationg defaultValue={value} readOnly/>
  )
}

export default UserRate