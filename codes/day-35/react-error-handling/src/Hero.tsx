import React from 'react'
import { errorLogger } from './errorLogger';
import withErrorBoundary from './withErrorBoundary';

type HeroPropType = {
    heroName: string
}
//v1: handle error (using try...catch) within the component
// const Hero = (props: HeroPropType) => {
//     let { heroName: nameOfHero } = props
//     let design = null;
//     try {
//         design = <span>{nameOfHero}</span>
//         if (nameOfHero === 'Joker') {
//             let heroError = new Error(`${nameOfHero} is not a hero`)
//             throw heroError
//         }
//     }
//     catch (err) {
//         design = <span>Not a hero</span>
//     }
//     //let nameOfHero = props.heroName
//     return design
// }

//v2 & v3:
const Hero = (props: HeroPropType) => {
    let { heroName: nameOfHero } = props
    let design = null;

    design = <span>{nameOfHero}</span>
    if (nameOfHero === 'Joker') {
        let heroError = new Error(`${nameOfHero} is not a hero`)
        throw heroError
    }

    //let nameOfHero = props.heroName
    return design
}
//v2:
//export default Hero

//v3:
export default withErrorBoundary(Hero, errorLogger)
