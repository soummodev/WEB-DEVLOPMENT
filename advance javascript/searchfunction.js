export default function getmatchtr(arr, keyword) {
    return arr.filter(function (trip){
        return trip.description.toLowerCase().includes(keyword)
    })
}
//we dont need to write export default before function 
//we can do this by writting export default and then function name
