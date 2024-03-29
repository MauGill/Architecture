body {
  margin: 0;
  padding: 0;
  font-family: "Raleway", sans-serif; }
  body .header {
    background: url(../img/Header.jpg);
    background-size: cover;
    background-attachment: fixed;
    background-position: top;
    display: flex;
    justify-content: center;
    background-position-y: -6px;
    height: 100vh; }
    body .header .nav-var {
      display: flex;
      width: 100%;
      justify-content: space-between;
      position: fixed;
      margin: 0px 20px 20px 20px;
      z-index: 1;
      align-items: center;
      transition: 0.6s; }
      body .header .nav-var .logo {
        min-width: fit-content;
        margin-left: 45px;
        color: #000; }
        body .header .nav-var .logo a {
          cursor: pointer;
          color: #000;
          text-decoration: none;
          font-weight: 300;
          font-size: 25px;
          margin-top: 20px; }
      body .header .nav-var .nav-list {
        list-style: none;
        display: flex;
        font-weight: 300;
        margin-left: 15vh; }
        body .header .nav-var .nav-list li {
          font-size: large;
          box-shadow: 0px 2px 0 -1px #0000001e;
          margin-left: 10vh; }
        body .header .nav-var .nav-list a {
          color: #000;
          text-decoration: none; }
        body .header .nav-var .nav-list li::after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: #000;
          transition: width 0.3s; }
        body .header .nav-var .nav-list li:hover::after {
          width: 100%;
          transition: width 0.3s; }
      body .header .nav-var .mob-header {
        display: flex;
        align-items: center; }
        body .header .nav-var .mob-header .social-widgets {
          display: flex;
          justify-content: end;
          padding: 21px 45px 30px 30px;
          visibility: hidden; }
          body .header .nav-var .mob-header .social-widgets a {
            font-size: large;
            width: 35px;
            text-decoration: none;
            color: #000; }
      body .header .nav-var .mobile-menu {
        display: none;
        cursor: pointer; }
        body .header .nav-var .mobile-menu div {
          width: 25px;
          height: 3px;
          color: #000;
          margin: 5px;
          background: #000;
          transition: all 0.3s ease; }
    body .header .cont1 {
      width: 85%;
      height: 50%;
      position: sticky;
      top: 40vh; }
      body .header .cont1 .writ {
        margin-bottom: 90px; }
        body .header .cont1 .writ h2 {
          font-weight: 400;
          font-size: x-large;
          color: #000; }
          body .header .cont1 .writ h2 .typed .weare {
            font-weight: 400;
            color: #000;
            background-color: #584b4b57;
            font-style: normal;
            font-size: larger; }
      body .header .cont1 .budget {
        box-shadow: 0px 0px 0px 0.6px #fff;
        padding: 5px;
        width: max-content;
        transition: all 0.3s ease; }
        body .header .cont1 .budget a {
          text-decoration: none;
          color: #000;
          font-size: unset;
          transition: all 0.3s ease; }
        body .header .cont1 .budget a.active {
          color: #fff;
          transition: all 0.3s ease; }
      body .header .cont1 .budget.active {
        background-color: #584b4b57;
        padding: 8px;
        transition: all 0.3s ease; }

@media screen and (max-width: 700px) {
  body .header .cont1 {
    top: 30vh; }
  body .header .nav-var {
    padding-top: 10px;
    height: 7vh; }
    body .header .nav-var .mob-header.active {
      transform: translateX(0vh);
      transition: all 0.8s ease;
      padding-top: 10px; }
    body .header .nav-var .mob-header {
      background-color: #fff;
      position: fixed;
      top: 0;
      right: 0;
      width: 60%;
      height: 80vh;
      transform: translateX(300%);
      transition: all 0.8s ease;
      flex-direction: column; }
      body .header .nav-var .mob-header .nav-list {
        flex-direction: column;
        transform: translateX(300%);
        transition: transform 0.3s ease-in-out;
        padding: 45px 30px 30px 30px;
        margin-left: 0px; }
        body .header .nav-var .mob-header .nav-list li {
          opacity: 0;
          transition: 0.5s ease-in-out;
          height: 50px;
          display: flex;
          align-items: center;
          margin-left: 0px; }
          body .header .nav-var .mob-header .nav-list li a {
            font-size: larger; }
      body .header .nav-var .mob-header .nav-list.active {
        transform: translateX(0vh);
        transition: 0.5s ease-in-out; }
      body .header .nav-var .mob-header .social-widgets {
        visibility: inherit;
        position: absolute;
        bottom: 0; }
        body .header .nav-var .mob-header .social-widgets a {
          cursor: pointer; }
    body .header .nav-var .mobile-menu {
      display: block;
      position: fixed;
      right: 20px; }
    body .header .nav-var .logo {
      z-index: 1;
      margin-left: 20px; }
      body .header .nav-var .logo a {
        font-size: larger; } }
@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(50px); }
  to {
    opacity: 1;
    transform: translateX(0); } }
.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px); }

.toggle .line2 {
  opacity: 0; }

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px); }

body .header .nav-var.sticky {
  background-color: #fffdfdcf; }

body .whoware {
  height: 90vh;
  display: flex;
  padding: 5%; }
  body .whoware .who {
    width: 50%;
    height: 50%;
    background-color: #fff;
    box-shadow: 0px 0px 10px 5px #a6a4a0;
    padding: 10px;
    opacity: 0.7;
    left: 5%;
    position: absolute;
    bottom: -60%; }
    body .whoware .who p {
      letter-spacing: 2px;
      text-transform: uppercase; }
  body .whoware .img1 {
    background: url(../img/img1.jpg);
    background-size: cover;
    width: 50%;
    height: 58vh;
    position: absolute;
    bottom: -110vh;
    margin: 10px 10px 10px 31px;
    display: flex;
    justify-content: center;
    left: 5%; }
    body .whoware .img1 p {
      position: absolute;
      bottom: -19vh;
      box-shadow: 0px 15px 0px -12px #c1bebc;
      font-size: xx-large;
      font-weight: 400; }
  body .whoware .line1 {
    position: absolute;
    z-index: -1;
    height: 112vh;
    background-color: #dcd7d3;
    right: 0;
    bottom: -112%;
    text-align: end;
    padding-right: 10vh;
    align-items: center;
    text-align: right;
    display: flex;
    padding-left: 10%; }
    body .whoware .line1 p1 {
      font-weight: 300; }
    body .whoware .line1 p2 {
      font-weight: 400; }
  body .whoware .line2 {
    z-index: -1;
    bottom: -120%;
    position: absolute;
    width: 100%;
    height: 45vh;
    background-color: #dcd7d3;
    z-index: -1;
    left: 0; }
    body .whoware .line2 p1 {
      visibility: hidden; }
    body .whoware .line2 p2 {
      visibility: hidden; }

@media screen and (max-width: 700px) {
  body {
    background-color: #dbd7d6; }
    body .whoware {
      display: flex;
      height: max-content;
      margin-top: 10%;
      justify-content: space-between;
      flex-direction: column;
      z-index: 2;
      text-align: right;
      padding: 0%;
      background-color: #dbd7d6; }
      body .whoware .who {
        width: 85%;
        height: max-content;
        padding: 10px;
        background-color: #fff;
        z-index: 0;
        bottom: inherit;
        left: inherit;
        position: inherit; }
        body .whoware .who p {
          font-size: larger; }
      body .whoware .img1 {
        background: url(../img/img1.jpg);
        background-size: cover;
        width: 100%;
        height: 35vh;
        position: inherit;
        bottom: inherit;
        justify-content: inherit;
        left: inherit;
        margin: inherit;
        z-index: 0;
        margin: -16px 0px 0px 0px; }
      body .whoware .line1 {
        top: 100%;
        right: 0;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 0vh;
        background: #dbd7d6;
        box-shadow: -5px 0px 5px 0px #a6a4a0;
        padding-right: inherit;
        display: inline-flex;
        align-items: inherit;
        text-align: inherit;
        padding-left: inherit; }
        body .whoware .line1 p1 {
          margin-top: 10px;
          text-align: center;
          width: 100%;
          visibility: hidden; }
        body .whoware .line1 p2 {
          writing-mode: tb;
          height: max-content;
          margin-top: -26px;
          width: 97%;
          visibility: hidden; }
      body .whoware .line2 {
        width: 100%;
        height: 5vh;
        top: 143%;
        background-color: #dbd7d6;
        z-index: 0;
        position: inherit;
        margin-top: 10px; }
        body .whoware .line2 p1 {
          visibility: inherit; }
        body .whoware .line2 p2 {
          visibility: inherit;
          font-size: larger;
          font-weight: 600; } }
body .top-btn {
  display: none;
  position: fixed;
  bottom: 0px;
  right: 5px;
  font-size: 26px;
  width: 50px;
  height: 50px;
  color: #333;
  cursor: pointer;
  outline: none;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-property: background-color, color;
  background-color: transparent;
  border-color: transparent;
  z-index: 1; }
body .top-btn:hover {
  color: #fff; }
body .top-btn:focus {
  color: #fff; }

/* Animations */
.btnEntrance {
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation-name: btnEntrance; }

@keyframes btnEntrance {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0); }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0); } }
.btnExit {
  animation-duration: 0.25s;
  animation-fill-mode: both;
  animation-name: btnExit; }

@keyframes btnExit {
  from {
    opacity: 1; }
  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0); } }
body .services {
  height: 100vh;
  text-align: center;
  margin-top: 10%; }
  body .services h2 {
    font-size: xx-large;
    font-weight: 500;
    color: #676767; }
  body .services h4 {
    font-weight: 400;
    font-size: x-large;
    margin-bottom: -25px; }

/*# sourceMappingURL=estilo.cs.map */
