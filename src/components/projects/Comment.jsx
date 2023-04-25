import React, { Component } from "react";
import { addRemark } from "../../store/actions/projectActions";
import { connect } from "react-redux";

class AddRemarks extends Component {
  state = {
    comment: "",
    meet:'',
    time:'',
    projectId: this.props.projectId
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleAddRemark = projectId => {
    this.props.addRemark(this.state, projectId);
    document.getElementById("add-remark-form").reset();
  };

  render() {
    const { projectId } = this.props;
    return (
      <React.Fragment>
        <table className="white">
          <tbody>
            <tr>
              <td colSpan="2">
                <form id="add-remark-form">
                  <div className="input-field">
                    <label htmlFor="comment">Enter Remarks</label>
                    <input
                      type="text"
                      id="comment"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="comment">Enter the google Meet Link</label>
                    <input
                      type="text"
                      id="meet"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="comment"> Meeting time </label>
                    <input
                      type="date"
                      id="time"
                      onChange={this.handleChange}
                    />
                  </div>
                </form>
              </td>
              <td>
                <button
                  onClick={() => this.handleAddRemark(projectId)}
                  className="btn cyan darken-2 z-depth-0"
                >
                  <i className="material-icons">send</i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addRemark: (remark, projectId) => dispatch(addRemark(remark, projectId))
  };
};

export default connect(null, mapDispatchToProps)(AddRemarks);
