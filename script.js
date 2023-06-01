const form = document.getElementById('myForm');
const feedback = document.querySelector('.feedback-text')

form.addEventListener('submit', e => {
  e.preventDefault();

  // ვალიდაცია


  // იმეილი უნდა შეიცავდეს @ და .
  const email = form.email.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //პასვორდი უნდა შეიცავდეს 1 ასოს და 1 რიცხვს და ერთ უნიკალურ სიმბოლოს და არ უნდა იყოს 8ზე ნაკლები სიმბოლო.
  const password = form.password.value;
  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if(emailPattern.test(email) && passwordPattern.test(password)) {
        feedback.style.color = 'green';
        feedback.textContent = 'აუტორიზაცია წარმატებით შესრულდა';
  }

  else {
    feedback.style.color = 'red';
    feedback.textContent = 'აუტორიზაცია ვერ შესრულდა'
  }

});