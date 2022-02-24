export const users = [
  {
    id: "1",
    user_info: {
      username: "admin",
      password: "admin",
      avatar: "https://i.pravatar.cc/300",
      bio: "I am a software developer",
    },
    personal_info: {
      first_name: "John",
      last_name: "Doe",
      birthday: "1980-01-01",
    },
    contact_info: [
      {
        type: "email",
        value: "john@gmail.com",
      },
      {
        type: "phone",
        value: "1234567890",
      },
      {
        type: "instagram",
        value: "john_2000",
      },
      {
        type: "facebook",
        value: "john.doe",
      },
    ],
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      country: "USA",
      zip: "10001",
      country_code: "us",
    },
    contacts: ["5", "2", "3"],
    observers: ["4", "2", "3"],
    groups: [
      {
        id: "1",
        name: "Friends",
        contacts: ["5", "2", "3"],
        description:
          "Friends of John Doe and more and more and more and more...",
      },
      {
        id: "3",
        name: "Work",
        contacts: ["2", "3"],
        description: "Work of John Doe",
      },
    ],
    notifications: [
      {
        id: "1",
        sender: "2",
        type: "contact_request",
        status: "unread",
        date_time: "2022-01-16T04:00:00.000Z",
      },
      {
        id: "2",
        sender: "3",
        type: "birthday",
        status: "unread",
        date_time: "2022-01-17T04:00:00.000Z",
      },
      {
        id: "3",
        sender: "4",
        type: "contact_share_request",
        status: "read",
        date_time: "2021-12-01T04:00:00.000Z",
      },
      {
        id: "4",
        sender: "5",
        type: "contact_shared",
        status: "read",
        date_time: "2021-11-05T04:00:00.000Z",
      },
    ],
  },
  {
    id: "2",
    user_info: {
      username: "admin",
      password: "admin",
      avatar: "https://i.pravatar.cc/300",
      bio: "I am a software developer",
    },
    personal_info: {
      first_name: "Enmanuel",
      last_name: "Balcacer",
      birthday: "1998-10-30",
    },
    contact_info: [
      {
        type: "email",
        value: "enma@gmail.com",
      },
      {
        type: "phone",
        value: "1234567890",
      },
      {
        type: "instagram",
        value: "e.balcacer_",
      },
      {
        type: "facebook",
        value: "enmanuel.balcacer",
      },
    ],
    address: {
      street: "1 Main St",
      city: "New York",
      state: "NY",
      country: "USA",
      zip: "10001",
      country_code: "us",
    },
    contacts: ["5", "1", "3"],
    observers: ["1", "2", "3"],
    groups: [
      {
        id: "1",
        name: "Friends",
        contacts: ["5", "1"],
        description: "Friends Group",
      },
      {
        id: "2",
        name: "Work",
        contacts: ["1", "3"],
        description: "Work Group",
      },
    ],
    notifications: [
      {
        id: "1",
        sender: "1",
        type: "contact_request",
        status: "unread",
        date_time: "2020-01-01T00:00:00.000Z",
      },
    ],
  },
  {
    id: "3",
    user_info: {
      username: "admin",
      password: "admin",
      avatar: null,
      bio: "I am a software developer",
    },
    personal_info: {
      first_name: "Jose",
      last_name: "Balcacer",
      birthday: "1998-10-30",
    },
    contact_info: [
      {
        type: "email",
        value: "jose@gmail.com",
      },
      {
        type: "phone",
        value: "1234567890",
      },
      {
        type: "instagram",
        value: "joss_blr",
      },
      {
        type: "facebook",
        value: "joss.balcacer",
      },
    ],
    address: {
      street: "1 Main St",
      city: "New York",
      state: "NY",
      country: "USA",
      zip: "10001",
      country_code: "us",
    },
    contacts: ["5", "1", "2", "4"],
    observers: ["1", "2", "3"],
    groups: [
      {
        id: "1",
        name: "Friends",
        contacts: ["5", "1"],
        description: "Friends Group",
      },
      {
        id: "2",
        name: "Family",
        contacts: ["2", "4"],
        description: "Family Group",
      },
      {
        id: "3",
        name: "Work",
        contacts: ["4", "1", "2"],
        description: "Work Group",
      },
    ],
    notifications: [
      {
        id: "1",
        sender: "1",
        type: "contact_request",
        status: "unread",
        date_time: "2020-01-01T00:00:00.000Z",
      },
    ],
  },
  {
    id: "4",
    user_info: {
      username: "admin",
      password: "admin",
      avatar: "https://i.pravatar.cc/300",
      bio: "I am a software developer",
    },
    personal_info: {
      first_name: "Alex",
      last_name: "Sanchez",
      birthday: "1999-10-03",
    },
    contact_info: [
      {
        type: "email",
        value: "alex.sanz@gmail.com",
      },
      {
        type: "phone",
        value: "1234567890",
      },
      {
        type: "instagram",
        value: "alex.sanz",
      },
      {
        type: "facebook",
        value: "alex.sanz",
      },
    ],
    address: {
      street: "13 Stone St",
      city: "New York",
      state: "NY",
      country: "USA",
      zip: "10001",
      country_code: "us",
    },
    contacts: ["3", "1", "5"],
    observers: ["5", "2", "3"],
    groups: [],
    notifications: [
      {
        id: "1",
        sender: "1",
        type: "contact_request",
        status: "unread",
        date_time: "2020-01-01T00:00:00.000Z",
      },
    ],
  },
  {
    id: "5",
    user_info: {
      username: "admin",
      password: "admin",
      avatar: "https://i.pravatar.cc/300",
      bio: "I am a software developer",
    },
    personal_info: {
      first_name: "Greg",
      last_name: "Doe",
      birthday: "1998-04-23",
    },
    contact_info: [
      {
        type: "email",
        value: "gregdoe@gmail.com",
      },
      {
        type: "phone",
        value: "1234567890",
      },
      {
        type: "instagram",
        value: "gree_do",
      },
      {
        type: "facebook",
        value: "gree.doe",
      },
    ],
    address: {
      street: "3 Black Yellow St",
      city: "New York",
      state: "NY",
      country: "USA",
      zip: "10001",
      country_code: "us",
    },
    contacts: ["2", "1", "3"],
    observers: ["1", "2", "3"],
    groups: [
      {
        id: "1",
        name: "Friends",
        contacts: ["2", "1"],
        description: "Friends Group",
      },
      {
        id: "2",
        name: "Work",
        contacts: ["1", "3"],
        description: "Work Group",
      },
    ],
    notifications: [
      {
        id: "1",
        sender: "1",
        type: "contact_request",
        status: "unread",
        date_time: "2020-01-01T00:00:00.000Z",
      },
    ],
  },
];