
        function eresMadridista(){
            let respuestas = {
                A: 0, // Vinagre
                B: 0, // Oficialista
                C: 0, // pipero
                D: 0 // Persona de bien
            }
            let x = document.forms['formulario'];
            let seleccionada = false;

            //Recorremos las respuestas
            for (let i = 0; i < x.length; i++){
                if (x.elements[i].checked){
                    respuestas[x.elements[i].value]++;
                    seleccionada = true;
                }
            }
            // Si no se seleciona ninguna opcion, mandamos un mensaje
            if (!seleccionada){
                document.getElementById("resultado").innerHTML = "No has seleccionado ninguna opción, marca al menos una casilla";
                document.getElementById("consejo").innerHTML ="";
                return;
            }


            // Localizamos el valor maximo de opciones
            let maxRespuesta = Math.max (respuestas.A, respuestas.B, respuestas.C, respuestas.D);

            let maxCount = 0;
            let tipo = "";

            if (respuestas.A === maxRespuesta){
                maxCount++;
                tipo = "Vinagre";
                document.getElementById('resultado').innerHTML = "Resultado: Eres un vinagre!! A pesar de las victorias o buenos resultados del equipo, siempre estás criticando, quejándote o viendo el lado negativo."
                document.getElementById('consejo').innerHTML = "Intenta disfrutar un poco más del equipo y de la vida en general";
            }
            if (respuestas.B === maxRespuesta) {
                maxCount++;
                tipo = "Oficialista";
                document.getElementById('resultado').innerHTML = "Resultado: Eres un Oficialista!! Siempre sueles defender todo lo que hace el club, sus dirigentes, jugadores o cuerpo técnico, sin importar la situación.."
                document.getElementById('consejo').innerHTML = "Intenta hacer un poco de autocrítica, no todo es maravilloso.";
            }
            if (respuestas.C === maxRespuesta) {
                maxCount++;
                tipo = "Pipero";
                document.getElementById('resultado').innerHTML = "Resultado: Eres un pipero!! Disfrutas del club, pero con una actitud relajada y sin mucha exigencia, a menudo siendo eres indulgente con los fallos y resultados menos positivos."
                document.getElementById('consejo').innerHTML = "trate de elevar su nivel de exigencia y no se conformé solo con disfrutar sin importar el rendimiento del equipo";
            }
            if (respuestas.D === maxRespuesta) {
                maxCount++;
                tipo = "Persona de bien";
                document.getElementById('resultado').innerHTML = "Resultado: Eres una persona de bien!! Eres un seguidor fiel y razonable del Real Madrid, que valora los logros del club, respeta a todos sus miembros y vive el fútbol con una actitud positiva y madura. No te dejas llevar por las modas ni por las emociones extremas, y siempre buscas el bien común dentro del mundo del fútbol."
                document.getElementById('consejo').innerHTML = "Sigue manteniendo el equilibrio entre pasión y objetividad";
            }
            // En caso de empate
            if (maxCount > 1){
                tipo = "No sabes ni lo que eres";
                document.getElementById('resultado').innerHTML = "Resultado: Empate entre varias categorías. Parece que tienes características de varios tipos de madridista. Esto muestra que tienes una visión diversa del equipo y, en algunos casos, tu actitud puede cambiar dependiendo de las circunstancias.";
                document.getElementById('consejo').innerHTML = "Es importante reflexionar sobre lo que realmente valoras del equipo. No dejes que las emociones del momento te lleven a tener una actitud fluctuante. Encuentra tu equilibrio y sé consistente en tu apoyo.";
            }
        }
            // Limpiamos los resultados
            function resetear(){
                let radios = document.querySelectorAll('input[type="radio"]');
                radios.forEach(radio => radio.checked = false);
                document.getElementById('resultado').innerHTML = '';
                document.getElementById('consejo').innerHTML = '';
        }
    
