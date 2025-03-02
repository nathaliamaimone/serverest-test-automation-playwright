# language: pt
Funcionalidade: Login no sistema

  Cenário: Login com credenciais válidas
    Dado que o usuário acesse a página de login
    Quando ele preenche o usuário e a senha corretamente
    Então ele deve ser autenticado com sucesso
