
function setDate(){
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');

    const now = new Date();
    const second = now.getSeconds();
    const minute = now.getMinutes();
    const hour = now.getHours();

    var scDeg = second * 6;
    var mnDeg = minute * 6;
    var hrDeg = hour * 30;

    sc.style.transform = 'rotate(' + scDeg + 'deg)';
    mn.style.transform = 'rotate(' + mnDeg + 'deg)';
    hr.style.transform = 'rotate(' + hrDeg + 'deg)';

    setInterval(setDate, 1000);

}
    setDate();

    //digital clock 

function time(){
    const hr_ = document.getElementById('hr_');
    const mn_ = document.getElementById('mn_');
    const sc_ = document.getElementById('sc_');

   
    hr_.innerHTML = new Date().getHours();
    mn_.innerHTML = new Date().getMinutes();
    sc_.innerHTML = new Date().getSeconds();

  
    setInterval(time, 1000);
}

time(); 


