// Cấu hình Firebase cho ứng dụng web ...
const firebaseConfig = {
  apiKey: "AIzaSyCPfkyR55RbNAl4RlspNmWjcn0Z1GeTbXw",
  authDomain: "dung29-f2a28.firebaseapp.com",
  projectId: "dung29-f2a28",
  storageBucket: "dung29-f2a28.appspot.com",
  messagingSenderId: "323058148349",
  appId: "1:323058148349:web:3528845a976d3072392f94",
  measurementId: "G-WK49FVCWKY"
};
// Khởi tạo Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

// Tự động tải nhiệt độ-------------------------
database.ref("/TT_IoT/Temp").on("value", function (snapshot) {
  var nd = snapshot.val(); // Lấy giá trị nhiệt độ từ cơ sở dữ liệu
  document.getElementById("nhietdo").innerHTML = nd; // Cập nhật nhiệt độ trên trang web
  console.log(nd); // In nhiệt độ ra console
});

// Tự động tải độ ẩm-------------------------
database.ref("/TT_IoT/Humi").on("value", function (snapshot) {
  var da = snapshot.val(); // Lấy giá trị độ ẩm từ cơ sở dữ liệu
  document.getElementById("doam").innerHTML = da; // Cập nhật độ ẩm trên trang web
  console.log(da); // In độ ẩm ra console
});

// Tự động tải MSSV-------------------------
database.ref("/Thongtin/MSSV").on("value", function (snapshot) {
  var mssv = snapshot.val(); // Lấy giá trị mssv từ cơ sở dữ liệu
  document.getElementById("mssv").innerHTML = mssv; // Cập nhật mssv trên trang web
  console.log(mssv); // In mssv ra console
});

// Tự động tải MSSV-------------------------
database.ref("/Thongtin/Hoten").on("value", function (snapshot) {
  var hoten = snapshot.val(); // Lấy giá trị mssv từ cơ sở dữ liệu
  document.getElementById("hoten").innerHTML = hoten; // Cập nhật mssv trên trang web
  console.log(hoten); // In mssv ra console
});


// Cập nhật trạng thái đèn LED từ Firebase khi có thay đổi 
database.ref("/Den").on("value", function (snapshot) {
  if (snapshot.exists()) {
    var bulb_status = snapshot.val();

    // Đèn 01
    document.getElementById("d01_img").src = bulb_status["D1"] === "on" ? "./img/light_bulb_on.png" : "./img/light_bulb_off.png";
    
    // Đèn 02
    document.getElementById("d02_img").src = bulb_status["D2"] === "on" ? "./img/light_bulb_on.png" : "./img/light_bulb_off.png";
    
    // Đèn 03
    document.getElementById("d03_img").src = bulb_status["D3"] === "on" ? "./img/light_bulb_on.png" : "./img/light_bulb_off.png";
    
    // Đèn 04
    document.getElementById("d04_img").src = bulb_status["D4"] === "on" ? "./img/light_bulb_on.png" : "./img/light_bulb_off.png";

    // Đèn 05
    document.getElementById("d05_img").src = bulb_status["D5"] === "on" ? "./img/light_bulb_on.png" : "./img/light_bulb_off.png";

    // Đèn 06
    document.getElementById("d06_img").src = bulb_status["D6"] === "on" ? "./img/light_bulb_on.png" : "./img/light_bulb_off.png";

    // Đèn 07
    document.getElementById("d07_img").src = bulb_status["D7"] === "on" ? "./img/light_bulb_on.png" : "./img/light_bulb_off.png";

    // Đèn 08
    document.getElementById("d08_img").src = bulb_status["D8"] === "on" ? "./img/light_bulb_on.png" : "./img/light_bulb_off.png";
  }
});


// Cập nhật trạng thái đèn LED khi tải lại trang web-------
database.ref("/Den").get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    var bulb_status = snapshot.val();

    if (bulb_status["D1"] === "on")
      document.getElementById("d01_img").src = "./img/light_bulb_on.png";
    else
      document.getElementById("d01_img").src = "./img/light_bulb_off.png";

    if (bulb_status["D2"] === "on")
      document.getElementById("d02_img").src = "./img/light_bulb_on.png";
    else
      document.getElementById("d02_img").src = "./img/light_bulb_off.png";

      if (bulb_status["D3"] === "on")
        document.getElementById("d03_img").src = "./img/light_bulb_on.png";
      else
        document.getElementById("d03_img").src = "./img/light_bulb_off.png";
      

        if (bulb_status["D4"] === "on")
          document.getElementById("d04_img").src = "./img/light_bulb_on.png";
        else
          document.getElementById("d04_img").src = "./img/light_bulb_off.png";
          if (bulb_status["D5"] === "on")
            document.getElementById("d05_img").src = "./img/light_bulb_on.png";
          else
            document.getElementById("d05_img").src = "./img/light_bulb_off.png";

            if (bulb_status["D6"] === "on")
              document.getElementById("d06_img").src = "./img/light_bulb_on.png";
            else
              document.getElementById("d06_img").src = "./img/light_bulb_off.png";

              if (bulb_status["D7"] === "on")
                document.getElementById("d07_img").src = "./img/light_bulb_on.png";
              else
                document.getElementById("d07_img").src = "./img/light_bulb_off.png";

                if (bulb_status["D8"] === "on")
                  document.getElementById("d08_img").src = "./img/light_bulb_on.png";
                else
                  document.getElementById("d08_img").src = "./img/light_bulb_off.png";

    // Tiếp tục với các đèn còn lại
  } else {
    console.log("No data available!");
  }
});






// Đèn 01-------------------------------------------------------
var d01_on = document.getElementById("d01_on"); // Khai báo biến nút bật đèn 01
var d01_off = document.getElementById("d01_off"); // Khai báo biến nút tắt đèn 01

d01_on.onclick = function () {
  document.getElementById("d01_img").src = "./img/light_bulb_on.png"; // Cập nhật hình ảnh đèn 01 bật
  firebase.database().ref("/Den").update({
    "D1": "on" // Cập nhật trạng thái đèn 01 là "on" (bật)
  });
};

d01_off.onclick = function () {
  document.getElementById("d01_img").src = "./img/light_bulb_off.png"; // Cập nhật hình ảnh đèn 01 tắt
  firebase.database().ref("/Den").update({
    "D1": "off" // Cập nhật trạng thái đèn 01 là "off" (tắt)
  });
};
// Đèn 01 (Kết thúc)-----------------------------------------------------

// Đèn 02-------------------------------------------------------
var d02_on = document.getElementById("d02_on"); // Khai báo biến nút bật đèn 02
var d02_off = document.getElementById("d02_off"); // Khai báo biến nút tắt đèn 02

d02_on.onclick = function () {
  document.getElementById("d02_img").src = "./img/light_bulb_on.png";
  firebase.database().ref("/Den").update({
    "D2": "on"
  });
};

d02_off.onclick = function () {
  document.getElementById("d02_img").src = "./img/light_bulb_off.png";
  firebase.database().ref("/Den").update({
    "D2": "off"
  });
};
// Đèn 02 (Kết thúc)-----------------------------------------------------

// Đèn 03-------------------------------------------------------
var d03_on = document.getElementById("d03_on"); // Khai báo biến nút bật đèn 03
var d03_off = document.getElementById("d03_off"); // Khai báo biến nút tắt đèn 03

d03_on.onclick = function () {
  document.getElementById("d03_img").src = "./img/light_bulb_on.png"; // Cập nhật hình ảnh đèn 03 bật

  firebase.database().ref("/Den").update({
    "D3": "on" // Cập nhật trạng thái đèn 03 trong cơ sở dữ liệu là bật
  });
};

d03_off.onclick = function () {
  document.getElementById("d03_img").src = "./img/light_bulb_off.png"; // Cập nhật hình ảnh đèn 03 tắt

  firebase.database().ref("/Den").update({
    "D3": "off" // Cập nhật trạng thái đèn 03 trong cơ sở dữ liệu là tắt
  });
};
// Đèn 03 (Kết thúc)-----------------------------------------------------

// Đèn 04-------------------------------------------------------
var d04_on = document.getElementById("d04_on"); // Khai báo biến nút bật đèn 04
var d04_off = document.getElementById("d04_off"); // Khai báo biến nút tắt đèn 04

d04_on.onclick = function () {
  document.getElementById("d04_img").src = "./img/light_bulb_on.png"; // Cập nhật hình ảnh đèn 03 bật

  firebase.database().ref("/Den").update({
    "D4": "on" // Cập nhật trạng thái đèn 03 trong cơ sở dữ liệu là bật
  });
};

d04_off.onclick = function () {
  document.getElementById("d04_img").src = "./img/light_bulb_off.png"; // Cập nhật hình ảnh đèn 03 tắt

  firebase.database().ref("/Den").update({
    "D4": "off" // Cập nhật trạng thái đèn 03 trong cơ sở dữ liệu là tắt
  });
};
// Đèn 04 (Kết thúc)-----------------------------------------------------

// Đèn 05-------------------------------------------------------
var d05_on = document.getElementById("d05_on"); // Khai báo biến nút bật đèn 04
var d05_off = document.getElementById("d05_off"); // Khai báo biến nút tắt đèn 04

d05_on.onclick = function () {
  document.getElementById("d05_img").src = "./img/light_bulb_on.png"; // Cập nhật hình ảnh đèn 04 bật

  firebase.database().ref("/Den").update({
    "D5": "on" // Cập nhật trạng thái đèn 04 trong cơ sở dữ liệu là bật
  });
};

d05_off.onclick = function () {
  document.getElementById("d05_img").src = "./img/light_bulb_off.png"; // Cập nhật hình ảnh đèn 04 tắt

  firebase.database().ref("/Den").update({
    "D5": "off" // Cập nhật trạng thái đèn 04 trong cơ sở dữ liệu là tắt
  });
};
// Đèn 04 (Kết thúc)-----------------------------------------------------

// Đèn 04-------------------------------------------------------
var d06_on = document.getElementById("d06_on"); // Khai báo biến nút bật đèn 04
var d06_off = document.getElementById("d06_off"); // Khai báo biến nút tắt đèn 04

d06_on.onclick = function () {
  document.getElementById("d06_img").src = "./img/light_bulb_on.png"; // Cập nhật hình ảnh đèn 04 bật

  firebase.database().ref("/Den").update({
    "D6": "on" // Cập nhật trạng thái đèn 04 trong cơ sở dữ liệu là bật
  });
};

d06_off.onclick = function () {
  document.getElementById("d06_img").src = "./img/light_bulb_off.png"; // Cập nhật hình ảnh đèn 04 tắt

  firebase.database().ref("/Den").update({
    "D6": "off" // Cập nhật trạng thái đèn 04 trong cơ sở dữ liệu là tắt
  });
};
// Đèn 04 (Kết thúc)-----------------------------------------------------

// Đèn 04-------------------------------------------------------
var d07_on = document.getElementById("d07_on"); // Khai báo biến nút bật đèn 04
var d07_off = document.getElementById("d07_off"); // Khai báo biến nút tắt đèn 04

d07_on.onclick = function () {
  document.getElementById("d07_img").src = "./img/light_bulb_on.png"; // Cập nhật hình ảnh đèn 04 bật

  firebase.database().ref("/Den").update({
    "D7": "on" // Cập nhật trạng thái đèn 04 trong cơ sở dữ liệu là bật
  });
};

d07_off.onclick = function () {
  document.getElementById("d07_img").src = "./img/light_bulb_off.png"; // Cập nhật hình ảnh đèn 04 tắt

  firebase.database().ref("/Den").update({
    "D7": "off" // Cập nhật trạng thái đèn 04 trong cơ sở dữ liệu là tắt
  });
};
// Đèn 04 (Kết thúc)-----------------------------------------------------

// Đèn 04-------------------------------------------------------
var d08_on = document.getElementById("d08_on"); // Khai báo biến nút bật đèn 04
var d08_off = document.getElementById("d08_off"); // Khai báo biến nút tắt đèn 04

d08_on.onclick = function () {
  document.getElementById("d08_img").src = "./img/light_bulb_on.png"; // Cập nhật hình ảnh đèn 04 bật

  firebase.database().ref("/Den").update({
    "D8": "on" // Cập nhật trạng thái đèn 04 trong cơ sở dữ liệu là bật
  });
};

d08_off.onclick = function () {
  document.getElementById("d08_img").src = "./img/light_bulb_off.png"; // Cập nhật hình ảnh đèn 04 tắt

  firebase.database().ref("/Den").update({
    "D8": "off" // Cập nhật trạng thái đèn 04 trong cơ sở dữ liệu là tắt
  });
};
// Đèn 04 (Kết thúc)-----------------------------------------------------