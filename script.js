let darkicon=document.getElementById("dark-icon");

darkicon.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        darkicon.src="./images/sun.png";
    }
    else{
        darkicon.src="./images/moon.png";
    }
});

let hamburg=document.getElementById("ham-menu");
let menu=document.getElementById("nav-list");
let ul=document.querySelectorAll("#nav-list ul li");
let clk=true;

hamburg.addEventListener("click",()=>{
    if(clk){
        hamburg.innerHTML="<i class='bx bx-x'></i>";
        menu.style.left="0";
        clk=false;
    }
    else{
        hamburg.innerHTML="<i class='bx bx-menu' ></i>";
        menu.style.left="-100vw";
        clk=true;
    }
});

ul.forEach((li)=>{
    li.addEventListener("click",()=>{
        menu.style.left="-100vw";
        hamburg.innerHTML="<i class='bx bx-menu' ></i>";
        clk=true;
    });
})
let popBtn=document.querySelectorAll(".openBtn");
let popContent=document.querySelector(".pop-content p");
popBtn.forEach((btn)=>{
    btn.addEventListener('click', function (event) {
        document.getElementById('popBox').style.display = 'block';
        let check_clk=event.target;
        let classname=check_clk.className
        if(classname=="openBtn btn1"){
            popContent.innerHTML="Developed and launched an educational website dedicated to Object-Oriented Programming (OOPs) principles. Designed with a responsive layout for optimal user experience across devices, the platform offers comprehensive courses ranging from introductory to advanced levels. Implemented interactive learning features, including coding exercises and projects, to enhance practical understanding. Collaborated with experienced instructors to provide high-quality content and insights, fostering a supportive online community for learners. The website has attracted [number] of registered users within [timeframe] and received positive feedback for its user-friendly interface. Technologies utilized include HTML, CSS, and JavaScript."
        }else if(classname=="openBtn btn2"){
            popContent.innerHTML="Designed and developed a dynamic blog post website using Node.js, Express.js, and EJS, showcasing proficiency in full-stack web development. Implemented a responsive and user-friendly interface, allowing seamless navigation and optimal viewing across devices. Leveraged Express.js for robust server-side functionality and integrated EJS templating for efficient rendering of dynamic content. Created a secure and scalable architecture, ensuring a smooth and engaging reading experience for visitors. This project demonstrates expertise in backend development, routing, and template rendering using cutting-edge technologies."
        }else if(classname=="openBtn btn3"){
            popContent.innerHTML="Developed a CGPA calculator application showcasing proficiency in web application development. Built using [mention the technology stack, e.g., HTML, CSS, JavaScript], this tool allows students to effortlessly calculate their Cumulative Grade Point Average (CGPA) based on entered grades and credit hours. Implemented an intuitive user interface for a seamless user experience. This project demonstrates strong problem-solving skills, attention to detail, and the ability to create practical tools to streamline academic processes."
        }else if(classname=="openBtn btn4"){
            popContent.innerHTML="Implemented a responsive Rock, Paper, Scissors game using HTML, CSS, and JavaScript, showcasing both design and development skills. The project features a clean and user-friendly interface designed to seamlessly adapt to various screen sizes, providing an optimal gaming experience on desktops, tablets, and mobile devices. The game incorporates real-time result feedback, dynamic styling, and modern design elements to create an engaging and visually appealing user interface. Developed the game logic in JavaScript, ensuring a responsive and interactive experience. This project demonstrates a combination of technical proficiency, creativity, and attention to user experience in web development."
        }else if(classname=="openBtn btn5"){
            popContent.innerHTML="Designed and developed a fully functional calculator using HTML, CSS, and JavaScript, showcasing proficiency in front-end web development. The calculator features a responsive and intuitive user interface, allowing seamless interaction across various devices. The clean and modern design emphasizes user experience, with large buttons and a dynamic display for easy readability. Implemented the calculator's logic in JavaScript, enabling accurate and real-time calculations. This project not only demonstrates technical skills in web development but also highlights a commitment to creating user-friendly and visually appealing applications."
        }else if(classname=="openBtn btn6"){
            popContent.innerHTML="Developed a secure user validation system using Node.js, Express.js, and EJS for dynamic views. Employed PostgreSQL for database storage and implemented password hashing for enhanced security, ensuring a reliable and protected user authentication process."
        }else if(classname=="openBtn btn7"){
            popContent.innerHTML="Launched the Capital Quiz App, crafted with love using EJS, Node.js, Express.js, and PostgreSQL. Boasting a sleek UI and responsive design, it offers a seamless user experience for global geography enthusiasts."
        }else if(classname=="openBtn btn8"){
            popContent.innerHTML="Led the development of 'WorldMapColorizer' using Node.js, Express.js, EJS, and PostgreSQL. This dynamic web app enables users to input a country name, instantly visualizing it on a world map. Leveraged PostgreSQL for efficient data management, ensuring seamless read and insert operations. Achieved a successful project launch, showcasing my skills in full-stack development. Eager to discuss technical insights and innovations—let's connect!"
        }else if(classname=="openBtn btn9"){
            popContent.innerHTML="Designed and implemented a Todo List project using React.js, focusing on robust state management and responsive design techniques. Integrated features like task filtering and sorting to optimize task organization and user experience. Utilized modern frontend practices to ensure scalability and maintainability of the application, demonstrating proficiency in React.js development."
        }
      });
})
  document.getElementById('closeBtn').addEventListener('click', function () {
    document.getElementById('popBox').style.display = 'none';
  });

  document.getElementById('closeBtn').addEventListener('click', function () {
    document.getElementById('popBox').style.display = 'none';
  });

let speech=new SpeechSynthesisUtterance();

document.querySelector(".contact-btn .voice-text").addEventListener("click",()=>{
    speech.text=document.querySelector("#meassage-box").value;
    window.speechSynthesis.speak(speech);
})
  
  
