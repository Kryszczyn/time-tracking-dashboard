const dataObj = [
    {
        0: {
            dailyTime: ['5hrs', '7hrs'],
            weeklyTime: ['32hrs', '46hrs'],
            monthlyTime: ['103hrs', '128hrs']
        },
        1: {
            dailyTime: ['1hr', '2hrs'],
            weeklyTime: ['10hrs', '8hrs'],
            monthlyTime: ['23hrs', '29hrs']
        },
        2: {
            dailyTime: ['0hrs', '1hr'],
            weeklyTime: ['4hrs', '7hrs'],
            monthlyTime: ['13hrs', '19hrs']
        },
        3: {
            dailyTime: ['1hr', '1hr'],
            weeklyTime: ['4hrs', '5hrs'],
            monthlyTime: ['11hrs', '18hrs']
        },
        4: {
            dailyTime: ['1hr', '3hrs'],
            weeklyTime: ['5hrs', '10hrs'],
            monthlyTime: ['21hrs', '23hrs']
        },
        5: {
            dailyTime: ['0hrs', '1hr'],
            weeklyTime: ['2hrs', '2hrs'],
            monthlyTime: ['7hrs', '11hrs']
        }
    }
]

const dailyBtn = document.querySelector('#daily'),
    weeklyBtn = document.querySelector('#weekly'),
    monthlyBtn = document.querySelector('#monthly'),
    cards = document.querySelectorAll('.card');


dailyBtn.addEventListener('click', () => {
    weeklyBtn.classList.remove('active');
    monthlyBtn.classList.remove('active');
    dailyBtn.classList.add('active');
    cards.forEach((card, index) => {
        let dailyTimeText = card.querySelector('.mid__info');
        let lastDailyTimeText = card.querySelector('.bottom__info');
        dailyTimeText.innerHTML = dataObj[0][index].dailyTime[0];
        lastDailyTimeText.innerHTML = `Last Day - ${dataObj[0][index].dailyTime[1]}`;
    })
})
weeklyBtn.addEventListener('click', () => {
    weeklyBtn.classList.add('active');
    monthlyBtn.classList.remove('active');
    dailyBtn.classList.remove('active');
    cards.forEach((card, index) => {
        let weeklyTimeText = card.querySelector('.mid__info');
        let lastWeeklyTimeText = card.querySelector('.bottom__info');
        weeklyTimeText.innerHTML = dataObj[0][index].weeklyTime[0];
        lastWeeklyTimeText.innerHTML = `Last Week - ${dataObj[0][index].weeklyTime[1]}`;
    })
})
monthlyBtn.addEventListener('click', () => {
    weeklyBtn.classList.add('active');
    monthlyBtn.classList.add('active');
    dailyBtn.classList.remove('active');
    cards.forEach((card, index) => {
        let monthlyTimeText = card.querySelector('.mid__info');
        let lastMonthlyTimeText = card.querySelector('.bottom__info');
        monthlyTimeText.innerHTML = dataObj[0][index].monthlyTime[0];
        lastMonthlyTimeText.innerHTML = `Last Month - ${dataObj[0][index].monthlyTime[1]}`;
    })
})
