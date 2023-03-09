

const d = document;

d.addEventListener("DOMContentLoaded", () =>{
    guardarProducto("createProductoForm");
    

})

function guardarProducto(formularioProducto){
    const $formCrearProducto=d.getElementById(formularioProducto);
    console.log($formCrearProducto)
    $formCrearProducto.addEventListener("submit", (e) => {
        e.preventDefault();
    console.log(e)
     alert('hola producto')
    
})
}