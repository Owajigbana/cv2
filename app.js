/* jshint esversion:6 */

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  const data = google.visualization.arrayToDataTable([
    ['Skill', 'List of skills'],
    ['HTML, CSS, JAVASCRIPT', 20],
    ['COMMAND LINE, BOOTSTRAP, JQUERY, VERSION CONTROL/GIT',  6],
    ['ES6, INVISION(PROTOTYPING), ASYNC/JSON', 13]
  ]);

  const options = {
    title: '',
    colors: ['#f0dab1', '#f6edcf', '#daf1f9'],
    backgroundColor: '#a4d7e1',
  };

  const chart = new google.visualization.PieChart(document.querySelector('#piechart'));

  chart.draw(data, options);
}

const navIcon = document.querySelector('.nav');
const exit = document.querySelector('.exit');
const image = document.querySelector('img');
const num = document.querySelector('.num');
const projects = document.querySelector('.projects');
const head = document.querySelector('#head');
const content = document.querySelector('.content');
const para = document.querySelector('#para');
const main = document.querySelector('.main');

navIcon.addEventListener('click', e => {
  const navBar = document.querySelector('nav');
  const list = navBar.classList.add('main');
  e.target.list.style.display = 'block';
});

exit.addEventListener('click', e => {
  const navBar = document.querySelector('nav');
  const list = navBar.classList.remove('main');
});

const tl = new TimelineMax();
tl.fromTo(image,1, {height:'0%'}, {height:'92%'});

// page one
tl.fromTo(para,1,{x:'-150%'}, {x:'0%', ease : Power2.easeInOut });
tl.fromTo(num,1.2,{x:'-100%'}, {x:'0%', ease : Power2.easeInOut });
