function Display(props) {
  return (
    <div class="p-4 text-left" dir="ltr">
      <div>
        <label class="block text-gray-700 text-lg mb-1" for="input-display">
          الإدخال
        </label>
        <div
          id="input-display"
          class="text-gray-500 text-xl mb-2 box-border"
          aria-live="polite"
          role="textbox"
        >
          {props.input()}
        </div>
      </div>
      <div>
        <label class="block text-gray-700 text-lg mb-1" for="result-display">
          النتيجة
        </label>
        <div
          id="result-display"
          class="text-black text-2xl font-bold box-border"
          aria-live="polite"
          role="textbox"
        >
          {props.result()}
        </div>
      </div>
    </div>
  );
}

export default Display;