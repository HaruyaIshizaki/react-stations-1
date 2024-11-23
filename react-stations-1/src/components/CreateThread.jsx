import { useState } from "react";
import styles from "./css/CreateThread.module.css";
import { useNavigate, Link } from "react-router-dom";

export const CreateThread = () => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://railway.bulletinboard.techtrain.dev/threads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to Create Thread.");
      }
      navigate("/");
    } catch (e) {
      console.error("Failed to get threads:", e);
    }
  };

  return (
    <section className={styles.createThreadPage}>
      <h2 className={styles.message}>スレッドを作る</h2>
      <div className={styles.createThread}>
        <input
          className={styles.input}
          type="text"
          id="name"
          name="name"
          required
          maxLength="128"
          size="50"
          placeholder="スレタイを入力"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleSubmit}>作成</button>
      </div>
      <Link to="/">戻る</Link>
    </section>
  );
};
