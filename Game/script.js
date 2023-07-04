function getRandomLightColor() {
    const randomIndex = Math.floor(Math.random() * lightColors.length);
    return lightColors[randomIndex];
  }
  
  document.getElementById("playButton").addEventListener("click", playGame);
  
  function playGame() {
    let namesInput = prompt("Ingresa los nombres separados por comas:");
    let names = namesInput.split(",").map(name => name.trim());
  
    const tasks = [
      "Compra carne",
      "Compra escabio",
      "Hace el asado",
      "Consigue la joda",
      "Compra hielo",
      "Consigue minas?",
      "Pone el lugar",
      "Pone el fasito",
      "Sorprende con algo",
      "Hace segunda a todos"
    ];
  
    const assignedTasks = [];
  
    while (names.length > 0 && tasks.length > 0) {
      const randomNumber = Math.floor(Math.random() * names.length);
      const assignedName = names.splice(randomNumber, 1)[0];
      const assignedTask = tasks.splice(0, 1)[0];
      const assignedColor = getRandomLightColor();
  
      assignedTasks.push({ name: assignedName, task: assignedTask, color: assignedColor });
    }
  
    if (tasks.length > 0) {
      const remainingTasks = tasks.map(task => {
        const assignedColor = getRandomLightColor();
        let assignedName;
        if (names.length > 0) {
          assignedName = names.splice(Math.floor(Math.random() * names.length), 1)[0];
        } else {
          assignedName = "Todos";
        }
        return { name: assignedName, task: task, color: assignedColor };
      });
  
      assignedTasks.push(...remainingTasks);
    }
  
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";
  
    assignedTasks.forEach(function (assignment) {
      const listItem = document.createElement("li");
      listItem.textContent = assignment.name + ": " + assignment.task;
      listItem.style.backgroundColor = assignment.color;
      taskListElement.appendChild(listItem);
    });
  
    const resultContainer = document.getElementById("resultContainer");
    resultContainer.style.display = "block";
  }
  
  const lightColors = [
    "#FFC300", // Amarillo
    "#FF5733", // Naranja
    "#C70039", // Rojo
    "#900C3F", // Rojo oscuro
    "#581845", // Morado oscuro
    "#2274A5", // Azul oscuro
    "#17BEBB", // Cian
    "#59CD90", // Verde claro
    "#FF6B6B", // Rosa claro
    "#FCA311"  // Naranja claro
  ];
  