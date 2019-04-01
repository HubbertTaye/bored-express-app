//gimme activity button code
 document.querySelector('#randAct').addEventListener('click', randomAct)

 function randomAct(e){
   e.preventDefault()
   let genre = document.querySelector('#genres').value
   fetch(`http://www.boredapi.com/api/activity?type=${genre}`)
   .then(res => res.json())
   .then(response =>{
     document.querySelector('p').textContent = response.activity
   })
   .catch(err => {
     console.log(`ouch ${err}`)
     document.querySelector('p').textContent = 'I\'m stumped. Try a different activity type.'
   })
 }

//add to favorites button code
 document.querySelector('#save').addEventListener('click', favorites)


 function favorites(e){
   e.preventDefault();
   //pass activity into server side
   let activity = document.querySelector('p').textContent
   fetch('listActivity', {
     method: 'post',
     headers: {'Content-Type': 'application/json'},
     body: JSON.stringify({
       'activity': activity
     })
   })
   .then(response => {
     window.location.reload()
   })
 } //closes func favorites

 //change this to crossout when activity is completed
 let actFavs = document.querySelectorAll('span')

 Array.from(actFavs).forEach(function(el){
  el.addEventListener('click', function(){
    const activity = this.textContent
    console.log(activity)
    fetch('delActivity', {
      method: 'delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'activity': activity
      })
    })
    .then(function (response) {
      window.location.reload()
    })
  })
}) //closes forEach function for delete

//add delete code from trash/delete icons
