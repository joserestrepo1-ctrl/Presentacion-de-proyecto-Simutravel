function mostrar(id){
  document.querySelectorAll(".pagina").forEach(p => p.style.display = "none");
  document.getElementById(id).style.display = "block";
}

function buscarVuelos(){
  let o = document.getElementById("origen").value;
  let d = document.getElementById("destino").value;
  let f = document.getElementById("fecha").value;

  let resultados = `
  <h3>Resultados de: ${o} → ${d} (${f})</h3>
  <ul>
    <li>Vuelo 101 - $300</li>
    <li>Vuelo 202 - $350</li>
    <li>Vuelo 303 - $400</li>
  </ul>
  `;

  document.getElementById("resultados").innerHTML = resultados;
}

function hacerCheckin(){
  let nombre = document.getElementById("checkNombre").value;
  let codigo = document.getElementById("checkCodigo").value;

  if(nombre.trim() === "" || codigo.trim() === ""){
    return document.getElementById("checkinRespuesta").innerHTML = 
      "<p style='color:red'>Complete todos los campos.</p>";
  }

  document.getElementById("checkinRespuesta").innerHTML = 
    `<p style='color:green;'>✅ Check-in exitoso para ${nombre}</p>`;
}

function enviarContacto(){
  let msg = document.getElementById("mensaje").value;

  if(msg.trim() === ""){
    return document.getElementById("contactoRespuesta").innerHTML = 
      "<p style='color:red;'>Escriba un mensaje primero.</p>"
  }

  document.getElementById("contactoRespuesta").innerHTML = 
    `<p style='color:green;'>📨 Mensaje enviado. Nos pondremos en contacto.</p>`;
}
