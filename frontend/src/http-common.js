import axios from "axios";

export default axios.create({
//   baseURL: "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/restaurant-reviews-evuay/service/restaurants/incoming_webhook/",
baseURL: "http://localhost:5000/api/v1/restaurants",
  headers: {
    "Content-type": "application/json"
  }
});