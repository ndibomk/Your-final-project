import React from "react";
import ShowMembers from "./ShowMembers";
import { connect } from "react-redux";
import { createMeet, createProject } from "../../../store/actions/Meet";
import { useState } from "react";


export const ShowAllocation = ({ allocations, auth,history  }) => {
  let allocation =
    allocations &&
    allocations.find(
      (allocation) =>
        allocation.members &&
        allocation.members.some((member) => member.id === auth.uid)
    );
    
    const [state, setState] = useState({
      link: '',
      aallocations: allocations && allocations.find(
        allocation => allocation.members && allocation.members.some(
          member => member.id === auth.uid
        )
      )
    });
    console.log('hii',state);
    const handleChange = e => {
      setState({
        ...state,
        [e.target.id]: e.target.value
      });
    };
    
    const handleSubmit = e => {
      e.preventDefault();
      createMeet(state);
     
    };

  return (
    <div className= "show-allocation">
      {allocation ? <div>
      <h4>{allocation && allocation.allocationName}</h4>
      <h5>{allocation && allocation.members?.length + " Members"}</h5>
      <div>
        {allocation &&
          allocation.members?.map((member) => (
            <ShowMembers member={member} key={member.id} />
            

          ))}
          
      </div>
      

      </div> : <p style = {{textAlign: "center"}}>Not allocated yet...</p>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createMeet: project => dispatch(createMeet(project))
  };
};

export default  connect(mapStateToProps, mapDispatchToProps)(ShowAllocation);


