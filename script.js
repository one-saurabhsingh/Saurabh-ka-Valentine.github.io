document.addEventListener("DOMContentLoaded", () => {

  const noBtn  = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");

  function randomMove() {

    const maxX = window.innerWidth  - noBtn.offsetWidth - 10;
    const maxY = window.innerHeight - noBtn.offsetHeight - 10;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top  = y + "px";
  }

  // automatic movement every 0.5 second
  setInterval(randomMove, 500);

  yesBtn.addEventListener("click", () => {

  document.body.innerHTML = `

    <div style="
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;

      height:100vh;
      background:#ff9a9e;
    ">

      <h2 style="color:white; padding-left:2px;" text-align:center;">
By saying yes, you agree to late replies sometimes 😏, bad jokes always 📈, and unconditional support 💘.
</h1>


      <img
        src="https://i.ibb.co/mVQKhNj3/2.png"
        style="
          display:block;
          width:70vw;
          max-width:300px;

          height:auto;

          border-radius:20px;
        "
      >

       <h1 style="color:white; padding-left:2px;">
I Love You Jaan ❤️.
</h1>

    </div>
  `;
});


});
