import { createSignal } from 'solid-js';
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
      const englishInput = input()
        .replace(/٠/g, '0')
        .replace(/١/g, '1')
        .replace(/٢/g, '2')
        .replace(/٣/g, '3')
        .replace(/٤/g, '4')
        .replace(/٥/g, '5')
        .replace(/٦/g, '6')
        .replace(/٧/g, '7')
        .replace(/٨/g, '8')
        .replace(/٩/g, '9');

      const evalResult = eval(englishInput);
      const arabicResult = evalResult
        .toString()
        .replace(/0/g, '٠')
        .replace(/1/g, '١')
        .replace(/2/g, '٢')
        .replace(/3/g, '٣')
        .replace(/4/g, '٤')
        .replace(/5/g, '٥')
        .replace(/6/g, '٦')
        .replace(/7/g, '٧')
        .replace(/8/g, '٨')
        .replace(/9/g, '٩');
      setResult(arabicResult);
    } catch (error) {
      setResult('خطأ');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const buttons = [
    { label: '٧', value: '٧' },
    { label: '٨', value: '٨' },
    { label: '٩', value: '٩' },
    { label: '÷', value: '/' },
    { label: '٤', value: '٤' },
    { label: '٥', value: '٥' },
    { label: '٦', value: '٦' },
    { label: '×', value: '*' },
    { label: '١', value: '١' },
    { label: '٢', value: '٢' },
    { label: '٣', value: '٣' },
    { label: '-', value: '-' },
    { label: '٠', value: '٠' },
    { label: '.', value: '.' },
    { label: '=', action: 'calculate' },
    { label: '+', value: '+' },
  ];

  return (
    <div class="bg-white rounded-lg shadow-lg w-80">
      <Display input={input()} result={result()} />
      <div class="grid grid-cols-4 gap-2 p-4">
        <button
          class="col-span-2 bg-red-500 text-white py-2 rounded cursor-pointer"
          onClick={clearInput}
        >
          مسح
        </button>
        <For each={buttons}>
          {(button) => (
            <Button
              onClick={() => {
                if (button.action === 'calculate') {
                  calculateResult();
                } else {
                  handleButtonClick(button.value);
                }
              }}
              ariaLabel={button.label}
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