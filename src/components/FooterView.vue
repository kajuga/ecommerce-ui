<template>
  <footer>
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-3 col-6">
          <ul style="list-style-type: none">
            <li className="text-light font-weight-bold pb-2">Get to Know Us</li>
            <li><a className="footer-link font-weight-light" href="#">About Us</a></li>
          </ul>
        </div>

        <div className="col-md-3 col-6">
          <ul style="list-style-type: none">
            <li className="text-light font-weight-bold">Connect With Us</li>
            <li><a className="footer-link font-weight-light" href="#">Telegramm</a><br></li>
          </ul>
        </div>

        <div className="col-md-3 col-6">
          <ul style="list-style-type: none">
            <li className="text-light font-weight-bold">Make Money With Us</li>
            <li><a className="footer-link font-weight-light" href="#">Sell with Us</a></li>
          </ul>
        </div>

        <div className="col-md-3 col-6">
          <ul style="list-style-type: none">
            <li className="text-light font-weight-bold">Let Us Help You</li>
            <li><a className="footer-link font-weight-light" href="#">Help</a><br></li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="text-center py-5">
            <img id="logo" src="../assets/icon.png"/>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterView"
}
</script>

<style>
footer {
  margin-top: 100px;
  background-color: #232F3E;
  font-size: 16px;
}

li {
  padding-left: 0;
  padding-bottom: 10px;
}

a {
  text-decoration: none;
}

.footer-link {
  color: #DDD;
}

#logo {
  width: 150px;
}

footer {
  font-family: 'Roboto', sans-serif;
}


</style>