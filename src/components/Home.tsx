function Home(props: { username: string }) {
  return (
    <div className="">
      <h2>Home</h2>
      <p>Welcome {props.username}!</p>
    </div>
  );
}

export default Home;
