const axios = require("axios");

export default function getNodesService() {
  axios.get().then(r => r.data);
}
