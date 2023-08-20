import { CarritoContext } from '../../context/user/userContext'

const [, dispatch] = useContext(CarritoContext)
 
const initialCarrito = []

let [carrito, setCarrito] = useState(initialCarrito)


function agregarItemCarrito(categoria,producto,cantidad,precio,ancho,alto) {
    if (carrito===null) carrito=[]
    const itemCarrito ={ 
        categoria: categoria,
        producto: producto,
        cantidad: cantidad,
        precio: precio, 
        ancho: ancho,
        alto: alto, }
        setCarrito(carrito.push(itemCarrito))
        grabarStorage()
}

function modificarItemCarrito(idx, cantidad){ 
    carrito[idx].cantidad=cantidad;
    setCarrito(carrito);
    grabarStorage()
}

function leerStorage()
{   
    const carritoJ = localStorage.getItem('carrito');
    setCarrito(JSON.parse(carritoJ) )     
}

function grabarStorage()
{
     const carritoJ = JSON.stringify(carrito);
     localStorage.setItem('carrito', carritoJ);
}


function listarCarrito() {  
    titulos()
    carrito.forEach((v,idx)=>formListar(v,idx))
    botonAgregar()
}



function eliminarItemCarrito(idx){
    carrito.splice(idx,1)
    grabarStorage()
}

function ingresarItemCarrito(){  

    if (validar(producto.value,cantidad.value,precio.value,ancho.value,alto.value)) 
    {  agregaritemCarrito(producto.value, cantidad.value,  precio.value,ancho.value,alto.value);
       grabarStorage()
   }
} 

