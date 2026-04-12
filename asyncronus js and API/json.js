// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(response => response.json())
//   .then(data => {
//       const imageElement = document.createElement('img')
//       imageElement.src = data.message
//       imageElement.alt = 'random dog picture'
//       document.getElementById('img-container').appendChild(imageElement)
      
//   });
// async function getsuggesion() {
   
//     const response = await fetch('https://apis.scrimba.com/bored/api/activity')
//     const data = response.json()
//     console.log(response)
//    console.log(data)
// }
//   getsuggesion()
//  fetch("https://dog.ceo/api/breeds/image/random")
//     .then(response => response.json())
//     .then(data => console.log(data))
//      .catch(err => {
//          console.log(err)
         
//      })
//     .finally(() => console.log('All operatins are completed'))
// a method of error handling
// try {
  //     const response = await fetch('https://apis.scrimba.com/bored/api/activity')
  //     const data = response.json()
  //     console.log(response)
  //    console.log(data)
  // }
// }
// catch (err) {
//      console.log(err);
// }
// finally {
//     console.log("All operatins are completed");
//    }

//       const response = await fetch('https://apis.scrimba.com/bored/api/activity')
// console.log(response.ok)
// if (!response.ok) {
//     throw new Error('there was a problem')
// }
// try {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random")
//     if (!response.ok) {
//         throw new Error("there was a problem")
//     }
//     const data = await response.json()
//     console.log(data)

// }
// catch (err) {
//     console.log(err)
// }