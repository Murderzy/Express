import Router from "express";
import path from "path";
import fs from "fs";
const __dirname = path.resolve();
const router = Router();

router
  .route("/")
  .get((req, res) => {
    res.render("index.ejs");
  })


router
  .route("/news")
  .get((req, res) => {
    res.render("news.ejs");
  });

router
  .route("/about")
  .get((req, res) => {
    res.render("about.ejs");
  });
 
  router
  .route("/login")
  .get((req, res) => {
    res.render("log.ejs");
  })
  .post( function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    fs.writeFileSync("log.txt","Login: "+ request.body.userLogin + " Password: " + request.body.userPass);
    response.send(`${request.body.userLogin} `);
});

  router
  .route("/reg")
  .get((req, res) => {
    res.render("reg.ejs");
  })
  .post( function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    fs.writeFileSync("reg.txt","Login: "+ request.body.userLogin + " Password: " + request.body.userPass + " Email: "+ request.body.userEmail);
    response.send(`${request.body.userLogin} `);
});

export default router;
