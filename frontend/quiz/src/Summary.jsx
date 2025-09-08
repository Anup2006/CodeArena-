import React from 'react';

function Summary({ formData, prevStep }) {
  return (
    <div>
      <h2>Summary of Your Responses</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <button onClick={prevStep}>Previous</button>
      <button onClick={() => alert('Form submitted!')}>Submit</button>
    </div>
  );
}

export default Summary;
