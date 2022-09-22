const app = require("./app");
const config = require("./app/config");

const PORT = config.app.part;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});