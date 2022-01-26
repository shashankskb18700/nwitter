import { collection, addDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { authService, dbService } from "../fbase";

const Home = () => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getNweets();

    dbService.onSnapshot(
      dbService.collection(dbService.getFirestore(), "nweets"),
      (snapshot) => {
        console.log(snapshot.docs);
      }
    );
  }, []);

  const onlogOutClick = () => {
    const auth = authService.getAuth();
    authService.signOut(auth);
    history.push("/auth");
  };

  const getNweets = async () => {
    const dat = await dbService.getDocs(
      dbService.collection(dbService.getFirestore(), "nweets")
    );
    dat.forEach((val) => {
      const nweetObject = {
        ...val.data(),
        id: val.id,
      };
      setNweets((prev) => [nweetObject, ...prev]);
      // console.log(dat.forEach((e) => console.log(e.data())));
    });
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    // console.log(dbService.collection);
    // dbService.addDoc(collection(dbService, "nweet"));
    // const at = await addDoc(collection(dbService.Firestore(), "nwitt"));
    const d = await dbService.addDoc(
      dbService.collection(dbService.getFirestore(), "nweets"),
      {
        nweet,
        createdAt: Date.now(),
      }
    );
    console.log(d);
    // let a = dbService.getFirestore();
    // dbService.collection(a, "nwitt").
    // console.log(at);

    // const docRef =
    setNweet("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };

  console.log(nweets);
  return (
    <div>
      <div> HOME </div>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          vlaue={nweet}
          onChange={onChange}
          placeholder={"nweet"}
        />
        <button>nweet</button>
      </form>

      <div onClick={onlogOutClick}>logout</div>

      <div>
        {nweets.map((a) => (
          <div key={a.id}>
            <h4>{a.nweet}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
