import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";

const Seller: React.FC = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);

  React.useEffect(() => {
    document.title = "Seller";
  }, []);

  return (
      <div>
        <h1>This is Seller Page!</h1>
      </div>
  );
};

export default Seller;
