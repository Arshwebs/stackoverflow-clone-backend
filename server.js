const app = require("./app");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
app.listen(port, () => console.log(`server is running on port ${port}`));
