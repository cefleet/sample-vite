import { useState, memo } from "react";
import Input from "./input";
function Extra({ saveData, ...data }) {
  const [localData, setLocalData] = useState(data);

  function submitForm(evt) {
    evt.preventDefault();
    console.log(localData);
    saveData(localData);
  }

  function updateData({ target: { name, value } }) {
    setLocalData({ ...localData, [name]: value });
  }

  return (
    <form onSubmit={submitForm}>
      <Input
        label="Extra"
        value={localData.extra}
        name="extra"
        onChange={updateData}
      />
      <button type="submit">Save Extras</button>
    </form>
  );
};

export default memo(Extra);
