import { splitProps } from 'solid-js';

function Button(props) {
  const [local, others] = splitProps(props, ['onClick', 'children', 'ariaLabel', 'tabIndex']);

  return (
    <button
      class="bg-gray-200 text-black py-2 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={local.onClick}
      aria-label={local.ariaLabel}
      tabIndex={local.tabIndex}
      {...others}
    >
      {local.children}
    </button>
  );
}

export default Button;