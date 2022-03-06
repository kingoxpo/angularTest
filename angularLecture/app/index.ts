import "angular";
import "angular-animate";
// import "angular-route";
import "angular-ui-router";

import "./scripts/app.js";

// controllers
import "./scripts/controllers/MainController.js";
import "./scripts/controllers/home.js";
import "./scripts/controllers/app.login.js";
import "./scripts/controllers/findpwd.js";

// <!-- models -->
import "./scripts/models/login.js";

// <!-- services -->
import "./scripts/services/commonsvc.js";

// <!-- css -->
import "sweetalert/dist/sweetalert.min.js";
import "sweetalert/dist/sweetalert.css";

// <!-- bootstrap -->
import "./styles/bootstrap.css";
import "angular-ui-bootstrap/dist/ui-bootstrap-tpls.js";

// step 5 > 7번항목에 매개변수 commonsvc 추가하란 말이 누락되어있음
// angular-ui-router 0.4.2 특정 버전으로 설치해야함
// bootstrap tutorial 리포에 css 파일이 없는데 복사해서 사용하라는 문구있음 (수정 필요)
// task2 > step5 2번항목 npm install angular-bootstrap --save 이 아니라 npm install angular-ui-bootstrap --save 으로 수정해야함
// task 2 > step6 ui-grid tutorial 빠져있음(관련 내용 링크만 있을뿐)
