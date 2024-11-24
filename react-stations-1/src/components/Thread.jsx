import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import styles from "./css/Thread.module.css";

export const Thread = () => {
  const { thread_id } = useParams(); // パラメータを取得する
  const { state } = useLocation(); // Linkで渡したpropsはuseLocationで取得できる
  const [comments, setComments] = useState({ posts: [] });
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://railway.bulletinboard.techtrain.dev/threads/${thread_id}/posts?offset=${offset}`
        );

        const data = await response.json();
        setComments(data);
      } catch (e) {
        console.error("Failed to fetch comments:", e);
      }
    };
    fetchComments();
  }, [thread_id, offset]);

  const handleNext = () => {
    setOffset((offsetValue) => {
      return offsetValue + 10;
    });
  };

  const handlePrev = () => {
    setOffset((offsetValue) => {
      return Math.max(0, offsetValue - 10);
    });
  };

  return (
    <div className={styles.comments}>
      <h2 className={styles.title}>{state.title}</h2>
      <ul style={{ listStyleType: "none" }}>
        {comments.posts.map((comment) => (
          <li key={comment.threadId} className={styles.comment}>
            {comment}
          </li>
        ))}
      </ul>
      <div className={styles.pagenations}>
        <button onClick={handlePrev} disabled={offset === 0}>
          Prev
        </button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};
