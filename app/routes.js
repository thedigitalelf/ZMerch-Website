import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route('/asset/zlahaj', "routes/asset-zlahaj.jsx"),
  // route('/asset/bread', "routes/bread.jsx"),
];
