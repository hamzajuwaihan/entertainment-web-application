import React from 'react'
import Followers from './Followers'
import Following from './Following'
import Savedposts from './Savedposts'

import ProfileVisit from './ProfileVisit'

function Stats() {
    return (
    <>
    <ProfileVisit/>
    <Followers/>
    <Following/>
    <Savedposts/>
    </>
    )
}

export default Stats