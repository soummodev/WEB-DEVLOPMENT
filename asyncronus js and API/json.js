fetch("https://dog.ceo/api/breeds/image/random")
  .then(response => response.json())
  .then(data => {
      const imageElement = document.createElement('img')
      imageElement.src = data.message
      imageElement.alt = 'random dog picture'
      document.getElementById('img-container').appendChild(imageElement)
      
  });
async function getsuggesion() {
   
    const response = await fetch('https://apis.scrimba.com/bored/api/activity')
    const data = response.json()
    console.log(response)
   console.log(data)
}
  getsuggesion()
 fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => console.log(data))
     .catch(err => {
         console.log(err)
         
     })
    .finally(() => console.log('All operatins are completed'))

try {
      const response = await fetch('https://apis.scrimba.com/bored/api/activity')
      const data = response.json()
      console.log(response)
     console.log(data)
  }

catch (err) {
     console.log(err);
}
finally {
    console.log("All operatins are completed");
   }

      const response = await fetch('https://apis.scrimba.com/bored/api/activity')
console.log(response.ok)
if (!response.ok) {
    throw new Error('there was a problem')
}
try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    if (!response.ok) {
        throw new Error("there was a problem")
    }
    const data = await response.json()
    console.log(data)

}
catch (err) {
    console.log(err)
}



fetch("https://example.com/api/posts", {
  method: "POST",
  headers: {
    "Content-type": "application/json; charset=UTF-8", 
  },
  body: JSON.stringify({
    title: "My Day",
    body: "It was a great day!",
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));





const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5
  if (success) {
    resolve('operation successfull')
  }
  else {
    reject('operation failed')
  }


})
promise.then(response => console.log(response))
function creatpromise(){

const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5
  if (success) {
    resolve('operation successfull')
  }
  else {
    reject('operation failed')
  }


})
}
try {
  const p1 = creatpromise()
  const p2 = creatpromise()
  const p3 = creatpromise()
  const result = await Promise.all([p1, p2, p3])
  console.log(result)
}
catch (err){
  console.log(err)
}