let chk = document.getElementById('chk')
/* Aqui temos uma variavel chamada 'chk' que está atribuida ao elemento HMTL o nosso id: 'chk'*/ 

chk.addEventListener('change', () => { 
    /* Este código adiciona um ouvinte de evento ao elemento 'chk'. 
    já o evento 'change' ele é chamado quando o usuário altera o input checkbox*/
    document.body.classList.toggle('dark')
    /*document.body: ele seleciona todo o elemento 'body' do documento HTML.
      classList: é uma propriedade que permite manipular as classes CSS do elemento
      toggle("dark"): Ele verifica se a classe CSS'dark' está presente no elemento 'body', ou seja.
      se estiver presente, ela sera removida, caso contrario será adicionada.
    */
})