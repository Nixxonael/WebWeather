$(document).ready(function(){
    
    $('#button').on('click', getWeather);
    
    
	/*var new_date = $("#dater").val();
	new_date = new.replace("-", "/").replace("-", "/");
	new_date = Date.parse(new_date);
    console.log(new_date)*/

function getWeather(){
    $.getJSON(
"https://api.openweathermap.org/data/2.5/weather",
        {"q": $("#cityName").val(), 
         "appid": "cedd0480d0d527defa17ec3aa0c1ac4b"
         
        },
        function(data){
            var forecast=''; 
                forecast+='Сейчас: ' + timeConvert(data.dt)+'<br>';
                forecast+='Температура: ' + Math.round(data.main.temp-273)+'&#176'+'<br>';
            var image ='';
                image+='<img src="https://openweathermap.org/img/w/'+data.weather[0].icon+'.png" id="image">'+'<br>';
                image+=data.weather[0].main;
            
            var forecast1='';        
                forecast1+='Ветер: ' + data.wind.speed +' м/с<br>'
                forecast1+='Влажность: ' + data.main.humidity+'%<br>';
                forecast1+='Видимость: ' + (data.visibility/1000) + ' км<br>';
                forecast1+='Давление: ' + Math.round(data.main.pressure*0.00750063755419211*100)+'мм рт. ст.';
                    $('#forecast').html(forecast);
                    $('#forecast1').html(forecast1);
                    $('#image').html(image);
                   
            
                    console.log(data.main);
                            
            //счетчик времени
            function timeConvert(){
                var a = new Date(data.dt * 1000);
                var months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
                var year = a.getFullYear();
                var month = months[a.getMonth()];
                var date = a.getDate();
                var hour = a.getHours();
                var minute = a.getMinutes();
            var time = hour + ':' + minute + '<br>' + date + '/' + month + '/' + year + '<br>';
                return time;}
            
        }  
        
        

    );
}
     });