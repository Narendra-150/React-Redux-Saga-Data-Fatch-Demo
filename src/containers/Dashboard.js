import React from "react";
import { connect } from "react-redux";
import img from "../loading_spinner.gif";

let Dashboard = ({ data, getData, loading }) => (
  <div>
    <button onClick={getData}>Click to load data</button>
    {loading ? (
      <div style={{ textAlign: "center" }}>
        <img src={img} alt="loading" />
        <h1>LOADING</h1>
      </div>
    ) : null}

    {data
      ? data.map(({ Name, Mobile, Type, Company }) => {
          return (
            <table key={Name}>
              <tbody>
                <tr>
                  <td>{Name}</td>
                  <td>{Mobile}</td>
                  <td>{Type}</td>
                  <td>{Company}</td>
                </tr>
              </tbody>
            </table>
          );
        })
      : null}
  </div>
);

const mapStateToProps = state => ({
  data: state.data,
  loading: state.loading
});
const mapDispatchToProps = dispatch => {
  return {
    getData: () =>
      dispatch({
        type: "GET_DATA"
      })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
