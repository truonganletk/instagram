# Instagram Clone

Building an Instagram Wep app clone using Reactjs and Firebase. (inspired by UI of Web version 2022)

# [Live demo](https://instagram-f4e13.web.app/)

# Tech Stack:

- `Reactjs`
- `TailwindCSS`
- `Formik` / `Yup`
- `Firebase`

# Features

- Authorization / Validation
  - Register
  - Login / Logout
  - Update Info / Change password
- Post
  - CRUD
  - Like / Unlike
  - Comment, Reply (delete & update function are not yet handled)
- Realtime Chat
- Search (only users)
- Dark mode
- Follow / Unfollow
- Notification

# Usage

1. Clone repo or download it.
2. First install all dependencies

```sh
#with npm
npm install

#or with yarn
yarn
```

3. Create a src/firebase-config.js file. Insert the following codes. Replace values with yours !!!

```sh
const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  projectId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  measurementId: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
};
```

4. Start the server

```sh
npm run dev
```

5. Now run the app

```sh
npm start
```
