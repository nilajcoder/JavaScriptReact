

import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'

const Header = () => {
    
   console.log("Header component rendered")
    return (
     <>
     <div>
    <h2>Header</h2>
     </div>
     
     </>
    )
    }

export default React.memo(Header) 