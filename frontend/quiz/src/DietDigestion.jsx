import React, { useState } from 'react';

function DietDigestion({ nextStep, prevStep, handleDataUpdate }) {
  const [localData, setLocalData] = useState({
    digestion: '',
    dietaryRestrictions: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setLocalData({
        ...localData,
        [name]: checked
          ? [...localData[name], value]
          : localData[name].filter((item) => item !== value),
      });
    } else {
      setLocalData({ ...localData, [name]: value });
    }
  };

  const handleNext = () => {
    handleDataUpdate(localData);
    nextStep();
  };

  return (
    <div>
      <h2>🍲 Diet & Digestion</h2>

      <label>How is your digestion most of the time?</label><br />
      <select name="digestion" onChange={handleChange}>
        <option value="">Select</option>
        <option value="Strong and regular">Strong and regular</option>
        <option value="Slow and heavy">Slow and heavy</option>
        <option value="Irregular or sensitive">Irregular or sensitive</option>
        <option value="Bloating or acidic">Frequently bloated or acidic</option>
      </select><br />

      <label>Dietary preferences/restrictions (Select all that apply):</label><br />
      <label><input type="checkbox" name="dietaryRestrictions" value="Vegetarian" onChange={handleChange} /> Vegetarian</label><br />
      <label><input type="checkbox" name="dietaryRestrictions" value="Vegan" onChange={handleChange} /> Vegan</label><br />
      <label><input type="checkbox" name="dietaryRestrictions" value="Gluten-free" onChange={handleChange} /> Gluten-free</label><br />
      <label><input type="checkbox" name="dietaryRestrictions" value="Lactose intolerant" onChange={handleChange} /> Lactose intolerant</label><br />
      <label><input type="checkbox" name="dietaryRestrictions" value="No restriction" onChange={handleChange} /> No specific restrictions</label><br />

      <button onClick={prevStep}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default DietDigestion;
