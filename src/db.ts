const users = [
  {
      id: 'e4aaa8cd-e954-4758-90e9-70c12df9a079',
      name: 'Garrison Heller PhD',
      email: "Eloisa_Turner@yahoo.com",
      age: 69
  },
  {
      id: '4519dcf9-3f26-4a53-8185-f31e7e1f75a7',
      name: 'Chaim Jones',
      email: "Julio45@yahoo.com",
      age: 87
  },
  {
      id: '9767de1f-6134-4e48-b632-62e5c4f473e2',
      name: 'Alvina Kuhic PhD',
      email: "Elias.Yost34@yahoo.com",
      age: 12
  },
  {
      id: 'a1bcd6dc-0a1d-44d9-a4af-d63e30ada7a7',
      name: 'Trevor Ankunding',
      email: "Bill_Daniel4@yahoo.com",
      age: 16
  },
  {
      id: '56f917c4-469a-4e06-ae0c-1bdc874c25aa',
      name: 'Wilfrid Bogan',
      email: "Lenore75@hotmail.com",
      age: 57
  }
]

const posts = [
  {
      id: 'e3dd617e-03cd-4aa9-ab2f-7e0987cdd38b',
      title: 'Plastic',
      body: 'orchid Home magenta',
      published: false,
      author: 'e4aaa8cd-e954-4758-90e9-70c12df9a079'
  },
  {
      id: '2ba40b8a-8a8e-490b-bc4d-6716d41fc899',
      title: 'metrics',
      body: 'killer USB granular',
      published: true,
      author: 'e4aaa8cd-e954-4758-90e9-70c12df9a079'
  },
  {
      id: 'f5559f8c-3dcd-4fec-b0a8-26869e8b8603',
      title: 'Lead',
      body: 'CFP Franc multi-byte Berkshire',
      published: false,
      author: '4519dcf9-3f26-4a53-8185-f31e7e1f75a7'
  },
  {
      id: '8e839232-342e-474a-b262-2785c485567b',
      title: 'copying',
      body: 'index',
      published: false,
      author: '4519dcf9-3f26-4a53-8185-f31e7e1f75a7'
  },
  {
      id: 'db64d6b0-83a3-4b53-82d5-cd12fa8ad630',
      title: 'withdrawal',
      body: 'Planner Triple-buffered',
      published: true,
      author: '9767de1f-6134-4e48-b632-62e5c4f473e2'
  },
  {
      id: '96fcfec9-44ee-4fc7-84bc-a008b8997113',
      title: 'Investment Account',
      body: 'Central African Republic Grass-roots TCP',
      published: true,
      author: 'a1bcd6dc-0a1d-44d9-a4af-d63e30ada7a7'
  },
]

const comments = [
  {
      id: '1429fd5f-9cb3-4720-9636-d98be492ddd6',
      text: 'SDD',
      author: '56f917c4-469a-4e06-ae0c-1bdc874c25aa',
      post: '96fcfec9-44ee-4fc7-84bc-a008b8997113'
  },
  {
      id: '0e401259-48d8-477a-bc11-15213f23350e',
      text: 'circuit Lebanese Pound',
      author: '56f917c4-469a-4e06-ae0c-1bdc874c25aa',
      post: 'db64d6b0-83a3-4b53-82d5-cd12fa8ad630'
  },
  {
      id: 'ad3f565b-4c0b-44d4-b2c9-aa149d0f9bca',
      text: 'Small Concrete Salad Maine',
      author: '9767de1f-6134-4e48-b632-62e5c4f473e2',
      post: 'f5559f8c-3dcd-4fec-b0a8-26869e8b8603'
  },
  {
      id: '8cbe762a-1f9a-43db-a030-93c329779955',
      text: 'data-warehouse',
      author: '9767de1f-6134-4e48-b632-62e5c4f473e2',
      post: '2ba40b8a-8a8e-490b-bc4d-6716d41fc899'
  },
  {
      id: '99b16613-8817-4b8a-864c-3eddf031310c',
      text: 'Refined Concrete Gloves global salmon',
      author: '9767de1f-6134-4e48-b632-62e5c4f473e2',
      post: '2ba40b8a-8a8e-490b-bc4d-6716d41fc899'
  }
]

export const db = {
  users,
  posts,
  comments
}