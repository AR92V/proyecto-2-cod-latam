const menuItems = document.querySelectorAll('.menu-Item');

/* con esto busco todos los li que tienen menu-Item*/

menuItems.forEach(function(item){
    item.addEventListener('click', function(e){
        const activeItem = document.querySelector('.active');
        activeItem.classList.remove('active');
        e.target.classList.add('active');
    });
});

/* boton cambiar fondo*/


const dark = document.querySelector('#dark-mode');

dark.addEventListener('click',function(){
    document.body.classList.toggle('dark-mode');
});




