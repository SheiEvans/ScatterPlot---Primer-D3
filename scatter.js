console.log("hola mundo")

d3.json("datospartidos.json", function(data) {
    
    console.log("yupi")
    
    window.data = data
    
    partidos = data.partidos
    
    ancho = 500
    alto = 500
    
    contenedor = d3.select("#contenedor")
        .append("svg")
        .attr("width", ancho)
        .attr("height", alto)
    
        //ESCALA
    
        dominioVotantes = d3.extent(partidos, function(d) {
            return d.votantes
        })
        escalaLinear = d3.scaleLinear()
        .domain(dominioVotantes)
        .range([0,500])
    
    contenedor
        .selectAll("circle")
        .data(partidos)
        .enter()
        .append("circle")
        .attr("cx", function(d) {return
        escalaLinear(d.mediaAutoubicacion)})
        .attr("r", 10)
        .attr("cy", 10)
    
    ejeX = d3.axisBottom(escalaLinear)
    
    
    contenedor
        .call(ejeX)
    
    //EJES=AXIS en inglés para el d3
    

    /*T1. Crear una escala lineal para el cx el dominio es 0-10 y el rango es 0-500
    
    T2. Colorear los puntos por su ubicación ideologica (rojo-azul). NOTA: El attr es fill
    
    T3. Crear una escala lineal para el cy (eje vertical) con la variable votantes. Aplicala en cy. Calcula el minimo ty el máximo automaticamente (con d3.extent)
    
    T4. Haz que cuando haya un click cobre el botón salga una alerta (alert con el nombre del partido)*/
    
    })