const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  
  const button = document.querySelector('.btn')
  
  button.addEventListener("click", function(e) {
    fetchData()
  })
  

  const setName = nameData => {
    const fullName = document.querySelector('#fullname')
    fullName.textContent = nameData.name

    const email = document.querySelector('#email')
    email.textContent = nameData.email
  }  
  // function setName(nameData) {
  //   const fullName = document.querySelector('#fullname')
  //   fullName.textContent = nameData
  // }

  function fetchData(){
    let data = fetch('https://randomuser.me/api/')
      .then( res => res.json() )
      .then( data => {

        const fullName = data.results[0].name.first + ' ' + data.results[0].name.last
        const email = data.results[0].email
        console.log(data.results[0])

        const personData = {
          name: fullName,
          email: email
        }
        setName(personData)
      })
    }


});



// Request/response = ping pong
