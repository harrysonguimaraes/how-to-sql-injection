package controllers;

import java.util.List;

import models.Usuario;
import play.i18n.Messages;
import play.mvc.Controller;

public class Usuarios extends Controller {
	
    protected static void returnIfNull(Object model, Object ... models) {

    	if (model == null) {
    		error("Houve um erro ao informar os dados.");
        }
        
        if (models != null && models.length > 0) {
         
            for (int i = 0; i < models.length; i++) {
            
                if (models[i] == null) {
            			error("Houve um erro ao informar os dados.");
                        return;
                }
            }
        }
    }
	
	public static void loginSeguro(String usuario, String senha) {
		
		returnIfNull(usuario, senha);
		
		List<Usuario> usuarios = Usuario.listSeguro(usuario, senha);
		
		renderJSON(usuarios);
	}

	public static void loginVulneravel(String usuario, String senha) {
		
		returnIfNull(usuario, senha);
		
		List<Usuario> usuarios = Usuario.listVulneravel(usuario, senha);
		
		renderJSON(usuarios);
	
	}
}
