import { buyCake } from "../Redux";
import { connect } from "react-redux";
function CakeContainer(props) {
  return (
    <div>
      no of cakes - {props.numOfcakes}
      <br />
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { numOfcakes: state.numOfcakes };
};

const mapDisoatchToProps = (dispatch) => {
  buyCake: () => dispatch(buyCake());
};
export default connect(mapStateToProps, mapDisoatchToProps)(CakeContainer);
