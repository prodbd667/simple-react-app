import * as React from "react";
import Div from "../../libraries/styledComponents/divWrapper/divWrapper";
import styles from "./SomeComponent.scss";

const SomeComponent = () => (
  <div className={styles.someClass}>
    <div>SomeComponent</div>
    <div>
      <Div>some text</Div>
    </div>
  </div>
);

export default SomeComponent;
