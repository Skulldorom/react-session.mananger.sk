import { ClientJS } from "clientjs";

export default function getDeviceFingerprint() {
  if (localStorage.getItem("deviceFingerprint"))
    return localStorage.getItem("deviceFingerprint");

  const client = new ClientJS();
  const fingerprint = client.getFingerprint();
  localStorage.setItem("deviceFingerprint", fingerprint);
  return fingerprint;
}
