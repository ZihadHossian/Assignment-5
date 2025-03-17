function addTotalTask(pressBtn){
    let totalCompleteTask=document.getElementById(pressBtn);
    let convertTotalCompleteTask=parseInt(totalCompleteTask.innerText);
    let sumTotalCompleteTask=convertTotalCompleteTask+1;
    totalCompleteTask.innerText=sumTotalCompleteTask
}

function totalAssignedTask(inputBtn){
    let completeAssignedTask=document.getElementById(inputBtn);
    let convertCompleteAssignedTask=parseInt(completeAssignedTask.innerText);
    let totalCompleteAssignedTask=convertCompleteAssignedTask-1;
    completeAssignedTask.innerText=totalCompleteAssignedTask;
}
function addActivity(inputTitle){
    let now=new Date();
    let second=now.getSeconds();
    let minute=now.getMinutes();
    let hour=now.getHours();
    let totalTime=`${hour}:${minute}:${second}`
    let title=document.getElementById(inputTitle).innerText
    let p=document.createElement("p");
    p.innerText=`You have Complete The Task ${title} at ${totalTime}`
    document.getElementById("new-activity").appendChild(p);
}