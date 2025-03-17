 function updateDateTime() {
        let now = new Date();
        let days=['Sunday','Monday','Tuesday','Wednesday','Thursday',"Friday",'Saturday']
        let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

         let updateDay=days[now.getDay()];
        let dayName=document.getElementById("day-name");
        dayName.innerText=`${updateDay},`

        let year=now.getFullYear();
        let updateMonth=months[now.getMonth()];
        let date=now.getDate();
        let fullDate=document.getElementById('full-date');
        fullDate.innerText=`${date} ${updateMonth} ${year} `;
    }
    updateDateTime();
