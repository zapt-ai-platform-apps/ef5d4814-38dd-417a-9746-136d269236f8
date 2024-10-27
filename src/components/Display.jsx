function Display(props) {
  return (
    <div class="p-4 text-right">
      <div class="text-gray-500 text-xl mb-2" aria-live="polite">
        {props.input}
      </div>
      <div class="text-black text-2xl font-bold" aria-live="polite">
        {props.result}
      </div>
    </div>
  );
}

export default Display;