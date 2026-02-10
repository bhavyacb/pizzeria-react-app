import react from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../styles/Cart.css';
import Counter from '../components/Counter';


function Cart({image, name, price}) {
  const [showCounter, setShowCounter] = useState(false);


  function OnAddButtonClick() {
    setShowCounter(true);
  }

  function HandleSetShowCounter() {
    setShowCounter(false);
  }

  return (
    <div className="Counter">
          <div style={{ backgroundImage: `url(${image})` }}> </div>
          <h1> {name} </h1>
          <p> $ {price} </p>  
          {
            showCounter ? <Counter showCountCallback={HandleSetShowCounter}/> : <button onClick = {OnAddButtonClick}>Add</button>
          }   
    </div>
  );
}

export default Cart;