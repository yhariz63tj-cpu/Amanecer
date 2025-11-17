const mantras = [
    "La luz ilumina mi camino, único, idóneo y a mi tiempo perfecto.",
    "No haré nada que no pueda sostener bajo el sol.",
    "Es un día para ver a través de la luz clara todo a mi alrededor.",
    "Soy luz, soy paz, soy intensidad y calidad.",
    "El sol no busca ser, simplemente es.",
    "El que no se lanza no vuela.",
    "Lo que sostengo con disciplina florece.",
    "No me explico, me sostengo.",
    "Lo que soy sostiene lo que hago.",
    "Mi fuerza no se anuncia, se nota.",
    "La luz que cargo no cabe en cualquier sitio.",
    "No nací para ser tenue; nací para ser un punto fijo de luz.",
    "No siempre quiero, pero siempre puedo.",
    "Cierro lo que ya no ilumina mi camino.",
    "No busco encajar; brillo en mi propio tono.",
    "Soy luz estable, firme y propia.",
    "Lo correcto llega cuando mi luz está lista para recibirlo.",
    "El problema no es el reto; es mi resistencia a cambiar.",
    "La paciencia no es esperar; es no rendirme mientras espero.",
    "No brillo para agradar; brillo porque existo.",
    "No es falta de tiempo: es falta de prioridad.",
    "No estoy aquí para gustar; estoy para ser.",
    "Lo que evito me gobierna; lo que enfrento me obedece.",
    "El sol no pide permiso; yo tampoco.",
    "No me reduzco para encajar.",
    "Quien entiende mi silencio, merece mi voz.",
    "Mi calma es poder en reposo.",
    "Si incomodo, es porque brillo donde otros no quieren ver.",
    "El sol no se justifica; yo tampoco.",
    "Camino firme, aunque tiemble.",
    "Lo que soy habla antes que mis palabras.",
    "No retrocedo; me recalibro.",
    "Mi luz es consecuencia, no intención.",
    "Quien camina con claridad nunca camina sola.",
    "La intensidad no es exceso: es identidad.",
    "Lo que soy se nota; lo que callo se siente.",
    "No persigo el día; lo abro."
];

const mantraText = document.getElementById("mantra");
const btn = document.getElementById("newMantraBtn");

btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * mantras.length);
    const newMantra = mantras[randomIndex];

    mantraText.classList.remove("show");

    setTimeout(() => {
        mantraText.textContent = newMantra;
        mantraText.classList.add("show");
    }, 300);
});
