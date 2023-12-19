import React, { useState } from 'react'
import axios from 'axios'

function Products() {
    const [prnt , setPrnt]= useState([])
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>setPrnt(res.data))
    console.log(prnt);
  return (
    <div>
        <table border={1}>
        {

            prnt.map((val)=>{

                return (

                    <>
                    <tr>
                    <td>
                    {val.id}
                    </td>
                    </tr>
                    </>
                )
            
        })
        }
      
      
      </table>
    </div>
  )
}

export default Products
