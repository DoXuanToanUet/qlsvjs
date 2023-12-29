
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
      update =false
      check = localStorage.getItem('data')
      // console.log(check);
      if (check == null && update){
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
            location.reload();
      }


      // console.log(data);
      // console.log(masv.value);


      // formValidation();
});


// hien thi sinh vien
var tasks = document.querySelector("#dssv tbody");
var dssvData = JSON.parse(localStorage.getItem('data'))

function getdata(dssvData){
      dssvData.map(function(value,index){
            // console.log(index);
            // ind = index++;
            return (tasks.innerHTML += `
            <tr>
                  <td scope="row"></td>
                  <td>${value.masv}</td>
                  <td>${value.hoten}</td>
                  <td>${value.cmnd}</td>
                  <td>${value.email}</td>
                  <td>${value.phone}</td>
                  <td onclick="editsv(${index})">Edit</td>
                  <td onclick="delsv(${index})">Delete</td>
            </tr>
            `

            )

      })

}
getdata(dssvData);
function  delsv(id){
      /*
      Tìm trong local vị trí index và lấy ra
      sau đó xóa trong local rồi cập nhập lại
      */
      getsv = JSON.parse(localStorage.getItem('data'));

      getsv.splice(getsv[id],1)
      localStorage.setItem("data", JSON.stringify(getsv));
      // location.reload();
      getdata(getsv);
      location.reload();
      console.log(getsv);
}

function editsv(id, data){
      // khi chon data se fill vao form va
      getsv = JSON.parse(localStorage.getItem('data'));
      masv.value = getsv[id].masv
       hoten.value =  getsv[id].hoten
      cmnd.value =  getsv[id].cmnd
       email.value =  getsv[id].email
       phone.value =  getsv[id].phone
       upd ={
            masv: masv.value,
            hoten: hoten.value,
            cmnd: cmnd.value,
            email: email.value,
            phone: phone.value,
      }
       updatesv(id,upd)
}
// console.log(dssvData);

// console.log(hoten);

