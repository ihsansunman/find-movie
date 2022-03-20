import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="d-flex justify-content-center">
        <a href="https://www.themoviedb.org/">
          <img
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
            alt="DB_LOGO"
            width="250px"
          />
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <p>
          Design and Coding by{" "}
          <a href="https://ihsansunman.asnus.com">ihsansunman</a>
        </p>
      </div>
    </div>
  );
}
