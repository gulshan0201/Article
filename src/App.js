import Comments from "./Comments";

const App = () => {
  return (
    <div>
      <h1>Article 1</h1>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;
