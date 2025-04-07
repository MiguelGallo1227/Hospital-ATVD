const API = "http://localhost:8080/api";

// 🔍 Ver Consulta por ID
function verConsulta() {
  const id = document.getElementById("consulta-id").value;
  const resultadoDiv = document.getElementById("consulta-resultado");

  if (!id) {
    resultadoDiv.innerText = "Informe um ID válido.";
    return;
  }

  fetch(`${API}/consultas/${id}`)
    .then(res => {
      if (!res.ok) throw new Error("Consulta não encontrada");
      return res.json();
    })
    .then(consulta => {
      resultadoDiv.innerHTML = `
        <p><strong>ID:</strong> ${consulta.id}</p>
        <p><strong>Data:</strong> ${new Date(consulta.dataHora).toLocaleString()}</p>
        <p><strong>Valor:</strong> R$ ${consulta.valorConsulta.toFixed(2)}</p>
        <p><strong>Médico:</strong> ${consulta.medico?.nome || 'N/A'}</p>
        <p><strong>Paciente:</strong> ${consulta.paciente?.nome || 'N/A'}</p>
      `;
    })
    .catch(err => {
      resultadoDiv.innerText = err.message;
    });
}

// 👨‍⚕️ Ver Médico por ID
function verMedico() {
  const id = document.getElementById("medico-id").value;
  const resultado = document.getElementById("medico-resultado");

  if (!id) {
    resultado.innerText = "Informe um ID válido.";
    return;
  }

  fetch(`${API}/medicos/${id}`)
    .then(res => {
      if (!res.ok) throw new Error("Médico não encontrado");
      return res.json();
    })
    .then(medico => {
      resultado.innerHTML = `
        <p><strong>ID:</strong> ${medico.id}</p>
        <p><strong>Nome:</strong> ${medico.nome}</p>
        <p><strong>Especialidade:</strong> ${medico.especialidade}</p>
      `;
    })
    .catch(err => resultado.innerText = err.message);
}

// 🧑‍⚕️ Ver Paciente por ID
function verPaciente() {
  const id = document.getElementById("paciente-id").value;
  const resultado = document.getElementById("paciente-resultado");

  if (!id) {
    resultado.innerText = "Informe um ID válido.";
    return;
  }

  fetch(`${API}/pacientes/${id}`)
    .then(res => {
      if (!res.ok) throw new Error("Paciente não encontrado");
      return res.json();
    })
    .then(paciente => {
      resultado.innerHTML = `
        <p><strong>ID:</strong> ${paciente.id}</p>
        <p><strong>Nome:</strong> ${paciente.nome}</p>
        <p><strong>CPF:</strong> ${paciente.cpf}</p>
      `;
    })
    .catch(err => resultado.innerText = err.message);
}
