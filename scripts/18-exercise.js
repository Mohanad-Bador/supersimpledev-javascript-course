// 18a
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://supersimplebackend.dev/greeting')
xhr.send();
xhr.addEventListener('load', () => {
  console.log('18a');
  console.log(xhr.response);
})

// 18b
fetch('https://supersimplebackend.dev/greeting').then(
  response => response.text()).then((text)=>{
    console.log('18b');
    console.log(text);
  }
)

// 18c
async function fun() {
  const response = await fetch('https://supersimplebackend.dev/greeting');
  const text = await response.text();
  console.log('18c');
  console.log(text);
}
fun();

// 18d
async function fun2() {
  const response = await fetch('https://supersimplebackend.dev/greeting',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: 'Mohanad'
    })
  });
  const text = await response.text();
  console.log('18d');
  console.log(text);
}
fun2();

// 18f
async function fun3() {
  try{
    const response = await fetch('https://amazon.com');
    const text = await response.text();
    console.log('18f');
    console.log(text);
  }
  catch(error){
    console.log("CORS error. Your request was blocked by the backend.");
  }
}
fun3();

// 18g
async function fun4() {
  try{
    const response = await fetch('https://supersimplebackend.dev/greeting',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
    });
    if(response.status >= 400) throw response;
    
  }
  catch(error){
    if(error.status === 400) {
      console.log('18g');
      const errorMessage = await error.json();
      console.log(errorMessage);
    }
    else console.log('Network error. Please try again later');
  }
}
fun4();