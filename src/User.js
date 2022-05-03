import React, { useState } from "react";

const User = ({ data }) => {
  const { userDetails } = data;
  const [showUser, setShowUser] = useState(false);
  const storeChange = (event) => {
    setShowUser(!showUser);
   
  };
  return (
    <>
      <div>
        <div className="info-check">
          <input
            type="checkbox"
            onChange={storeChange}
            className="checkboxUser"
            checked={showUser}
          />
          <label className="checkbox-label">Show Info</label>
        </div>
        
          { 
            showUser &&
            userDetails.map((userDetail) => {
            return <li key={userDetail.id}>{userDetail.name}{userDetail.age}</li>
            })
          }
        
      </div>
    </>
  )
}

export default User;