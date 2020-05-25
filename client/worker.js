console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by Yan Karlo",
    icon: "https://cdn2.iconfinder.com/data/icons/social-messaging-productivity-6/128/world-click-512.png"
  });
});