(function() {
	new Vue({
  			el: '#app',
  			data: {
  				logou: false,
  				nomeUsuarioVulneravel: '',
  				nomeUsuarioSeguro: '',
  				senhaUsuarioSeguro: '',
  				senhaUsuarioVulneravel: '',
  				usuarios: []
  			},
  			methods: {
  				pesquisarVulnaravel: function() {

  					var params = {
						usuario: this.nomeUsuarioVulneravel,
						senha: this.senhaUsuarioVulneravel
					};
  					
					this.$http.get('/loginVulneravel', {params: params})
						.then(function(response) {
							console.log(response);
					  		this.usuarios = response.body;
					  		if (this.usuarios.length > 0) {
								this.logou = true;

					  		}
						});

				},
				
				pesquisarSeguro: function() {

					var params = {
						usuario: this.nomeUsuarioSeguro,
						senha: this.senhaUsuarioSeguro
					};
					
					this.$http.get('/loginSeguro', {params: params})
						.then(function(response) {
							console.log(response);
					  		this.usuarios = response.body;
					  		if (this.usuarios.length > 0) {
								this.logou = true;

					  		}
						});

				}
			}
		
		});

})();