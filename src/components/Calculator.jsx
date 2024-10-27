import { createSignal, For, onMount } from 'solid-js';
import Button from './Button';
import Display from './Display';

function Calculator() {
  const [input, setInput] = createSignal('');
  const [result, setResult] = createSignal('');

  const handleButtonClick = (value) => {
    setInput(input() + value);
  };

  const calculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(input());
      setResult(evalResult.toString());
    } catch (error) {
      setResult('خطأ');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const handleKeyDown = (e) => {
    const key = e.key;
    if (/[0-9+\-*/.]/.test(key)) {
      e.preventDefault();
      handleButtonClick(key);
    } else if (key === 'Enter') {
      e.preventDefault();
      calculateResult();
    } else if (key === 'Escape' || key === 'Delete' || key === 'Backspace') {
      e.preventDefault();
      clearInput();
    }
  };

  onMount(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  const buttons = [
    { label: '7', value: '7' },
    { label: '8', value: '8' },
    { label: '9', value: '9' },
    { label: '÷', value: '/', ariaLabel: 'قسمة' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '×', value: '*', ariaLabel: 'ضرب' },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '-', value: '-', ariaLabel: 'طرح' },
    { label: '0', value: '0' },
    { label: '.', value: '.', ariaLabel: 'نقطة عشرية' },
    { label: '=', action: 'calculate', ariaLabel: 'يساوي' },
    { label: '+', value: '+', ariaLabel: 'جمع' },
  ];

  return (
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md">
      <Display input={input} result={result} />
      <div class="grid grid-cols-4 gap-2 p-4">
        <button
          class="col-span-2 bg-red-500 text-white py-2 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={clearInput}
          aria-label="مسح"
        >
          مسح
        </button>
        <For each={buttons}>
          {(button, index) => (
            <Button
              onClick={() => {
                if (button.action === 'calculate') {
                  calculateResult();
                } else {
                  handleButtonClick(button.value);
                }
              }}
              ariaLabel={button.ariaLabel || button.label}
              tabIndex={0}
            >
              {button.label}
            </Button>
          )}
        </For>
      </div>
    </div>
  );
}

export default Calculator;