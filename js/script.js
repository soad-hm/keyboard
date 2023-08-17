const title=document.querySelector('.title')
document.addEventListener('keydown',function(event){
    addvaluetodom(event)
    let userkey=event.key.toUpperCase()
    let mainkey=document.getElementById(userkey)
    mainkey.classList.add('hit')
    mainkey.addEventListener('animationend',function(){
          mainkey.classList.remove('hit')
    })
  
})
function addvaluetodom(event){
if(event.code==='Backspace'){
    title.innerHTML=title.innerHTML.slice(0,-1)
    return
}
  title.innerHTML+=event.key  


}