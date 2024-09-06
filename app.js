function pesquisar(){
    let section = document.getElementById('resultados-pesquisa')

    let campoPesquisa = document.getElementById('campo-pesquisa').value
    campoPesquisa = campoPesquisa.toLowerCase()
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    let error = "";
    
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        dado.titulo.includes(campoPesquisa)

        if (campoPesquisa === ""){
            return
        }
        else if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
            <div class="item-resultado" data-director="quentin-tarantino">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
        `
        }
        else{
            error = '<div> <p> Não foi possivel achar o diretor </p> </div>'
        }
    }
    if (resultados == "")
    {
        section.innerHTML = error
    }
    else
    section.innerHTML = resultados
       
}