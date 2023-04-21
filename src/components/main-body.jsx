export default function MainBody({children, title}) {
    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    );
};
