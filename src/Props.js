import React from "react";
// const Props =props =>{
//     console.log(props)
//     return(
//         <div>
//         <h1>hello {props.name} a.k.a {props.heroName}</h1>
//         {props.children}
//         </div>
//     )
// }


//destrusturing props in function parameter
// const Props =({name,heroName})=>{
//         return(
//             <div>
//             <h1>hello {name} a.k.a {heroName}</h1>
//             </div>
//         )
//     }

//destructure in function body
const Props =props=> {
    const{name,heroName}=props
    return(
        <div>
        <h1>hello {name} a.k.a {heroName}</h1>
        </div>
    )
}
export default Props