import React from "react";
import "../../index.css";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";
import Status from "../common/Status";
import ProjectAStatus from "../common/ProjectAStatus";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { useState } from "react";
import { useEffect } from "react";

const ProjectSummary = ({ project, uid, auth, users }) => {


  const [formData, setFormData] = useState([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const user = users?.find((u) => u.id === auth?.uid);

  let admin = false;
  let superAdmin = false;

  if (user) {
    admin = user.admin;
    superAdmin = user.superAdmin;
  }
  if (superAdmin) {
    return (
      <div>
        {project.status===true ? (
                    <>
                    <table className="custom-table-style">
          <thead>
            <tr>
              <th colSpan="2">{project.projectTitle}</th>
              <th>
                <p className="projectA projectASummary">
                  <span>Project A:</span>
                  
                  <ProjectAStatus projectA={project.projectA} />
                </p>
              </th>
              <th>
                <Status status={project.status} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4">
                <p className="left">{project.projectDesc}</p>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <div className="gret lighten-4 grey-text custom-font-caps">
                  <div>
                    {project.authorFirstName} {project.authorLastName}{" "}
                    {project.regNumber} {project.course}
                  </div>
                  <div>
                    project added on:{" "}
                    {moment(project.createdAt.toDate()).calendar()}
                  </div>
                </div>
              </td>
              <td>
                {/* <Link to={"/project/" + project.id}>
                  <i className="small material-icons custom-link">
                    arrow_forward
                  </i>
                </Link> */}
              </td>
            </tr>
          </tbody>
        </table>
                    </>
                  ):''}
        
      </div>
    );
  } else if (admin) {
    return (
      <div>
         {/* {project.status===true && project.status===false?  ( */}
                    <>
                     <table className="custom-table-style">
          <thead>
            <tr>
              <th colSpan="2">{project.projectTitle}</th>
              <th>
                <p className="projectA projectASummary">
                  <span>Project A:</span>
                  <ProjectAStatus projectA={project.projectA} />
                </p>
              </th>
              <th>
                <Status status={project.status} />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4">
                <p className="left">{project.projectDesc}</p>
              </td>
            </tr>
            <tr>
              <td colSpan="3">
                <div className="gret lighten-4 grey-text custom-font-caps">
                  <div>
                    {project.authorFirstName} {project.authorLastName}{" "}
                    {project.regNumber} {project.course}
                  </div>
                  <div>
                    project added on:{" "}
                    {moment(project.createdAt.toDate()).calendar()}
                  </div>
                </div>
              </td>
              <td>
                <Link to={"/project/" + project.id}>
                  <i className="small material-icons custom-link">
                    arrow_forward
                  </i>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
                    </>
         {/* ):''} */}

       
      </div>
    );
  } else {
    if (uid === project.authorId) {
      return (
        <div>
          <table className="custom-table-style">
            <thead>
              <tr>
                <th colSpan="2">{project.projectTitle}</th>
                <th>
                  <p className="projectA projectASummary">
                    <span>Project A:</span>
                    <ProjectAStatus projectA={project.projectA} />
                  </p>
                </th>
                <th>
                  <Status status={project.status} />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="4">
                  <p className="left">{project.projectDesc}</p>
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <div className="gret lighten-4 grey-text custom-font-caps">
                    <div>
                      {project.authorFirstName} {project.authorLastName}{" "}
                      {project.regNumber} {project.course}
                    </div>

                    {/* <div> */}
      {/* {formData?.map((form, index) => (
        <div key={index}>
          <p>Comment: {form.comment}</p>
          <p>Meet Link: {form.meet}</p>
          <p>Meeting Time: {form.time}</p>
        </div>
      ))}
    </div> */}

                    <div>
                      project added on:{" "}
                      {moment(project.createdAt.toDate()).calendar()}
                    </div>
                    <p style={{color:'magenta'}}>Response: <span style={{color:'black'}}>{formData.comment}</span> </p>
                    <p style={{color:'magenta'}} >Meeting: <span style={{color:'black'}}>{formData.meet}</span> </p>
                    <p style={{color:'magenta'}}>Time <span style={{color:'black'}}>{formData.time}</span> </p>
                  </div>
                </td>
                <td>
                  <Link to={"/project/" + project.id}>
                    <i className="small material-icons custom-link">
                      arrow_forward
                    </i>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    } else return null;
  }
};

const mapStateToProps = (state) => {
  return {
    users: state.firestore.ordered.users,
    auth: state.firebase.auth,
    uid: state.firebase.auth.uid,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "users",
    },
  ])
)(ProjectSummary);
