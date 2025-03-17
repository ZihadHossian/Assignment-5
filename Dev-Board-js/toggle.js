document.getElementById('fix-btn').addEventListener('click',function(event){
    event.preventDefault();
    addTotalTask("total-complete-task");
    totalAssignedTask("complete-assigned-task");
    addActivity("title-fix")
    this.disabled=true;
})
//card-2
document.getElementById('dark-btn').addEventListener('click',function(event){
    event.preventDefault();
    addTotalTask("total-complete-task");
    totalAssignedTask("complete-assigned-task");
    addActivity("title-dark")
    this.disabled=true;
})
// card-3
document.getElementById('optimize-btn').addEventListener('click',function(event){
    event.preventDefault();
    addTotalTask("total-complete-task");
    totalAssignedTask("complete-assigned-task");
    addActivity("title-optimize")
    this.disabled=true;
})
// card-4
document.getElementById('emoji-btn').addEventListener('click',function(event){
    event.preventDefault();
    addTotalTask("total-complete-task");
    totalAssignedTask("complete-assigned-task");
    addActivity("title-emoji")
    this.disabled=true;
})
// card-5
document.getElementById('openai-btn').addEventListener('click',function(event){
    event.preventDefault();
    addTotalTask("total-complete-task");
    totalAssignedTask("complete-assigned-task");
    addActivity("title-openai")
    this.disabled=true;
})
// card-6
document.getElementById('home-btn').addEventListener('click',function(event){
    event.preventDefault();
    addTotalTask("total-complete-task");
    totalAssignedTask("complete-assigned-task");
    addActivity("title-home")
    this.disabled=true;
})
// clear History 
document.getElementById("clear-btn").addEventListener("click",function(event){
    event.preventDefault();
    let allActivity=document.getElementById("new-activity");
    allActivity.innerHTML="";
})