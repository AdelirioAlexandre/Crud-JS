class Produto{
    constructor(){
        this.id = 1;
        this.arrayProduto = [];
    }
  
    cadastrar(){
       let produto = this.lerDados();
       if(this.validarCampos(produto) == true){
        this.adicionar(produto);
       }
       this.listaTabela();
       console.log(this.arrayProduto);
    }

    lerDados(){
        let produto = {}
        produto.id = this.id;
        produto.produto = document.getElementById('produto').value;
        return produto;
    }

    validarCampos(produto){
        let msg = '';
        if(produto.produto == ''){
            msg += 'Digite no campo \n';
        }
        if(msg != ''){
            alert(msg)
            return false;
        }
        return true;
    }

    adicionar(produto){
        this.arrayProduto.push(produto);
        this.id++;
    }

    listaTabela(){
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';
        for(let i = 0; i < this.arrayProduto.length; i++){
            let tr = tbody.insertRow();
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            td_id.innerText = this.arrayProduto[i].id;
            td_nome.innerText = this.arrayProduto[i].produto;
        }
    }

    remover(){
        var idProcurado = document.getElementById('delete').value;
        if(confirm("Deseja excluir o ID " + idProcurado)){
            for(let i = 0; this.arrayProduto.length; i++){
                if(this.arrayProduto[i].id == idProcurado){
                    this.arrayProduto.splice(i,1);
                    tbody.deleteRow(i);
                }else{
                    console.log("Produto não Encontrado");
                }
            }
            console.log(this.arrayProduto);
        } 
    }

    editar(){
        var idProcurado = document.getElementById('edite').value;
        var nomeNovo = document.getElementById('nome').value;
        for(let i = 0; this.arrayProduto.length; i++){
            if(this.arrayProduto[i].id == idProcurado){
                this.arrayProduto[i].produto = nomeNovo;
                this.listaTabela();
            }
        }
    }
}
var produto = new Produto();