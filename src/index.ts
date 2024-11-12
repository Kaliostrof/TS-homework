//Задание 1 -----------------------

/*
const totalPrice = (sum: {
  price: number;
  discount: number;
  isInstallment: boolean;
  months: number;
}): number => {
  const { price, discount, isInstallment, months } = sum;
  let total;
  if (isInstallment) {
    total = (price - (price * discount) / 100) / months;
  } else {
    total = price - (price * discount) / 100;
  }

  return total;
};

const price = totalPrice({
  price: 100000,
  discount: 25,
  isInstallment: true,
  months: 12,
});
console.log(price); // 6250
*/

//Задание 2 -----------------

/*
const posts = [
  {
    id: "62e69d5a5458aac0ed320b35",
    title: "id labore ex et quam laborum",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium",
  },
  {
    id: "62e69d5a5458aac0ed320b1c",
    title: "quo vero reiciendis velit similique earum",
    body: "est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam at voluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et",
  },
  {
    id: "62e69d5a5458aac0ed320b32",
    title: "odio adipisci rerum aut animi",
    body: "quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione",
  },
  {
    id: "62e69d5a5458aac0ed320b39",
    title: "alias odio sit",
    body: "non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati",
  },
  {
    id: "62e69d5a5458aac0ed320b53",
    title: "vero eaque aliquid doloribus et culpa",
    body: "harum non quasi et rationetempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et",
  },
  {
    id: "62e69d5a5458aac0ed320b19",
    title: "et fugit eligendi deleniti quidem qui sint nihil autem",
    body: "doloribus at sed quis culpa deserunt consectetur qui praesentiumaccusamus fugiat dictavoluptatem rerum ut voluptate autemvoluptatem repellendus aspernatur dolorem in",
  },
  {
    id: "62e69d5a5458aac0ed320b25",
    title: "repellat consequatur praesentium vel minus molestias voluptatum",
    body: "maiores sed dolores similique labore et inventore etquasi temporibus esse sunt id eteos voluptatem aliquamratione corporis molestiae mollitia quia et magnam dolor",
  },
];

interface Data {
  id: string;
  title: string;
  body: string;
}

interface Posts {
  byId: object;
  allIds: string[];
}

const normalizeData = (unnormalizedData: Data[]): Posts => {
  let byId: Object = {};
  const allIds: string[] = [];
  unnormalizedData.map((data: { id: string; title: string; body: string }) => {
    let obj = { [data.id]: data };
    Object.assign(byId, obj);
    allIds.push(data.id);
  });
  let posts: Posts = {
    byId: { ...byId },
    allIds: [...allIds],
  };
  return posts;
};

console.log(normalizeData(posts));
*/
/**
 * {
 *    byId: {
 *      62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
 *      62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
 *      ...
 *    },
 *    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
 * }
 */

//Задание 3 -----------------

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

const getData = async (url: string) => {
  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: undefined,
  }).then((res: Response): Promise<any> => res.json());
};

interface Obj {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

getData(COMMENTS_URL).then((data: Obj[]) => {
  let new_data: Obj[] = [];
  new_data = [...data];
  new_data.length = 10;

  new_data.map((obj: Obj) => {
    const { id, email } = obj;
    console.log(`ID: ${id}, Email: ${email}`);
  });
});

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */
