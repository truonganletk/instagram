# Instagram Clone

Building an Instagram Wep app clone using Reactjs and Firebase. (inspired by UI of Web version 2022)

# Live demo

[Link Demo](https://instagram-delta-eight.vercel.app/)

You can use this account for testing or create a new one.

```sh
#username
demo@test.com

#password
123456789
```

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
  - Infinite scroll
  - Skeleton
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
yarn install
```

3. Create a .env file. Replace values with yours !!!

```sh
REACT_APP_NODE_ENV = ''
REACT_APP_FIREBASE_API_KEY = ''
REACT_APP_FIREBASE_AUTH_DOMAIN = ''
REACT_APP_FIREBASE_PROJECT_ID = ''
REACT_APP_FIREBASE_STORAGE_BUCKET = ''
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = ''
REACT_APP_FIREBASE_APP_ID = ''
REACT_APP_FIREBASE_MEASUREMENT_ID = ''
```

4. Now run the app

```sh
npm start
```
