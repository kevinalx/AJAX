//consumir servicio de forma asincronica


//ajax


//1.definir url del servicio
let url = 'https://api.spotify.com/v1/artists';

//2.definir un objeto de tipo ajax
let objetoAjax = new XMLHttpRequest();

//3.abrir la conexion  

//3.1 variable para almacenar el token
let token = 'Bearer BQB_vkrXsPwkAXs2FVwrz_nV9EdZrV7ollZQ-7rsaHFQUju_in12C3YQ4yjioWqJ3kW-fK5BGPwX4DB7sG5Ae0KY9NlMGI6ng9H-MlDRH09-FQaB0qd3faQEiVVLA5U7pIMkh8VnRM82bsMJLg';

// 3-2 hacemos el objeto ajax
objetoAjax.open('GET', url, true);

//3-3 crear un header en la peticion
objetoAjax.setRequestHeader('Authorization', token);

//4,cargar los datos
objetoAjax.onload = function(){
    
}