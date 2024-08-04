const db = [
    {
        nombre: 'Zapatos Sendero',
        categoria: 'zapatos',
        precio: 40,
        img:'01.jpg'
    },
    {
        nombre: 'Zapatos Sendero BR',
        categoria: 'zapatos',
        precio: 45,
        img:'02.jpg'
    },
  
    {
        nombre: 'Zapatos Sendero AZ',
        categoria: 'zapatos',
        precio: 45,
        img:'03.jpg'
    },
  
    {
        nombre: 'Zapatos BT',
        categoria: 'zapatos',
        precio: 60,
        img:'04.jpg'
    },
  
    {
        nombre: 'Zapatos BTBlu',
        categoria: 'zapatos',
        precio: 65,
        img:'05.jpg'
    },
    {
        nombre: 'Zapatos BTOran',
        categoria: 'zapatos',
        precio: 65,
        img:'06.jpg'
    },
    {
        nombre: 'Botas Br',
        categoria: 'botas',
        precio: 90,
        img:'07.jpg'
    },
    {
        nombre: 'Botas BrT',
        categoria: 'botas',
        precio: 150,
        img:'08.jpg'
    },
    {
        nombre: 'Botas Brcla',
        categoria: 'Botas',
        precio: 130,
        img:'09.jpg'
    },
    {
        nombre: 'Botas DBr',
        categoria: 'Botas',
        precio: 140,
        img:'10.jpg'
    },
    {
        nombre: 'Botas Shot',
        categoria: 'Botas',
        precio: 130,
        img:'11.jpg'
    },
    {
        nombre: 'Botas AzT',
        categoria: 'Botas',
        precio: 100,
        img:'12.jpg'
    },
    {
        nombre: 'Botas Am',
        categoria: 'Botas',
        precio: 129,
        img:'13.jpg'
    },
    {
        nombre: 'Botas Rs',
        categoria: 'Botas',
        precio: 135,
        img:'14.jpg'
    },
    {
        nombre: 'Botas AlBr',
        categoria: 'Botas',
        precio: 165,
        img:'15.jpg'
    },
    {
        nombre: 'Pant D',
        categoria: 'pantalon',
        precio: 25,
        img:'16.jpg'
    },
    {
        nombre: 'Pant Bl',
        categoria: 'pantalon',
        precio: 30,
        img:'17.jpg'
    },
    {
        nombre: 'Pant Es',
        categoria: 'pantalon',
        precio: 20,
        img:'18.jpg'
    },
    {
        nombre: 'Pant T',
        categoria: 'pantalon',
        precio: 35,
        img:'19.jpg'
    },
    {
        nombre: 'Pant Sb',
        categoria: 'pantalon',
        precio: 165,
        img:'20.jpg'
    },
    {
        nombre: 'Chaqueta Tactica',
        categoria: 'chaqueta',
        precio: 65,
        img:'21.jpg'
    },
    {
        nombre: 'Chaqueta Tactica',
        categoria: 'chaqueta',
        precio: 50,
        img:'22.jpg'
    }
  
]
window.addEventListener('DOMContentLoaded', function(){
    generarProductos();

});


function generarProductos (){
    
    let contenedor = document.querySelector('#contenedor-productos');
    if(contenedor){
        for (let value of db){
            let template = `<div class="producto">
                        <img src="./img/${value.img}"/>
                        <div class="informacion">
                            <div>
                                <p>Nombre <br><span>${value.nombre}</span></p>
                                <p>Categoria <br><span>${value.categoria}</p>
                            </div>
                            <div>
                                <p>Precio: <span>${value.precio}$</p>
                                <a href="productos.html">Comprar</a>
                            </div>
                        </div>
                    </div>`
            contenedor.innerHTML+=template
        }
    }
}