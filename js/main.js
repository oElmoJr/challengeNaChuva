function openSidebar() {
  document.body.classList.toggle("sidebar-open");
}

function openVerMais() {
  document.body.classList.toggle("verMais-open");
}

function createTopic() {
  document.body.classList.toggle("topic-open");
}

function sendTopic() {
  document.body.classList.toggle("sendTopic");
  createTopic();
}

function createNewTopic() {
  document.body.classList.toggle("newTopic-open");
  sendTopic();
  createTopic();
  createTopic();
}

function openRespostas() {
  document.body.classList.toggle("respostas-open");
}
