import Head from 'next/head'
import { useState } from 'react'
import { connectToFirebase } from '../utils/firebase';

interface ImageProps {
  avatar_name: string;
  image_url: string;
}

const Teste = () => {

  const [ImageProps, setImageProps] = useState<ImageProps>();

  async function createUser() {
    const { db } = connectToFirebase();
    await db.collection('users').add({
      username: "Anna Carolinne",
      avatar: {
        "avatar_username": ImageProps.avatar_name,
        "avatar_url": ImageProps.image_url,
      }
    })
  }

  async function upload(e: React.FormEvent<HTMLInputElement>) {
    const { storage } = connectToFirebase();

    const file = e.currentTarget.files[0];
    if (file) {

      let storageRef = storage.ref();
      const fileRef = storageRef.child(file?.name);
      fileRef.put(file).then(async (value) => {
        console.log("Upload complete");
        const avatar_name = value.ref.name;
        console.log(avatar_name);
        const image_url: string = await value.ref.getDownloadURL();
        setImageProps({
          avatar_name,
          image_url,
        });
      });
    }

  }

  async function deleteFile() {
    const { db, storage } = connectToFirebase();
    const user = await db.collection('users').where('username', '==', 'Anna Carolinne').get();
    const docRef = db.collection('users').doc(user.docs[0].id);
    const avatar_username = (await docRef.get()).data()['avatar']['avatar_username'];

    if (avatar_username != "") {

      const storageRef = storage.ref();
      const fileRef = storageRef.child(avatar_username);
      fileRef.delete().then(() => {
        console.log('Delete sucess');
        docRef.update({
          avatar: {
            avatar_username: "",
            avatar_url: "",
          }
        })
      })
      return;
    }
    console.log("Avatar not found!")

  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <button onClick={createUser}>
        Adicionar User
      </button >
      <button>
        <input type="file" onChange={upload} onInput={() => console.log("Teste")} />
        Upload
      </button>
      <button onClick={deleteFile}>
        Delete file
      </button>
    </div>
  )
}

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>PhotoSea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello</h1>
    </div>
  );
}


export default Home;