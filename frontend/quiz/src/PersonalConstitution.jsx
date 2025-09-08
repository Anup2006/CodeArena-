import React, { useState } from 'react';

function PersonalConstitution({ nextStep, handleDataUpdate }) {
  const [localData, setLocalData] = useState({
    bodyType: [],
    energyLevels: '',
    concerns: [],
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
      <h2>🧬 Personal Constitution & Health</h2>

      <label>Body Type (Select all that apply):</label><br />
      <label><input type="checkbox" name="bodyType" value="Vata" onChange={handleChange} /> Thin, quick-moving, often cold (Vata)</label><br />
      <label><input type="checkbox" name="bodyType" value="Pitta" onChange={handleChange} /> Medium build, strong digestion, gets irritated easily (Pitta)</label><br />
      <label><input type="checkbox" name="bodyType" value="Kapha" onChange={handleChange} /> Solid build, calm, slow metabolism (Kapha)</label><br />

      <label>Current Energy Levels:</label><br />
      <select name="energyLevels" onChange={handleChange}>
        <option value="">Select</option>
        <option value="High and steady">High and steady</option>
        <option value="Energetic in bursts">Energetic in bursts, then fatigued</option>
        <option value="Low and sluggish">Low and sluggish</option>
        <option value="Unpredictable">It fluctuates unpredictably</option>
      </select><br />

      <label>Most Common Physical/Emotional Concerns (Select up to 3):</label><br />
      <label><input type="checkbox" name="concerns" value="Digestive issues" onChange={handleChange} /> Digestive issues</label><br />
      <label><input type="checkbox" name="concerns" value="Poor sleep" onChange={handleChange} /> Poor sleep or insomnia</label><br />
      <label><input type="checkbox" name="concerns" value="Stress" onChange={handleChange} /> Stress, anxiety, irritability</label><br />
      <label><input type="checkbox" name="concerns" value="Weight management" onChange={handleChange} /> Weight management</label><br />
      <label><input type="checkbox" name="concerns" value="Skin issues" onChange={handleChange} /> Skin issues</label><br />
      <label><input type="checkbox" name="concerns" value="Frequent colds" onChange={handleChange} /> Frequent colds or congestion</label><br />

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default PersonalConstitution;
