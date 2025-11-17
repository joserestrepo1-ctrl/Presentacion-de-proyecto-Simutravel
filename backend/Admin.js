// Arrays simulando base de datos
let pasajeros = [];
let vuelos = [];
let reservas = [];
let historial = [];

function mostrar(id){
  document.querySelectorAll('.contenido').forEach(div => div.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Notificación animada
function showNotification(msg){
  const noti = document.getElementById("notification");
  noti.textContent = msg;
  noti.classList.remove("hidden");
  noti.classList.add("show");

  historial.push(msg);
  actualizarHistorial();

  setTimeout(() => {
    noti.classList.remove("show");
    setTimeout(() => noti.classList.add("hidden"), 400);
  }, 3500);
}

function actualizarHistorial(){
  let lista = document.getElementById("historialNotificaciones");
  lista.innerHTML = "";
  historial.forEach(n => {
    let li = document.createElement("li");
    li.textContent = n;
    lista.appendChild(li);
  });
}

// Pasajeros
function agregarPasajero(){
  let p = document.getElementById("nuevoPasajero").value;
  if(p.trim()==="") return showNotification("⚠️ Digite un pasajero");
  pasajeros.push(p);

  let li = document.createElement("li");
  li.textContent = p;
  document.getElementById("listaPasajeros").appendChild(li);

  showNotification("✅ Pasajero agregado: " + p);
}

// Vuelos
function agregarVuelo(){
  let v = document.getElementById("nuevoVuelo").value;
  if(v.trim()==="") return showNotification("⚠️ Digite un vuelo");
  vuelos.push(v);

  let li = document.createElement("li");
  li.textContent = v;
  document.getElementById("listaVuelos").appendChild(li);

  showNotification("✈️ Vuelo registrado: " + v);
}

// Reservas
function agregarReserva(){
  let p = document.getElementById("resPasajero").value;
  let v = document.getElementById("resVuelo").value;
  if(p.trim()==="" || v.trim()==="") return showNotification("⚠️ Complete todos los campos");

  reservas.push({pasajero:p, vuelo:v});

  let li = document.createElement("li");
  li.textContent = p + " reservó " + v;
  document.getElementById("listaReservas").appendChild(li);

  showNotification("📄 Reserva creada para " + p);
}
