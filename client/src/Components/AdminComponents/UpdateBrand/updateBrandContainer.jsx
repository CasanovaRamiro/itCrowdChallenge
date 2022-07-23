import React from 'react'
import { useParams } from 'react-router-dom'
import useBrandById from '../../../Hooks/useBrandById'
import UpdateBrand from './UpdateBrand'
import css from './UpdateBrand.module.css'
function updateBrandContainer() {
    const {id}=useParams()
    const brand = useBrandById(id)
  return (
    <div className={css.container} style={{justifyContent: 'start', marginTop: '20px'}}>
        {brand.name ? 
        <UpdateBrand
          id={brand.id}
          name={brand.name}
          logo_url={brand.logo_url}
        />
        :
        null
        }
        
    </div>
  )
}

export default updateBrandContainer