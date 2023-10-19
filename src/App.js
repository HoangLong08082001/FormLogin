import React from "react";
import style from "./App.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(style);

function App() {
  return (
    <div className={cx("App")}>
      <p>SIGN IN</p>
      <div className={cx("form-input")}>
        <input type="text" placeholder="username" />
      </div>
      <div className={cx("form-input")}>
        <input type="password" placeholder="password" />
      </div>
      <button>SIGN IN</button>
    </div>
  );
}

export default App;
