const school = {
    name: "Оқу орталығы",
    phoneNumber: "8-800-555-35-35",
    students: [
      {
        studentName: "Аян",
        top: "А",
        progress: 85,
        lessons: 5
      },
      {
        studentName: "Бота",
        top: "Б",
        progress: 90,
        lessons: 6
      },
      {
        studentName: "Ербол",
        top: "С",
        progress: 75,
        lessons: 4
      },
      {
        studentName: "Лаура",
        top: "А",
        progress: 92,
        lessons: 5
      },
      {
        studentName: "Нұрсұлтан",
        top: "Б",
        progress: 80,
        lessons: 5
      }
    ]
  };
  
  function changeSchoolName() {
    const newName = prompt("Жаңа оқу орталығының атауын енгізіңіз:");
    school.name = newName;
  }
  
  function changePhoneNumber() {
    const newPhoneNumber = prompt("Жаңа телефон нөмірін енгізіңіз:");
    if (newPhoneNumber !== "") {
      school.phoneNumber = newPhoneNumber;
    }
  }

  function listStudentNames() {
    const studentNames = school.students.map(student => student.studentName).join(", ");
    alert(`Студенттер: ${studentNames}`);
  }
  
  function addStudent() {
    const studentName = prompt("Студенттің атын енгізіңіз:");
    const progress = parseInt(prompt("Студенттің орташа үлгерімін енгізіңіз:"));
    const lessons = parseInt(prompt("Оқитын сабақ санын енгізіңіз:"));
    const top = prompt("Студенттің тобын енгізіңіз:");
  
    const newStudent = {
      studentName: studentName,
      top: top,
      progress: progress,
      lessons: lessons
    };
  
    school.students.push(newStudent);
  }
  
  function applyDecreaseToTop() {
    const groupName = prompt("Қай топтың студенттерінің үлгерімін төмендетесіз?");
    const decreasePercentage = parseInt(prompt("Қанша пайызға төмендету керектігін енгізіңіз:"));
  
    school.students.forEach(student => {
      if (student.top === groupName) {
        student.progress -= (student.progress * decreasePercentage) / 100;
      }
    });
  }
  
  function menu() {
    let continueMenu = true;
  
    while (continueMenu) {
      const choice = prompt(`
        1. Оқу орталығының атауын өзгерту
        2. Телефон нөмірін жаңарту
        3. Барлық студенттерді көру
        4. Жаңа студент қосу
        5. Топқа пайыздық мөлшерде орташа үлгерімін төмендету
        6. Тоқтат
        Таңдауыңызды енгізіңіз:
      `);
  
      switch (choice) {
        case "1":
          changeSchoolName();
          break;
        case "2":
          changePhoneNumber();
          break;
        case "3":
          listStudentNames();
          break;
        case "4":
          addStudent();
          break;
        case "5":
          applyDecreaseToTop();
          break;
        case "6":
          alert("Сау болыңыз!");
          continueMenu = false;
          break;
        default:
          alert("Қате таңдау. Қайталап көріңіз.");
          break;
      }
    }
  }
  
  menu();
  