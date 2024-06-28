// Codigo de NotFound.js
import React from "react";
import backgroundImage from "../IMG/no.gif"; // Asegúrate de la ruta correcta a la imagen

const NotFound = () => (
  <div style={styles.container}>
    <h1 style={styles.message}>Esta página no fue encontrada :(</h1>
  </div>
);

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: `url(${"https://crehana-blog.s3.amazonaws.com/media/filer_public/24/d6/24d62ab5-7221-4851-a108-395daf877b7e/gif_not-internet.gif"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    textAlign: "center",
  },
  message: {
    fontSize: "2rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "1rem",
    borderRadius: "10px",
  },
};

export default NotFound;
