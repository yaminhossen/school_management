const express = require("express");
// const user_routes = require("../app/api/user/user_designations/router/routes");
const user_demo_routes = require("../app/api/user_demo/router/routes");
// const user_infos = require("../app/api/user/user_infos/router/routes");
// const user_work_departments = require("../app/api/user/user_work_departments/router/routes");
// const user_work_users = require("../app/api/user/user_work_users/router/routes");
// const user_works = require("../app/api/user/user_works/router/routes");
const users = require("../app/api/user/users/router/routes");

const router = express.Router();

// user routes

// router.use(user_routes());
// router.use(user_infos());
// router.use(user_work_departments());
// router.use(user_work_users());
// router.use(user_works());
router.use(users());

// demo user
router.use(user_demo_routes());




module.exports = () => router;