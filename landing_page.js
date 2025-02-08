

const opcion_Desplazar = document.querySelector('.opcion_desplazar'); 
const opcion_desplaza_icono = document.querySelector('.opcion_desplazar i');
const menu_Responsive = document.querySelector('.menu_responsive'); 

// si se hace clic en la clase opcion_Desplazar 
opcion_Desplazar.onclick = function(){
    menu_Responsive.classList.toggle('abrir_menu')
}
