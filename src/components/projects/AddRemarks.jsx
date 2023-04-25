import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const stateValues = {
  comment: "",
  meet:'',
  time:'',
};

const AddRemarks = () => {
  const [form, setForm] = useState(stateValues);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(form));
  }, [form]);

    const onSubmit = () => {
      setForm("");
    };
  const handleSubmit = ((e) => {
    // e.preventDefault();

    toast('remarks sent')
    // handle form submission here

    
  })

  return (
    <React.Fragment>
      <table className="white">
        <tbody>
          <tr>
            <td colSpan="2">
              <form id="add-remark-form" onSubmit={handleSubmit}>
                <div className="input-field">
                  <label htmlFor="comment">Enter Remarks</label>
                  <input
                    type="text"
                    id="comment"
                    value={form.comment}
                    onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="comment">Enter the google Meet Link</label>
                  <input
                    type="text"
                    id="meet"
                    value={form.meet}
                    onChange={(e) => setForm({ ...form, meet: e.target.value })}
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="comment"> Meeting time </label>
                  <input
                    type="date"
                    id="time"
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                  />
                </div>
              </form>
            </td>
            <td>
              <button
                className="btn cyan darken-2 z-depth-0"
                onClick={handleSubmit}
              >
                <i className="material-icons">send</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    
    </React.Fragment>
  )
}

export default AddRemarks;
