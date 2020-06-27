// usando uma funcao contrutora

function Calculadora(){
   this.display = document.querySelector('.display'); // para selecionar o display

    this.inicia = () => { // para iniciar a calculadora
        this.cliqueBotoes();
        this.precionaEnter();
    };

    this.clearDisplay = () =>{ // para zerar o valor do display
        this.display.value = ' '; // vai zerar o valor do display
    };

    this.apagaUm = () => { // para apagar o ultimo numero digitado
        this.display.value = this.display.value.slice(0,-1);
    }

    this.realizaConta = () => { // metodo para fazer a conta 
        
        try{ // para verificar erros
            let conta = eval(this.display.value); // uma variavel para receber o valor do display  // funcao JS para calculos , porem ela é perigosa
            if(!conta){
                alert('Valor invalido');
                return;
            }
            this.display.value = conta;

        }catch(e){ // pegar erros se houver
            alert('valor invalido');
            return;
        }
    };

    this.precionaEnter = () => { // metodo para pegar o teclado na calculadora
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13){
                this.realizaConta();
            }
    
        });
    };

    this.cliqueBotoes = () => { // para receber os cliques dos botoes
        document.addEventListener('click',(e) =>{

            const elemento = e.target;

            if(elemento.classList.contains('btn-num')){
                this.btnParaDisplay(elemento.innerText);
            }
            if(elemento.classList.contains('btn-clear')){
                this.clearDisplay();
            }

            if(elemento.classList.contains('btn-del')){
                this.apagaUm();
            }

            if(elemento.classList.contains('btn-eq')){
                this.realizaConta();
            }
        });
    };

    this.btnParaDisplay = (valor) => { // para receber os valores que esta entre a tag buttom
        this.display.value += valor;  
        this.display.focus(); // para manter o foco no display  
    };

}

const calculadora = new Calculadora(); // transformando uma variavel em um objeto function
calculadora.inicia(); // iniciando o programa