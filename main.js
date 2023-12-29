
/*
// Logic
// Luu du lieu vao localstrorage su dung cau lenh setLocal
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");
+ khi submit form lay du lieu onclick
+ data = [], dung ham push()
+ khoi tao local sau khi click thi se them du lieu

 */


// Add sinh vien
let masv = document.getElementById('masv');
let hoten = document.getElementById('hoten');
var cmnd = document.getElementById('cmnd');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var add = document.getElementById('add');
// localStorage.setItem("sinhvien", "");
let form = document.getElementById("form");
let data = [];
add.addEventListener("click", (e) => {
      e.preventDefault();
      // check if exist localstoreage

      check = localStorage.getItem('data')
      // console.log(check);
      if (check == null){
            data.push({
                  masv: masv.value,
                  hoten: hoten.value,
                  cmnd: cmnd.value,
                  email: email.value,
                  phone: phone.value,
            });

            localStorage.setItem("data", JSON.stringify(data));

      } else{
            let check2 = [];
            check2 = JSON.parse(localStorage.getItem('data'));

            console.log(check2);
            data1 ={
                  masv: masv.value,
                  hoten: hoten.value,
                  cmnd: cmnd.value,
                  email: email.value,
                  phone: phone.value,
            }
            check2.push(data1)

            localStorage.setItem("data", JSON.stringify(check2));
      }

      // console.log(data);
      // console.log(masv.value);


      // formValidation();
});


// hien thi sinh vien
var tasks = document.querySelector("#dssv tbody");
var dssvData = JSON.parse(localStorage.getItem('data'))

dssvData.map(function(value,index){
      return (tasks.innerHTML += `
      <tr>
            <td scope="row">${++index}</td>
            <td>${value.masv}</td>
            <td>${value.hoten}</td>
            <td>${value.cmnd}</td>
            <td>${value.email}</td>
            <td>${value.phone}</td>
      </tr>
      `

      )

})


// console.log(dssvData);

// console.log(hoten);
