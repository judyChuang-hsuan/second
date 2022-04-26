export function Login() {
  return new Promise((res) => {
    setTimeout(res({ name: "Edward", token: "AOQGKICVOGJANGO" }), 1000);
  });
}

export function Logout() {
  return new Promise((res) => {
    setTimeout(res(true), 1000);
  });
}

export const data = [
  {
    id: 1,
    name: "product 1",
  },
  {
    id: 2,
    name: "product2",
  },
  {
    id: 3,
    name: "product3",
  },
  {
    id: 4,
    name: "product4",
  },
  {
    id: 5,
    name: "product5",
  },
];
