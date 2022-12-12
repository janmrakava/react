import React, { useContext } from "react"
import {getClass} from "../utils"
import Image from "../components/Image"

import {Context} from "../src/Context" 

function Photos() {
    const {allPhotos} = useContext(Context)
    const photos = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)}></Image>
    ))
   
    return (
        <main className="photos">
            {photos}
        </main>
    )
}

export default Photos