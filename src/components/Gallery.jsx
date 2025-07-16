import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useState } from "react"
import { Lightbox } from 'yet-another-react-lightbox'
import "yet-another-react-lightbox/styles.css";

import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.jpg"
import img6 from "../assets/6.jpg"
import img7 from "../assets/7.jpg"
import img8 from "../assets/8.jpg"
import img9 from "../assets/9.jpg"
import img10 from "../assets/10.jpg"
import img11 from "../assets/11.jpg"
import img12 from "../assets/12.jpg"
import img13 from "../assets/13.jpg"
import img14 from "../assets/14.jpg"
import img15 from "../assets/15.jpg"
import img16 from "../assets/16.jpg"

const images = [img1,img2,img3,img4,img5,img6,img7,img9,img9,img10,img11,img12,img13,img14,img15,img16]

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    return (
        <div id="masonry">
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry>
                
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        style={{display: "block", width: "100%"}}
                        className="image"
                        onClick={() => {
                            setPhotoIndex(i)
                            setIsOpen(true)
                        }}
                        alt=''
                    />
                ))}
                
            </Masonry>
        </ResponsiveMasonry>
        <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={images.map((src) => ({ src }))}
            on={{
                view: ({ index }) => setPhotoIndex(index)
            }}
        />
        </div>
    )
}

export default Gallery