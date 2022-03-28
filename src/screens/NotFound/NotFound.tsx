import React, { ReactElement } from "react";

const NotFound = (): ReactElement => (
    <div className="page-content color-white flex column">
        <h1>Page not found !!</h1>
        <a href="/">Redirect to home page</a>
    </div>
);
export default NotFound;
