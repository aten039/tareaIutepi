
const dbAside = [
    {
        titulo: 'Calidad',
        descripcion: 'Elegir la ropa adecuada para tus aventuras al aire libre es fundamental para disfrutar de una experiencia cómoda y segura. La calidad de las prendas de senderismo no es solo un capricho, sino una inversión en tu bienestar y en la durabilidad de tu equipamiento.',
        tipo: 'calidad'
    },
    {
        titulo: 'Servicio',
        descripcion: 'Te ofrecemos una atención personalizada para ayudarte a encontrar la ropa y el equipo que mejor se adapten a tus necesidades.Nuestro equipo cuenta con amplia experiencia en el mundo del senderismo y te brindará asesoramiento profesional sobre los productos más adecuados para cada actividad.',
        tipo: 'servicio'
    },
    {
        titulo: 'Estilo',
        descripcion: 'Three Sport es tu destino para la moda. Descubre una amplia variedad de prendas que reflejan tu estilo de vida.',
        tipo: 'estilo'
    },
    {
        titulo: 'Productos',
        descripcion: 'Descubre la aventura en cada prenda. Nuestra tienda te ofrece ropa técnica y funcional diseñada para tus escapadas al aire libre.',
        tipo: 'productos'
    }
]


window.addEventListener('DOMContentLoaded', function(){

    funcionamientoAside();
});

function funcionamientoAside (){
    let option = document.querySelectorAll('.optionAside');
    if(option){
        option.forEach((op)=>{
            op.addEventListener('click', function(e){
                generarContenido(e.target.id, option);
            })
        })
    }
}

function generarContenido(state, option){
    if(state !== ''){
        option.forEach((op)=>{
            if(op.id === state){
                op.classList.add('slideActive');
            }else{
                op.classList.remove('slideActive');
            }
        })

        let contenido = document.querySelector('.contenido-aside');

        let aside = dbAside.filter((aside)=> aside.tipo === state)[0];
       
        contenido.innerHTML = `<h3 class="titulo-aside">${aside.titulo}</h3>
                                <p>${aside.descripcion}</p>
                                `;
    }
}