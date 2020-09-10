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

  isiTodoList.appendChild(li);

}