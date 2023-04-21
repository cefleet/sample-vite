import { useState, memo } from "react";
import Input from "./input";

function GeneralInfo({ updateReleaseState, ...data }) {
  const [localData, setLocalData] = useState(data);

  function submitForm(evt) {
    evt.preventDefault();
    console.log(localData);
    updateReleaseState(localData);
  }

  function updateData({ target: { name, value } }) {
    setLocalData({ ...localData, [name]: value });
  }

  return (
    <form onSubmit={submitForm}>
      <Input
        label="Name"
        name="name"
        onChange={updateData}
        value={localData.name}
      />
      <Input
        label="Version"
        name="version"
        onChange={updateData}
        value={localData.version}
      />
      <button type="submit">Save General Info</button>
    </form>
  );
}

export default memo(GeneralInfo);
