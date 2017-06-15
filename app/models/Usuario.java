package models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Query;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import play.db.jpa.GenericModel;
import play.db.jpa.JPA;

@Entity
@Table(schema="portal", name="usuario")
public class Usuario extends GenericModel {
	
	@Id
	@SequenceGenerator(name="usuario_id_usuario_seq" )
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="usuario_id_usuario_seq")
	@Column(name="id")
	public Long id;

	@Column(name="senha")
	public String senha;
	
	@Column(name="nome")
	public String nome;

	public static List<Usuario> listSeguro(String usuario, String senha) {
		
		String jpql = "SELECT u FROM " + Usuario.class.getCanonicalName() + " u" +
				" WHERE u.nome = :usuario and u.senha = :senha";
		
		Query query = JPA.em().createQuery(jpql, Usuario.class);
		
		query.setParameter("usuario", usuario).setParameter("senha", senha);
		
		return query.getResultList();
		
	}
	
	public static List<Usuario> listVulneravel(String usuario, String senha) {
		
//		String jpql = "SELECT u FROM " + Usuario.class.getCanonicalName() + " u" +
//				" WHERE u.nome = '" + usuario + "' and u.senha = '" + senha + "'";
//		
//		Query query = JPA.em().createQuery(jpql, Usuario.class);
		
		String sql = "SELECT * FROM portal.usuario u WHERE u.nome = '" + usuario + "' and u.senha = '" + senha + "'";
		
		Query query = JPA.em().createNativeQuery(sql, Usuario.class);
		
		return query.getResultList();

	}


}
