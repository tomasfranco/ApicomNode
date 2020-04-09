const env = process.env.NODE_ENV || "dev";

const config = () => {
  switch (env) {
    case "dev":
      return {
        bd_string:
          "mongodb+srv://usuario_admin:usuario_admin@cluster0-udszt.mongodb.net/test?retryWrites=true&w=majority",
        jwt_pass: "batatafrita2019",
        jwt_expires: "7d",
      };

    case "hml":
      return {
        bd_string:
          "mongodb+srv://usuario_admin:usuario_admin@cluster0-udszt.mongodb.net/test?retryWrites=true&w=majority",
        jwt_pass: "batatafrita2019",
        jwt_expires: "7d",
      };

    case "prod":
      return {
        bd_string:
          "mongodb+srv://usuario_admin:usuario_admin@cluster0-udszt.mongodb.net/test?retryWrites=true&w=majority",
        jwt_pass: "batatafrita2019",
        jwt_expires: "7d",
      };
  }
};

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();
