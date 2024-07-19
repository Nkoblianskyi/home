import { Present } from "../elements/present"

const itemPresent = [
    { src:'/home/room1.jpg', alt: 'room', back:'/home/fgrad.jpg', text:'Living room'},
    { src:'/home/room2.jpg', alt: 'room', back:'/home/fgrad.jpg', text:'Working cabinet'},
    { src:'/home/room3.jpg', alt: 'room', back:'/home/fgrad.jpg', text:'Antechamber'},
]


export const About = () => {

    return ( 
        <div className="about">
            <div className="about-title">
                <h1 className="about-title-text">Interior Plant Reference</h1>
                <p className="about-title-text-span">make your home so comfortable with refreshing plants</p>
            </div>
            <div className="about-card">
                <Present itemPresent={itemPresent}/>
            </div>
        </div>
    )
}