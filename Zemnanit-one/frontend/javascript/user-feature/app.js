const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

if (burgerIcon && navbarMenu) {
  burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('hidden');
  });

  // Add event listener to window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      navbarMenu.classList.remove('hidden');
    }
  });
}

const API = `http://localhost:3000/appointments`;

const formEL = document.querySelector('.form');

const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const style = document.querySelector('#style');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const comment = document.querySelector('#comment');

formEL.addEventListener('submit', async (event) => {
   event.preventDefault();

   const data = {
    fullName: fullName.value,
    email: email.value,
    hairStyle: style.value,
    date: date.value,
    time: time.value,
    comment:comment.value

   }
   

   const response = await fetch("http://localhost:3000/appointments", {
    method: "POST",
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    console.log("ok");
  } else {
    console.log("not ok");
  }
});


function displayAppointmentDetails() {
    let show = '';
    const appointmentEl = document.querySelector('#appointment');
  
    const html = `
      <div class="text-black"><p>Date: ${date.value}</p></div>
      <div><p>Time: ${time.value}</p></div>
      <div><p>Style: ${style.value}</p></div>
    `;
  
    show += html;
    appointmentEl.innerHTML = show;
  }



  function logout() {
    const result = confirm("Are you sure you want to logout?");
  
    if (result) {
      window.location.href = "login_page.html"; // Redirect to login.html
    } 
  }

  