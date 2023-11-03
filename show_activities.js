console.log("hello")
console.log(categories[0])
for(i=0;i<categories.length;i++){
    console.log(categories[i])
    cat.innerHTML+=`<option>${categories[i]}</option>`

}
function showActivities(e){
    act.innerHTML=''
    for(i=0;i<activities.length;i++){
      if(activities[i].category==e.target.value){
        act.innerHTML+=`<option value="${activities[i].id}">${activities[i].name}</option>`

      } 
    
    }   
}
cat.onchange=showActivities
function showExtra(e){
    extra.innerHTML=''
    for(i=0;i<activities.length;i++){
      if(activities[i].id==e.target.value){
        extra.innerHTML+=`${activities[i].id}">${activities[i].name}</option>`

      } 
    
    }       
}