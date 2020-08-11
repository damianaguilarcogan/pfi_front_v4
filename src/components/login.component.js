import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Registrarse</h3>

                <div className="form-group">
                    <label>Loguearse</label>
                    <input type="email" className="form-control" placeholder="ingresar email" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="ingresar contraseña" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Registrar</button>
                <p className="forgot-password text-right">
                    Olvidaste tu <a href="#">contraseña?</a>
                </p>
            </form>
        );
    }
}