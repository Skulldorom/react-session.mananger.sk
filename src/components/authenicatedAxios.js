import axios from "axios";
import * as rax from "retry-axios";

// Creating our default axios instance for protected routes (requires a logged in user)
export const axiosAuth = (baseURL) =>
  axios.create({
    baseURL: baseURL,
  });

axiosAuth.defaults.raxConfig = {
  instance: axiosAuth,
  retry: 10,
  noResponseRetries: 5,
  onRetryAttempt: (err) => {
    const cfg = rax.getConfig(err);
    console.log(
      `Retry Protected attempt #${cfg.currentRetryAttempt} ${cfg.instance.defaults.baseURL}`
    );
  },
};
rax.attach(axiosAuth);

export function who() {
  return axiosAuth.get("/auth/who");
}

export function refresh() {
  return axiosAuth
    .get(`/auth/refresh`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
