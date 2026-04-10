import pfsarr from "./property.js"
import placeholderobj from "./placeholder.js"

console.log(pfsarr)
function getpropertyhtml(propertyarr =[placeholderobj]) {
    return propertyarr.map(property => {
        const { propertylocation, price, rooms, comment, image } = property
        const totalroomsize = rooms.reduce((total,current)=> total + current)
        return `
        <section class="card">
        <img src="">
        <div class="card-right">
        <h2>${propertylocation}</h2>
        <h3>${price}</h3>
        <p>${comment}</p>
        <h3>TOTAL SIZE IN SQURE METERS </h3>
        </div>
        </selection>
        
        `
    })
}
document.getElementById('container').innerHTML=getproperhtml(pfsarr)