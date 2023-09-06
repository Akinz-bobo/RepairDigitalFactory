import { createPortal } from "react-dom";
import Styles from "./Loading.module.css";

const Loading = () => {
  return createPortal(
    <section className={`${Styles.LoadingContainer} flex flex-col gap-10`}>
      <h1 className="text-2xl font-bold text-txt-color font-TitrPlus">
        {" "}
        Loading, please wait...
      </h1>
      <div className={`${Styles["lds-roller"]}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>,
    document.getElementById("Loading")
  );
};

export default Loading;
