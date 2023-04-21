export default function Input({ name, id, label, onChange, value }) {
  return (
    <div style={{padding:'10px'}}>
      <label style={{paddingRight:'10px'}} htmlFor="extra">{label}</label>
      <input
        value={value || ""}
        id={id || name}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}
