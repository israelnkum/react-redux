import {connect} from "react-redux";
import Buttons from "../components/Button";
import {setCurrentFirstName} from "../actions/Name/NameAction";

const mapDispatchToProps = (dispatch) => ({
    setCurrentFirstName: name => dispatch(setCurrentFirstName(name))
})
export default connect(null,null)(Buttons)
