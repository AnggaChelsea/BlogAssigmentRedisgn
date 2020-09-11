//navbar
$(".menu-toggle").click(function () {
  $(".site-nav").toggleClass("site-nav--open", 500);
  $(this).toggleClass("open");
});

//looping image
const image = [{
    link: './postPage.html',
    name: 'web Design Makrket'
  },
  {
    link: './postPage.html',
    name: 'web Design company profile'
  },
  {
    link: './postPage.html',
    name: 'web Design e-commerce'
  },
  {
    link: './postPage.html',
    name: 'web Design Angga'
  },
  {
    link: './postPage.html',
    name: 'web Design Angga Startup'
  },

]
$(document).ready(function () {
  for (let i = 0; i < image.length; i++) {
    const loopImage = `
    <figure class="port-item">
    <img src="./img/webDesign4.jpg" alt="portfolio item" />
    <figcaption class="port-desc">
      <p>${image[i].name}</p>
      <a href="${image[i].link}" class="button button-accent button-small">view</a>
    </figcaption>
  </figure>
    `;
    $('.portfolio').append(loopImage);
  }
})

//jquery comment

$("#form").on("submit", function (event) {
  event.preventDefault();
  const input = $(this).children("#comment").val();
  const hasilInput = `
  <div class="head-comment">
  <p class="isi-comment">${input}</p>
  </div>
  `;
  $(this).after(hasilInput);
  $(this).children("#comment").val();
});

//reply comment on Home Page

$("#form-comment").on("submit", function (event) {
  event.preventDefault();
  const inputToComment = $(this).children("#need").val();
  const classInput = `
  <br /">
  <div class="isiComment">
  <span class="isi"><i class="fa fa-user-circle"></i> ${inputToComment}</span>
  </div

  `;
  $(this).after(classInput);
  $(this).children("#need").val();
});

//membuat built in functions

//ReadMore
function myReadMore() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
//like
let Like = 0;

function addLike() {
  Like += 1;
  document.getElementById("like").innerHTML = Like;
}

//notifications
$(document).ready(function () {
  $('.close').on('click', function (event) {
    const selectForDelete = $(this).parent();

    selectForDelete.slideUp(200, function () {
      selectForDelete.remove();

      if ($('.choose').children().length === 0) {
        $('.choose').hide();
      } //slice comment
      const sliceValueComment = document.getElementById('comment');
      sliceValueComment.addEventListener('input', funcSlice);

      function funcSlice(event) {
        if (this.value === 10) {
          console.log("hey berhasuk")
        }
      }
    })
  })
})

//list on blogpage
const formTodo = document.getElementById('formTodo');
const input = document.getElementById('input');
const isiTodoList = document.getElementById('isiTodoList');

formTodo.addEventListener('submit', addList);

function addList(e) {
  e.preventDefault();

  //  membuat li elemet
  const li = document.createElement('li');

  //membuat class
  li.className = `list-group li-dom`

  li.appendChild(document.createTextNode(input.value));

  for (let i = 0; i < li.length; i++) {
    if (li[i] === 0) {
      alert('isi pak')
    } else {
      alert(
        isiTodoList.appendChild(li));
    }
  }

}

//or and