const Details = ({ userData, setUserData }) => {
  return (
    <div>
      {userData.map((crr, idx) => {
        return <li key={idx}>{crr}</li>;
      })}
    </div>
  );
};

export default Details;
