import './showcase.module.css'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import { useState } from 'react';
function OverlapCarousel() {
    const images = [
        project1,
        project2,
        project3,
        project4,
        project5,
        project6
    ]
    const [currentImage, setCurrentImage] = useState(0)
    let prev = currentImage == 0 ? images[images.length - 1] : images[currentImage - 1]
    let next = currentImage == images.length - 1 ? images[0] : images[currentImage + 1]

    const handlePrev = () => {
        if (currentImage === 0) {
            setCurrentImage(images.length - 1)
        } else {
            setCurrentImage(currentImage - 1)
        }
    }

    const handleNext = () => {
        if (currentImage === images.length - 1) {
            setCurrentImage(0)
        } else {
            setCurrentImage(currentImage + 1)
        }
    }
    return (
        // <div className="overlap-carousel-container">
        //     <h1>Overlap Carousel</h1>
        //     <div className="overlap-carousel">
        //         <button onClick={handlePrev} >prev</button>
        //         {

        //             [prev, images[currentImage], next].map((image, index) => {
        //                 return (
        //                     <div className={index == 1 ? "center" : ""} >


        //                         <img src={image} alt="carousel" />
        //                         {/* {index} */}
        //                     </div>
        //                 )
        //             }
        //             )
        //         }
        //         <button onClick={handleNext}>next</button>

        //     </div>
        // </div>

        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    padding: '20px 100px',
                    gap: '20px',
                    width: '100%',
                    cursor: 'pointer',
                    position: 'relative'
                }}
            >
                {
                    images.map((image, index) => {
                        return (
                            <div style={{ width: '30%' }} className={index === currentImage ? 'center' : ''}>
                                <img
                                    className='hover-image'
                                    style={{
                                        width: '100%',
                                        // height: '100%',
                                        // height: '500px',
                                        objectFit: 'cover',
                                        borderRadius: '20px',
                                        boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'

                                    }} layout='fill' src={image} alt="carousel" />
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}


export default OverlapCarousel;