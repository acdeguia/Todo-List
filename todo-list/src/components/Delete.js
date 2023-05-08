import React, { useState } from 'react';

function Delete() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  function handleDelete() {
    // Perform delete action here

    // After deletion, you can reset the showConfirmation state
    setShowConfirmation(false);
  }

  return (
    <div>
      <button onClick={() => setShowConfirmation(true)}>Delete</button>

      {showConfirmation && (
        <div>
          <p>Are you sure you want to delete?</p>
          <button onClick={handleDelete}>Yes</button>
          <button onClick={() => setShowConfirmation(false)}>No</button>
        </div>
      )}

      {/* Rest of your component code... */}
    </div>
  );
}

export default Delete