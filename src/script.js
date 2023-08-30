let cardTitle = document.querySelectorAll('.state-title');
let currentTime = document.querySelectorAll('.time-style');
let previousTime = document.querySelectorAll('.time-desciption-style');

let dailyBtn = document.getElementById('home');
let weeklyBtn = document.getElementById('weekly');
let monthlyBtn = document.getElementById('monthly');

// fetch("../data.json")
// .then(response => response.json())
// .then(data => console.log(data));

function dailyStat(){

    fetch("../data.json")
    .then(response => response.json())
    .then(data => 
        cardTitle.forEach((element, index) => {
            cardTitle[index].textContent = data[index].title
            currentTime[index].textContent = `${data[index].timeframes.daily.current}hrs`;
            previousTime[index].textContent = `Last week - ${data[index].timeframes.daily.previous}hrs`;
        
        })
    );
}

function weeklyStat(){

    fetch("../data.json")
    .then(response => response.json())
    .then(data => 
        
        cardTitle.forEach((element, index) => {
            cardTitle[index].textContent = data[index].title
            currentTime[index].textContent = `${data[index].timeframes.weekly.current}hrs`;
            previousTime[index].textContent = `Last week - ${data[index].timeframes.weekly.previous}hrs`;
        
        })  
    );
}

function monthlyStat(){

    fetch("../data.json")
    .then(response => response.json())
    .then(data => 
    
        cardTitle.forEach((element, index) => {
            cardTitle[index].textContent = data[index].title
            currentTime[index].textContent = `${data[index].timeframes.monthly.current}hrs`;
            previousTime[index].textContent = `Last week - ${data[index].timeframes.monthly.previous}hrs`;
        
        })      
    );
}

dailyBtn.addEventListener('click', () => {


    if(weeklyBtn.classList.contains('active') || monthlyBtn.classList.contains('active')){
        monthlyBtn.classList.remove('active');
        weeklyBtn.classList.remove('active');
        dailyBtn.classList.toggle('active');
        dailyStat()
    } else {
        dailyBtn.classList.toggle('active');
        dailyStat()
    }
});


weeklyBtn.addEventListener('click', () => {
    if(dailyBtn.classList.contains('active') || monthlyBtn.classList.contains('active')){
        monthlyBtn.classList.remove('active');
        dailyBtn.classList.remove('active');
        weeklyBtn.classList.toggle('active');
        weeklyStat()
    } else {
        weeklyBtn.classList.toggle('active');
        weeklyStat()
    }
});

monthlyBtn.addEventListener('click', () => {
    if(dailyBtn.classList.contains('active') || weeklyBtn.classList.contains('active')){
        weeklyBtn.classList.remove('active');
        dailyBtn.classList.remove('active');
        monthlyBtn.classList.toggle('active');
        monthlyStat()
    } else {
        monthlyBtn.classList.toggle('active');
        monthlyStat()
    }
});