export default function page() {
  return (
    <form action="/save" method="post">
      <div className="wrapper">
        <div className="line-numbers">&gt;</div>
        <textarea autoFocus />
      </div>
    </form>
  );
}
