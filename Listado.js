var productosArray= [
  {
    id: 132,
    titulo: 'ensalada caesar',
    descripcion: 'ensalada completa',
    imagen: 'http://lorempixel.com/200/200/food/1',
    precio: 50,
    oferta: false
  },
  {
    id: 232,
    titulo: 'churrasquito',
    descripcion: 'churrasco trozado',
    imagen: 'http://lorempixel.com/200/200/food/2',
    precio: 70,
    oferta: false
  },
  {
    id: 344,
    titulo: 'pizza',
    descripcion: 'cortada en fajitas',
    imagen: 'http://lorempixel.com/200/200/food/3',
    precio: 60,
    oferta: false
  },
  {
    id: 455,
    titulo: 'medallones',
    descripcion: 'medallones de merluza con guarnición',
    imagen: 'http://lorempixel.com/200/200/food/4',
    precio: 60,
    oferta: false
  },
  {
    id: 566,
    titulo: 'ensalada vegetal',
    descripcion: 'solo vegetales',
    imagen: 'http://lorempixel.com/200/200/food/5',
    precio: 55,
    oferta: true
  },
  {
    id: 63,
    titulo: 'vegetales grillados',
    descripcion: 'berenjena y vegetales grillados',
    imagen: 'http://lorempixel.com/200/200/food/6',
    precio: 60,
    oferta: true
  }
];
    //primero selecciono del DOM y guardo
    
    $carrito= $('.cart');
    $botonCarrito = $('.cart__button',$carrito);
    total = 0;
    cantidad = 0;
    var templateProducto = $('#catalog__item__template').html();
    var templateCarritoItem = $('#cart__item__template').html();
    var $listado = $('.catalog');
    $('.cart__total',$carrito).html(total);
    $('.cart__list',$carrito).html(cantidad);
    $('.borrar',$carrito).click(borrad);

    iterarProductos(productosArray);
    //luego eventos productosArray
    $botonCarrito.click(mostrarOcultarCarrito);
    
 function borrad (){
  total = 0;
  cantidad = 0;
  $('.cart__total',$carrito).html(total);
    $('.cart__list',$carrito).html(cantidad);
 }
 function mostrarOcultarCarrito(){
  $carrito.toggleClass('cart--hidden');
  console.log("hola");
 }
 
 function iterarProductos(todos){
  for (i=0; i<todos.length; i++){
    dibujarProducto(todos[i]);
  }
 }
 function dibujarProducto(producto){
    var $productoDom= $(templateProducto);
    $('.title', $productoDom).text(producto.titulo);
    $('.description', $productoDom).text(producto.descripcion);
    var $img = $('img', $productoDom).attr("src", producto.imagen);
    $('.price span', $productoDom).text(producto.precio);
   $('.agregarrr', $productoDom).text('agregar');
   $('.agregarrr', $productoDom).click(verdatos);

    function verdatos(){
       numero=  parseInt(producto.precio);
       total =  total + numero;
       cantidad = cantidad + 1;
       $('.cart__total',$carrito).html(total);
       $('.cart__list',$carrito).html(cantidad);

       $carrito.removeClass('cart--hidden');
    }
   $productoDom.hide();
    $listado.append($productoDom);
    $img.on('load', function imgLoaded(){
      $productoDom.fadeIn(1500);
    });
   
    
 }
  
    
 