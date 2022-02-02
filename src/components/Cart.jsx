import OneMOvie from "./OneMovie";

const Cart = ({ movies }) => {
  return (
    <div className="cart-container">
      <h3>This is your cart.</h3>
      {movies.map((mov) => (
        <OneProduct movie={mov} key={mov.id} inCart={0} />
      ))}
    </div>
  );
};

export default Cart;
