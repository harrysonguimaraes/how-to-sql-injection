(function() {
	new Vue({
  			el: '#app',
  			data: {
  				logou: false,
  				nomeUsuarioVulneravel: '',
  				nomeUsuarioSeguro: '',
  				senhaUsuarioSeguro: '',
  				senhaUsuarioVulneravel: '',
  				usuarios: [],
  				msg: {
  					show: false,
  					isSuccess: true,
  					texto: ''
  				}
  			},
  			methods: {
  				pesquisarVulnaravel: function() {

  					var params = {
						usuario: this.nomeUsuarioVulneravel,
						senha: this.senhaUsuarioVulneravel
					};
  					
					this.$http.get('/loginVulneravel', {params: params})
						.then(function(response) {
							
							if (response.body.length > 0) {
								this.exibirAlerta('Login realizado com sucesso! Confira os dados abaixo.')
							} else {
								this.exibirAlerta('Usuário não encontrado!', 'danger');
							}

					  		this.usuarios = response.body;
					  		if (this.usuarios.length > 0) {
								this.logou = true;

					  		}
						}, function(error) {
							this.exibirAlerta(error.body, 'danger');
						});

				},
				
				pesquisarSeguro: function() {

					var params = {
						usuario: this.nomeUsuarioSeguro,
						senha: this.senhaUsuarioSeguro
					};
					
					this.$http.get('/loginSeguro', {params: params})
						.then(function(response) {
							
							if (response.body.length > 0) {
								this.exibirAlerta('Login realizado com sucesso! Confira os dados abaixo.')
							} else {
								this.exibirAlerta('Usuário não encontrado!', 'danger');
							}

					  		this.usuarios = response.body;
					  		if (this.usuarios.length > 0) {
								this.logou = true;

					  		}
						}, function(error) {
							this.exibirAlerta(error.body, 'danger');
						});

				},
				exibirAlerta: function(texto, tipo) {
					console.log('texto');
					this.msg.texto = texto;
					this.msg.isSuccess = tipo === 'danger' ? false : true;
					this.msg.show = true;
				}
			}
		
		});

})();