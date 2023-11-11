export default function page() {
  return (
    <form action="/save" method="post">
      <div class="wrapper">
        <div class="line-numbers">&gt;</div>
        <textarea autofocus name="value" />
      </div>
    </form>
  );
}
