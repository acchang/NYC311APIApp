// I will find all the 311s at zipcode, cross street
// can't use date, it's very specific
// gitupload 

fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json`)
.then(res => res.json()) 
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(`error ${err}`)
});

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const initialChoice = document.querySelector('input').value
  let choice 
  let testForSpaces = initialChoice.split(" ")
    if (testForSpaces.length > 1) {
      choice = testForSpaces.join('%20')}
    else choice = testForSpaces
    console.log(choice)

  fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json`)
  .then(res => res.json()) 
  .then(data => {
      console.log(data)
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

}