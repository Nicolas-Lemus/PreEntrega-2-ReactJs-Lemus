import './Card.css';
import { Link } from 'react-router-dom';


const Card = ({tecnologia}) => {
  
  return (
    <div className="divPadre">
      <div className='Cards'>
        <div className='Card'>
            <div className='Title'>{tecnologia.title}</div>
            <div className='Images'>
              <Link to={`/products/${tecnologia.id}`}><img src={tecnologia.images} alt="productos-disponibles"/></Link>
            </div>
            <div className='Previous'>{tecnologia.previous_price}</div>
            <div className='Price'>${tecnologia.price}</div>
            <div className='Stock'>{tecnologia.stock}</div>
            <button className='Boton-Agregar'>Agregar al Carrito</button>
          </div>
        </div>
    </div>
    
  );
    }

export default Card
