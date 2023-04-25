export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make asynch call
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: "ADD_PROJECT",
          project,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_PROJECT_ERROR",
          err,
        });
      });
  };
};

export const toggleProjectStatus = (project, projectId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .doc(projectId)
      .set(
        {
          ...project,
          status: !project.status,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({
          type: "TOGGLE_PROJECT_STATUS",
          projectId,
        });
      })
      .catch((err) => {
        dispatch({
          type: "TOGGLE_PROJECT_STATUS_ERROR",
          err,
        });
      });
  };
};

export const toggleProjectAStatus = (project, projectId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .doc(projectId)
      .set(
        {
          ...project,
          projectA: !project.projectA,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({
          type: "TOGGLE_PROJECT_A_STATUS",
          projectId,
        });
      })
      .catch((err) => {
        dispatch({
          type: "TOGGLE_PROJECT_A_STATUS_ERROR",
          err,
        });
      });
  };
};

export const addRemark = (remark, projectId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    if (projectId) { // check if projectId is defined
      firestore
        .collection("projects")
        .doc(projectId)
        .collection("remarks")
        .add({
          ...remark,
          authorFirstName: profile.firstName,
          authorLastName: profile.lastName,
          authorId: authorId,
          createdAt: new Date()
        })
        .then(() => {
          dispatch({ type: "ADD_REMARK_SUCCESS" });
        })
        .catch(err => {
          dispatch({ type: "ADD_REMARK_ERROR" }, err);
        });
    } else {
      console.error("Project ID is undefined");
    }
  };
};


// export const deleteRemark = remark => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();

//     firestore
//       .collection("projects")
//       .doc(remark.projectId)
//       .collection("remarks")
//       .doc(remark.id)
//       .delete()
//       .then(() => {
//         dispatch({
//           type: "REMOVE_REMARK"
//         });
//       })
//       .catch(err => {
//         dispatch({
//           type: "REMOVE_REMARK_ERROR",
//           err
//         });
//       });
//   };
// };

export const deleteProject = (projectId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .doc(projectId)
      .delete()
      .then(() => {
        dispatch({
          type: "REMOVE_PROJECT",
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVE_PROJECT_ERROR",
          err,
        });
      });
  };
};
