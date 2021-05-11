import {connect} from "react-redux";
import Names from "../components/Names";

const mapStateToProps = (state) => ({
    firstName: state.currentNameReducer.firstName,
    lastName: state.currentNameReducer.lastName
})
export default connect(mapStateToProps,null)(Names)
