var festivales = {
    "Festival": "Navar-Pop",
    "Ciudad": "Ablitas",
    "Anno": 2018,
    "Grupos": [
        {
            "nombre": "RETROMANÍA - COVER BAND",
            "compañia": "Pop Rock en Navarra",
            "discos": [
                "BIENVENIDOS (Miguel Ríos)s",
                "VOY A PASARMELO BIEN (Hombres G)",
                "LOCA (Luz Casal)",
            ]
        },
        {
            "nombre": "Izal",
            "compañia": "Autoeditado",
            "discos": [
                "Teletransporte",
                "Magia y efectos especiales",
                "Agujeros de gusano",
                "Copacabana",
                "VIVO",
                "Autoterapia"
            ]
        },
        {
            "nombre": "Miss Caffeina",
            "compañia": "Warner Music",
            "discos": [
                "Imposibilidad del fenómeno",
                "De polve y flores",
                "Detroit"
            ]
        }]
}

/**
 * Funcion para mostrar los datos en el html
 */
function iniciar() {

    //Creamos un section un dentro un article
    let section = document.createElement("section");
    let article = document.createElement("article");

    //Mostramos el titulo del Festival, Ciudad y año
    section.appendChild(document.createTextNode("Festival: " + festivales.Festival));
    //Creamos un espaciado entre titulo
    section.appendChild(document.createElement("br"));
    section.appendChild(document.createTextNode("Ciudad: " + festivales.Ciudad));
    section.appendChild(document.createElement("br"));
    section.appendChild(document.createTextNode("Año: " + festivales.Anno));

    //Hacemos un bucle para recorrer todo los grupos y mostrar los contenidos del festivales
    for (let i = 0; i < festivales.Grupos.length; i++) {

        //Creamos un h2 para el titilo de cada grupo
        let h2 = document.createElement("h2");
        //Metemos el nombre de grupo al h2
        let nombreGrupo = document.createTextNode(festivales.Grupos[i].nombre)
        h2.appendChild(nombreGrupo)

        //Creamos un ul para meter el contenido de la lista
        let ul = document.createElement("ul");

        //Hacemos un bucle para el grupo de la posicion[i] para mostra su contenido
        for (let x = 0; x < festivales.Grupos[i].discos.length; x++) {

            //Mecrea el elemento li para la lsita
            let li = document.createElement("li");
            let liContenido = document.createTextNode(festivales.Grupos[i].discos[x]);

            li.appendChild(liContenido);
            ul.appendChild(li);
        }

        //Cerramos el h2
        article.appendChild(h2);

        //Mostramos la Compañía y Discografía
        article.appendChild(document.createTextNode("Compañía: " + festivales.Grupos[i].compañia));
        //Creamos un espaciado entre titulo
        article.appendChild(document.createElement("br"));
        article.appendChild(discografia = document.createTextNode("Discografía"));

        //Cerramos el ul
        article.appendChild(ul);
    }

    //Cerramos el article y section
    section.appendChild(article)
    document.body.appendChild(section);
}

//Iniciamos la funcion iniciar al cargar la página
window.onload = iniciar;