import "./login.css";

const Login = (props) => {
  const {

    usuario,
    contrasena,
    error,

    setUsuario,
    setContrasena,
    handleLogin,
  } = props;

  return (

    
    <main className="contenedorlogin" style={{backgroundImage: `url("https://cutewallpaper.org/21/baby-avengers-wallpapers/Avengers-Comic-Wallpapers-Wallpaper-Cave.jpg")`}}>
      {localStorage.getItem("login") ? (
        
        <section className="bienvenida">
          <h2>Bienvenido</h2>
          <h3>{usuario.toLocaleUpperCase()}</h3>
        </section>
      ) : (
        <form className="contenedorformulario">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Usuario
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Ingrese su Usuario"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={usuario}
              onChange={(e) => {
                setUsuario(e.target.value);
              }}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Contraseña
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Ingrese su Contraseña"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button onClick={handleLogin} className="btn btn-outline-success">
            Inicio Sesión
          </button>
        </form>
      )}
    </main>
  );
};

export default Login;
