const ButtonComponent = ({ label, handleClick }) => {
  return (
    <button className="button" onClick={() => handleClick(label)}>
      {label}
    </button>
  );
};

export default ButtonComponent;
