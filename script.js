function drops() {
    function close(type, btn, flagObj) {

        document.addEventListener('click', (event) => {
            if (!type.contains(event.target) && !btn.contains(event.target)) {
                type.style.display = 'none';
                flagObj.value = true;
            }
        });
    }

    const home_btn = document.querySelector('#home_btn')
    let home_flag = { value: true };

    home_btn.addEventListener('click', () => {
        const home_dropdown = document.querySelector('.home_dropdown')
        if (home_flag.value) {
            home_dropdown.style.display = 'block';
            home_dropdown.style.top = '94px'
            home_flag.value = false;
            console.log("hello")
        } else {
            home_dropdown.style.display = 'none';
            home_flag.value = true;
        }
        close(home_dropdown, home_btn, home_flag)
    })

    const grid_btn = document.querySelector('#grid_btn')
    let grid_flag = { value: true };

    grid_btn.addEventListener('click', () => {
        const grid_dropdown = document.querySelector('.grid_dropdown')
        if (grid_flag.value) {
            grid_dropdown.style.display = 'block';
            grid_dropdown.style.top = '147px';
            grid_flag.value = false;
        } else {
            grid_dropdown.style.display = 'none';
            grid_flag.value = true;
        }
        close(grid_dropdown, grid_btn, grid_flag)

    })


    const star_btn = document.querySelector('#star_btn')
    let star_flag = { value: true };

    star_btn.addEventListener('click', () => {
        const star_dropdown = document.querySelector('.star_dropdown')
        if (star_flag.value) {
            star_dropdown.style.display = 'block';
            star_dropdown.style.top = '200px';
            star_dropdown.style.overflowY = 'auto'
            star_dropdown.style.maxHeight = '300px'
            star_flag.value = false;
        } else {
            star_dropdown.style.display = 'none';
            star_flag.value = true;
        }
        close(star_dropdown, star_btn, star_flag)

    })

    const superman_btn = document.querySelector('#superman_btn')
    let superman_flag = { value: true };

    superman_btn.addEventListener('click', () => {
        const superman_dropdown = document.querySelector('.superman_dropdown')
        if (superman_flag.value) {
            superman_dropdown.style.display = 'block';
            superman_dropdown.style.top = '253px';
            superman_flag.value = false;
        } else {
            superman_dropdown.style.display = 'none';
            superman_flag.value = true;
        }
        close(superman_dropdown, superman_btn, superman_flag)

    })

    const compass_btn = document.querySelector('#compass_btn')
    let compass_flag = { value: true };

    compass_btn.addEventListener('click', () => {
        const compass_dropdown = document.querySelector('.compass_dropdown')
        if (compass_flag.value) {
            compass_dropdown.style.display = 'block';
            compass_dropdown.style.top = '306px';
            compass_flag.value = false;
        } else {
            compass_dropdown.style.display = 'none';
            compass_flag.value = true;
        }
        close(compass_dropdown, compass_btn, compass_flag)

    })

    const purse_btn = document.querySelector('#purse_btn')
    let purse_flag = { value: true };

    purse_btn.addEventListener('click', () => {
        const purse_dropdown = document.querySelector('.purse_dropdown')
        if (purse_flag.value) {
            purse_dropdown.style.display = 'block';
            purse_dropdown.style.top = '410px';
            purse_flag.value = false;
        } else {
            purse_dropdown.style.display = 'none';
            purse_flag.value = true;
        }
        close(purse_dropdown, purse_btn, purse_flag)

    })

    const bot_btn = document.querySelector('#bot_btn')
    let bot_flag = { value: true };

    bot_btn.addEventListener('click', () => {
        const bot_dropdown = document.querySelector('.bot_dropdown')
        if (bot_flag.value) {
            bot_dropdown.style.display = 'block';
            bot_dropdown.style.top = '464px';
            bot_flag.value = false;
        } else {
            bot_dropdown.style.display = 'none';
            bot_flag.value = true;
        }
        close(bot_dropdown, bot_btn, bot_flag)

    })


    const menu_btn = document.querySelector('#menu_btn')
    let menu_flag = { value: true };

    menu_btn.addEventListener('click', () => {
        const menu_dropdown = document.querySelector('.menu_dropdown')
        if (menu_flag.value) {
            menu_dropdown.style.display = 'block';
            menu_dropdown.style.top = '518px';

            menu_flag.value = false;
        } else {
            menu_dropdown.style.display = 'none';
            menu_flag.value = true;
        }
        close(menu_dropdown, menu_btn, menu_flag)

    })


    const download_btn = document.querySelector('#download_btn')
    let download_flag = { value: true };

    download_btn.addEventListener('click', () => {
        const download_dropdown = document.querySelector('.download_dropdown')
        if (download_flag.value) {
            download_dropdown.style.display = 'block';
            download_dropdown.style.top = '570px';

            download_flag.value = false;
        } else {
            download_dropdown.style.display = 'none';
            download_flag.value = true;
        }
        close(download_dropdown, download_btn, download_flag)

    })


    const bag_btn = document.querySelector('#bag_btn')
    let bag_flag = { value: true };

    bag_btn.addEventListener('click', () => {
        const bag_dropdown = document.querySelector('.bag_dropdown')
        if (bag_flag.value) {
            bag_dropdown.style.display = 'block';
            bag_dropdown.style.top = '357px';
            bag_dropdown.style.overflowY = 'auto'
            bag_dropdown.style.maxHeight = '300px'
            bag_flag.value = false;
        } else {
            bag_dropdown.style.display = 'none';
            bag_flag.value = true;
        }
        close(bag_dropdown, bag_btn, bag_flag)
    })
}
drops()

// Initialize the chart variable
let currentChart;

// Chart data for each chart type
const chartData = {
    new: {
        label: 'New',
        data: [2, 6, 20, 9, 16, 9, 5],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
    },
    completed: {
        label: 'Completed Orders',
        data: [0, 4, 9, 20, 16, 12, 20],
        backgroundColor: 'rgba(197,202,233, 0.7)',
        borderColor: 'rgba(197,202,233, 1)',
    },
    refunded: {
        label: 'Refunded Orders',
        data: [0, 17, 7, 15, 4, 20, 8],
        backgroundColor: 'rgba(179,223,189, 0.7)',
        borderColor: 'rgba(179,223,189, 1)',
    },
    cancelled: {
        label: 'Cancelled Orders',
        data: [0, 0, 20, 4, 17, 16, 20],
        backgroundColor: 'rgba(178,235,242, 0.7)',
        borderColor: 'rgba(178,235,242, 1)',
    },
};

// Function to create a new chart
function createChart(type) {
    const chartCanvas = document.getElementById('chart_canvas');

    if (currentChart) {
        currentChart.destroy();
    }

    currentChart = new Chart(chartCanvas, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: chartData[type].label,
                data: chartData[type].data,
                backgroundColor: chartData[type].backgroundColor,
                borderColor: chartData[type].borderColor,
                borderWidth: 2,
                fill: true,
                pointBackgroundColor: chartData[type].borderColor,
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: chartData[type].borderColor,
                tension: 0.4,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 2
                    }
                }
            }
        }
    });
}

document.getElementById('new').addEventListener('click', () => createChart('new'));
document.getElementById('completed').addEventListener('click', () => createChart('completed'));
document.getElementById('refunded').addEventListener('click', () => createChart('refunded'));
document.getElementById('cancelled').addEventListener('click', () => createChart('cancelled'));

createChart('new');


const prev_btn = document.querySelector('#prev_btn')
const next_btn = document.querySelector('#next_btn')

function salesTable() {
    const table = document.querySelector('.sale_table')
    const table2 = document.querySelector('.sale_table2')
    table2.style.display = 'none'
    const two = document.querySelector('.two')
    const one = document.querySelector('.one')



    prev_btn.addEventListener('click', () => {
        table2.style.display = 'none'
        table.style.display = 'inline-table'
        one.classList.add('one_clicked')
        two.classList.remove('one_clicked')
        table.style.width = '100%'
    })

    next_btn.addEventListener('click', () => {
        table.style.display = 'none'
        table2.style.display = 'inline-table'
        two.classList.add('one_clicked')
        one.classList.remove('one_clicked')
        table2.style.width = '100%'


    })
}
salesTable()

const weekbtn = document.querySelector('#week_btn')

function weekBtn() {

    const week_dropdown = document.querySelector('.week_dropdown')
    let btn_flag = true;
    weekbtn.addEventListener('click', () => {
        week_dropdown.classList.toggle('hidden')
        if (btn_flag) {
            weekbtn.style.boxShadow = 'rgba(33, 150, 243, 1.1) 0px 0px 11px';
            weekbtn.style.outline = '1px solid #2196f3';
            week_dropdown.style.display = 'block'
            btn_flag = false;
        } else {
            weekbtn.style.boxShadow = 'none';
            weekbtn.style.outline = '1px solid grey';
            week_dropdown.style.display = 'none';
            btn_flag = true;
        }
        document.addEventListener('click', (event) => {
            if (!week_dropdown.contains(event.target) && !weekbtn.contains(event.target)) {
                week_dropdown.style.display = 'none';
                weekbtn.style.boxShadow = 'none';
                weekbtn.style.outline = '1px solid grey';
                btn_flag = true;
            }
        });
    })
}
weekBtn()

function weekDrop() {
    const this_week = document.querySelector('#this_week')
    const last_week = document.querySelector('#last_week')
    const selected = document.querySelector('.selected')
    const week_input = document.querySelector('.week_input')
    week_input.innerHTML = '';


    week_input.innerHTML = selected.innerHTML;

    this_week.addEventListener('click', () => {
        if (!this_week.classList.contains('selected')) {
            last_week.classList.remove('selected')
            this_week.classList.add('selected')
            week_input.innerHTML = 'This Week';

        }
    })
    last_week.addEventListener("click", () => {
        if (!last_week.classList.contains('selected')) {
            this_week.classList.remove('selected')
            last_week.classList.add('selected')
            week_input.innerHTML = 'Last Week';

        }
    })

}
weekDrop()


function pieChart() {
    const ctx = document.getElementById('revenueChart');
    const revenueChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Direct', 'Promoted', 'Affiliate'],
            datasets: [{
                label: 'Revenue Stream',
                data: [30, 30, 40],
                backgroundColor: [
                    '#64b5f6',  // Blue
                    '#7986cb',  // Purple
                    '#4db6ac'   // Teal
                ],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,

        }
    });
}
pieChart()

const menu_btn = document.querySelector('#menu')
const left_bar = document.querySelector('.left_bar')
const nav = document.querySelector('.nav')
const content_container = document.querySelector('content_container')

menu_btn.addEventListener('click', () => {
    if (left_bar.style.display === 'block') {
        left_bar.style.display = 'none';
    } else {
        left_bar.style.display = 'block';
    }

    document.addEventListener('click', (event) => {
        if (!menu_btn.contains(event.target) && !left_bar.contains(event.target)) {
            left_bar.style.display = 'none';
        }
    });

})



